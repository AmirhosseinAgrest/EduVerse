import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs-extra";
import path from "path";
import dotenv from "dotenv";
import axios from "axios";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, "users.json");
const EXAMS_DIR = path.join(__dirname, "exams");

interface User {
  fullName: string;
  role?: string;
  country?: string;
  underserved?: boolean;
  email: string;
  password: string;
}

app.post("/api/signup", async (req: Request, res: Response) => {
  const { fullName, role, country, underserved, email, password } = req.body;

  if (!email || !password || !fullName) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const users: User[] = await fs.readJson(USERS_FILE).catch(() => []);

    if (users.find((u) => u.email === email)) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const newUser: User = { fullName, role, country, underserved, email, password };
    users.push(newUser);

    await fs.writeJson(USERS_FILE, users, { spaces: 2 });

    res.status(201).json({ message: "User saved to file successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const users: User[] = await fs.readJson(USERS_FILE).catch(() => []);

    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // اطلاعات غیرحساس رو برمی‌گردونیم
    const { fullName, role, country, underserved } = user;

    res.status(200).json({
      message: "Login successful",
      user: { fullName, email, role, country, underserved }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/truthsnap/scans", async (req: Request, res: Response) => {
  const scan = req.body;

  if (!scan || !scan.id || !scan.claim || !scan.score || !scan.explanation || !scan.userEmail) {
    return res.status(400).json({ message: "Invalid scan data" });
  }

  try {
    const SCANS_FILE = path.join(__dirname, "scans.json");
    const scans = await fs.readJson(SCANS_FILE).catch(() => []);
    scans.unshift(scan);
    await fs.writeJson(SCANS_FILE, scans, { spaces: 2 });

    res.status(201).json({ message: "Scan saved", id: scan.id });
  } catch (err) {
    console.error("Save scan error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/truthsnap/list", async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const SCANS_FILE = path.join(__dirname, "scans.json");
    const scans = await fs.readJson(SCANS_FILE).catch(() => []);
    const filtered = scans.filter((s: any) => s.userEmail === email);
    res.status(200).json({ scans: filtered });
  } catch (err) {
    console.error("List scans error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/truthsnap/scans", async (req: Request, res: Response) => {
  const { email } = req.query;

  try {
    const SCANS_FILE = path.join(__dirname, "scans.json");
    const scans = await fs.readJson(SCANS_FILE).catch(() => []);

    const filtered = email
      ? scans.filter((s: any) => s.userEmail === email)
      : scans;

    res.status(200).json({ scans: filtered });
  } catch (err) {
    console.error("List scans error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/truthsnap/scans/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const SCANS_FILE = path.join(__dirname, "scans.json");
    const scans = await fs.readJson(SCANS_FILE).catch(() => []);
    const updated = scans.filter((s: any) => s.id !== id);

    await fs.writeJson(SCANS_FILE, updated, { spaces: 2 });

    res.status(200).json({ message: "Scan deleted", id });
  } catch (err) {
    console.error("Delete scan error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/gemini", async (req: Request, res: Response) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent", // مدل معتبر
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        }
      }
    );

    res.status(200).json(response.data);
  } catch (err: any) {
    console.error("Gemini API error:", err.response?.data || err.message);
    res.status(500).json({
      message: "Gemini API request failed",
      error: err.response?.data || err.message
    });
  }
});

app.post("/api/github-ai", async (req: Request, res: Response) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    const token = process.env["GITHUB_AI_TOKEN"];
    const endpoint = "https://models.github.ai/inference";
    const model = "openai/gpt-4.1-mini";

    if (!token) {
      return res.status(500).json({ message: "GitHub AI token is missing in environment variables" });
    }

    // 🔍 تبدیل prompt به JSON قابل استفاده
    let parsedPrompt;
    try {
      parsedPrompt = JSON.parse(prompt);
    } catch (err) {
      return res.status(400).json({ message: "Invalid prompt format. Must be JSON stringified." });
    }

    const { system, history, user } = parsedPrompt;

    // ✅ ساخت آرایه‌ی messages برای مدل
    const messages = [
      { role: "system", content: system || "" },
      ...(Array.isArray(history) ? history : []),
      { role: "user", content: user }
    ];

    const client = ModelClient(endpoint, new AzureKeyCredential(token));

    const response = await client.path("/chat/completions").post({
      body: {
        messages,
        model
      }
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }

    res.status(200).json({ reply: response.body.choices[0].message.content });
  } catch (err: any) {
    console.error("GitHub AI error:", err);
    res.status(500).json({ message: "GitHub AI request failed", error: err });
  }
});

app.post("/api/exzamchain/create", async (req: Request, res: Response) => {
  const exam = req.body;

  if (!exam || !exam.examId || !exam.title || !exam.durationMinutes || !exam.questions) {
    return res.status(400).json({ message: "Invalid exam data" });
  }

  try {
    await fs.ensureDir(EXAMS_DIR);
    const filePath = path.join(EXAMS_DIR, `${exam.examId}.json`);
    await fs.writeJson(filePath, exam, { spaces: 2 });

    res.status(201).json({ message: "Exam saved", examId: exam.examId });
  } catch (err) {
    console.error("Create exam error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/exzamchain/:examId", async (req: Request, res: Response) => {
  const { examId } = req.params;

  try {
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const exam = await fs.readJson(filePath);
    res.status(200).json(exam);
  } catch (err) {
    console.error("Fetch exam error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/exzamchain/:examId/result", async (req: Request, res: Response) => {
  const { examId } = req.params;
  const { email, scorePercent, rank } = req.body;

  if (!email || scorePercent == null || rank == null) {
    return res.status(400).json({ message: "Missing result data" });
  }

  try {
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const exam = await fs.readJson(filePath);
    exam.participants = exam.participants || [];

    const existing = exam.participants.find((p: any) => p.email === email);
    if (existing) {
      existing.scorePercent = scorePercent;
      existing.rank = rank;
    } else {
      exam.participants.push({ email, scorePercent, rank });
    }

    await fs.writeJson(filePath, exam, { spaces: 2 });
    res.status(200).json({ message: "Result saved", email });
  } catch (err) {
    console.error("Save result error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/exzamchain/:examId/results", async (req: Request, res: Response) => {
  const { examId } = req.params;

  try {
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const exam = await fs.readJson(filePath);
    const sorted = (exam.participants || []).sort((a: any, b: any) => b.scorePercent - a.scorePercent);

    res.status(200).json({ results: sorted });
  } catch (err) {
    console.error("Fetch results error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/exzamchain/:examId/result", async (req: Request, res: Response) => {
  const { examId } = req.params;
  const { email, scorePercent, rank } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const EXAMS_DIR = path.join(__dirname, "exams");
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const exam = await fs.readJson(filePath);
    exam.participants = exam.participants || [];

    const already = exam.participants.find((p: any) => p.email === email);
    if (!already) {
      exam.participants.push({
        email,
        startedAt: new Date().toISOString(),
        answers: {},
        scorePercent: null,
        rank: null
      });
    }

    await fs.writeJson(filePath, exam, { spaces: 2 });
    res.status(200).json({ message: "Participant registered", email });
  } catch (err) {
    console.error("Join exam error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/exzamchain/:examId/submit", async (req: Request, res: Response) => {
  const { examId } = req.params;
  const { email, answers } = req.body;

  if (!email || !answers) {
    return res.status(400).json({ message: "Missing email or answers" });
  }

  try {
    const EXAMS_DIR = path.join(__dirname, "exams");
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const exam = await fs.readJson(filePath);

    // 1. بررسی انقضای کلی آزمون
    const now = new Date();
    if (exam.status?.expiredAt && new Date(exam.status.expiredAt) < now) {
      return res.status(400).json({ message: "Exam has expired" });
    }

    const participant = exam.participants.find((p: any) => p.email === email);
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    // 2. بررسی زمان فردی کاربر
    const end = new Date(participant.startedAt).getTime() + exam.durationMinutes * 60000;
    if (Date.now() > end) {
      return res.status(400).json({ message: "Your exam time has ended" });
    }

    // 3. جلوگیری از دوباره ارسال
    if (participant.submittedAt) {
      return res.status(400).json({ message: "You have already submitted this exam" });
    }

    participant.answers = answers;
    participant.submittedAt = new Date().toISOString();

    // تصحیح پاسخ‌ها
    let correctCount = 0;
    for (const q of exam.questions) {
      const correct = q.choices.filter((c: any) => c.isCorrect).map((c: any) => c.id);
      const selected = answers[q.id] || [];
      const isCorrect =
        correct.length === selected.length &&
        correct.every((id: string | number) => selected.includes(id));
      if (isCorrect) correctCount++;
    }

    participant.scorePercent = Math.round((correctCount / exam.questions.length) * 100);

    // محاسبه رتبه‌ها
    const sorted = exam.participants
      .filter((p: any) => p.scorePercent != null)
      .sort((a: any, b: any) => b.scorePercent - a.scorePercent);

    sorted.forEach((p: any, i: number) => {
      p.rank = i + 1;
    });

    await fs.writeJson(filePath, exam, { spaces: 2 });

    res.status(200).json({
      message: "Answers submitted",
      scorePercent: participant.scorePercent,
      correctCount,
      rank: participant.rank
    });
  } catch (err) {
    console.error("Submit answers error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/exzamchain/:examId/result/:email", async (req: Request, res: Response) => {
  const { examId, email } = req.params;
  try {
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }
    const exam = await fs.readJson(filePath);
    const participant = exam.participants.find((p: any) => p.email === email);
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.status(200).json(participant);
  } catch (err) {
    console.error("Fetch participant result error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/exzamchain/:examId", async (req: Request, res: Response) => {
  const { examId } = req.params;
  try {
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }
    await fs.remove(filePath);
    res.status(200).json({ message: "Exam deleted" });
  } catch (err) {
    console.error("Delete exam error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/api/exzamchain/:examId", async (req: Request, res: Response) => {
  const { examId } = req.params;
  const updates = req.body;
  try {
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }
    const exam = await fs.readJson(filePath);
    Object.assign(exam, updates);
    await fs.writeJson(filePath, exam, { spaces: 2 });
    res.status(200).json({ message: "Exam updated", exam });
  } catch (err) {
    console.error("Update exam error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/exzamchain/:examId/join", async (req: Request, res: Response) => {
  const { examId } = req.params;
  const { email, name } = req.body;

if (!email) {
  return res.status(400).json({ message: "Email is required" });
}

  try {
    const filePath = path.join(EXAMS_DIR, `${examId}.json`);
    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const exam = await fs.readJson(filePath);
    exam.participants = exam.participants || [];

    // 1. بررسی تاریخ کلی آزمون
    const now = new Date();
    if (exam.status?.expiredAt && new Date(exam.status.expiredAt) < now) {
      return res.status(400).json({ message: "Exam has expired" });
    }

    // 2. بررسی کاربر
    let participant = exam.participants.find((p: any) => p.email === email);

    if (!participant) {
      participant = {
  email,
  name: name || "Unnamed", // اگر name نبود، مقدار پیش‌فرض بده
  startedAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + exam.durationMinutes * 60000).toISOString(),
  answers: {},
  scorePercent: null,
  rank: null
};
      exam.participants.push(participant);
    } else {
      // 3. اگر قبلاً وارد شده بود، بررسی کن وقتش تموم نشده باشه
      const end = new Date(participant.startedAt).getTime() + exam.durationMinutes * 60000;
      if (Date.now() > end) {
        return res.status(400).json({ message: "Your exam time has ended" });
      }
    }

    await fs.writeJson(filePath, exam, { spaces: 2 });
    res.status(200).json({ message: "Participant registered", participant });
  } catch (err) {
    console.error("Join exam error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// مسیر تأیید مدرک
app.post('/verify', (req, res) => {
  const { credentialId } = req.body;

  if (!credentialId) {
    return res.status(400).json({ error: 'شناسه مدرک ارسال نشده است.' });
  }

  const filePath = path.join(__dirname, 'data', 'credentials.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('خطا در خواندن فایل:', err);
      return res.status(500).json({ error: 'خطا در سرور.' });
    }

    try {
      const credentials = JSON.parse(data);
      const record = credentials[credentialId];

      if (!record) {
        return res.status(404).json({
          verificationStatus: '❌ Invalid',
          message: 'مدرکی با این شناسه یافت نشد. ممکن است اشتباه تایپ شده باشد یا جعلی باشد.'
        });
      }

      return res.status(200).json({
        verificationStatus: '✅ Verified',
        credentialId,
        ...record
      });
    } catch (parseError) {
      console.error('خطا در تجزیه JSON:', parseError);
      return res.status(500).json({ error: 'خطا در پردازش داده‌ها.' });
    }
  });
});

app.listen(4000, () => {
  console.log("🚀 Server running on http://localhost:4000");
});
