import type { Exam } from "./examTypes"

// گرفتن اطلاعات آزمون
export async function fetchExam(examId: string): Promise<Exam> {
  const res = await fetch(`/data/exams/${examId}.json`)
  if (!res.ok) throw new Error("Exam not found")
  return res.json()
}

// ساخت آزمون جدید (MVP: فقط یک examId می‌سازه و برمی‌گردونه)
export async function createExam(data: Partial<Exam>): Promise<string> {
  const examId = Math.random().toString(36).substring(2, 8)
  const exam: Exam = {
    examId,
    title: data.title || "Untitled Exam",
    description: data.description || "",
    createdAt: new Date().toISOString(),
    durationMinutes: data.durationMinutes || 60,
    creator: data.creator || { name: "Anonymous", email: "anon@example.com" },
    access: { public: true },
    questions: [],
    participants: [],
    status: {
      isActive: true,
      expiredAt: new Date(Date.now() + (data.durationMinutes || 60) * 60000).toISOString()
    }
  }

  // TODO: در نسخه واقعی باید به سرور POST بشه و در فایل JSON ذخیره بشه
  console.log("Exam created:", exam)
  return examId
}

// ارسال پاسخ‌ها
export async function submitAnswers(examId: string, answers: Record<string, string[]>) {
  // TODO: در نسخه واقعی باید به سرور POST بشه
  console.log("Answers submitted for", examId, answers)
  return { success: true }
}