import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
    ClipboardCheck,
    ArrowRight,
    AlarmClock,
    Loader2
} from "lucide-react";

export default function TakeExam() {
  const { examId } = useParams()
  const [exam, setExam] = useState<any>(null)
  const [participant, setParticipant] = useState<any>(null)
  const [expired, setExpired] = useState(false)
  const [joined, setJoined] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}")
  const user = {
    name: storedUser.fullName || "Anonymous",
    email: storedUser.email || "unknown@example.com"
  }
  const isRegistered = !!storedUser.email


  // دریافت اطلاعات آزمون و شرکت‌کننده

useEffect(() => {
  if (!examId) return;

  const loadExam = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/exzamchain/${examId}`);
      if (!res.ok) {
        setNotFound(true);
        return;
      }

      const data = await res.json();
      setExam(data);

      const me = data.participants?.find((p: any) => p.email === user.email);
      setJoined(!!me);
      setParticipant(me);

      const now = Date.now();
      const examExpired = data.status?.expiredAt && new Date(data.status.expiredAt).getTime() < now;
      if (examExpired) {
        setExpired(true);
        return;
      }

      if (me?.expiresAt) {
        const end = new Date(me.expiresAt).getTime();
        const remaining = Math.floor((end - now) / 1000);
        setTimeLeft(remaining > 0 ? remaining : 0);
        setExpired(remaining <= 0);
      }
    } catch (err) {
      console.error("Error loading exam:", err);
      setNotFound(true);
    }
  };

  loadExam();
}, [examId]);

  // تایمر فردی
  useEffect(() => {
    if (!participant?.expiresAt || expired || !joined) return
    const end = new Date(participant.expiresAt).getTime()
    const interval = setInterval(() => {
      const now = Date.now()
      const remaining = Math.floor((end - now) / 1000)
      setTimeLeft(remaining > 0 ? remaining : 0)
      if (remaining <= 0) {
        clearInterval(interval)
        setExpired(true)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [participant, joined, expired])

  // ثبت شرکت‌کننده
  const handleJoin = async () => {
    const res = await fetch(`http://localhost:4000/api/exzamchain/${examId}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
  email: user.email,
  name: user.name // یا fullName یا هر چیزی که داری
})

    })
    const data = await res.json()
    if (res.ok) {
      setJoined(true)
      setParticipant(data.participant)
      const end = new Date(data.participant.expiresAt).getTime()
      const now = Date.now()
      const remaining = Math.floor((end - now) / 1000)
      setTimeLeft(remaining > 0 ? remaining : 0)
      setExpired(remaining <= 0)
    }
  }

  // ارسال پاسخ‌ها
  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:4000/api/exzamchain/${examId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, answers })
    })
    const data = await res.json()
    setResult(data)
    setSubmitted(true)
  }

  // اگر آزمون هنوز لود نشده
if (!exam) {
  return (
    <section className="py-20 sm:py-28 flex items-center justify-center">
      <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-pulse text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading exam...</span>
        </div>
        <p className="text-muted-foreground">Please wait while we prepare your exam.</p>
      </Card>
    </section>
  );
}

if (notFound) {
  return (
    <section className="py-20 flex justify-center items-center">
      <Card className="p-8 text-center space-y-4">
        <h1 className="text-3xl font-bold text-red-600">404 - Exam Not Found</h1>
        <p className="text-muted-foreground">
          This exam may have been deleted or the link is incorrect.
        </p>
        <Button onClick={() => navigate("/")}>
          Go Back Home
        </Button>
      </Card>
    </section>
  );
}

// اگر زمان تموم شد و هنوز ارسال نکرده
if (expired && !submitted && joined) {
  handleSubmit();
  return (
    <section className="py-20 sm:py-28 flex items-center justify-center">
      <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
          <AlarmClock className="h-5 w-5" />
          <span>⏰ Time is up!</span>
        </div>
        <p className="text-muted-foreground">
          The exam time has ended. Submitting your answers automatically...
        </p>
      </Card>
    </section>
  );
}

  // نمایش نتیجه
  if (submitted && result) {
    return (
  <section className="py-20 sm:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-purple-500/10 to-transparent" />
    <div className="container relative px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in space-y-8">
          
          {/* Exam Title */}
          <h1 className="text-3xl font-bold tracking-tight text-center">
            📊 Exam Result: {exam.title}
          </h1>

          {/* Score Summary */}
          <div className="grid sm:grid-cols-2 gap-6 text-center">
            <div className="p-4 rounded-lg border bg-background">
              <p className="text-sm text-muted-foreground">✅ Correct Answers</p>
              <p className="text-2xl font-bold text-emerald-600">
                {result.correctCount} / {exam.questions.length}
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-background">
              <p className="text-sm text-muted-foreground">📈 Score Percent</p>
              <p className="text-2xl font-bold text-purple-600">
                {result.scorePercent}%
              </p>
            </div>
          </div>

          {/* Questions Review */}
          <div className="space-y-6">
            {exam.questions.map((q: any, i: number) => (
              <Card key={q.id} className="p-6 border bg-background">
                <p className="font-semibold mb-4">
                  {i + 1}. {q.text}
                </p>
                <div className="space-y-2">
                  {q.choices.map((c: any) => {
                    const isSelected = result.answers[q.id]?.includes(c.id);
                    return (
                      <div
                        key={c.id}
                        className={`p-2 rounded-lg border ${
                          c.isCorrect
                            ? "border-emerald-500 bg-emerald-500/10"
                            : isSelected
                            ? "border-red-500 bg-red-500/10"
                            : "border-border"
                        }`}
                      >
                        <span
                          className={
                            c.isCorrect
                              ? "text-emerald-600 font-bold"
                              : isSelected
                              ? "text-red-600 font-medium"
                              : ""
                          }
                        >
                          {c.text}
                        </span>
                        {isSelected && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            ← Your Answer
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>

          {/* Top Participants */}
          {exam.participants?.length > 0 && (
            <div className="space-y-4 pt-10">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                🏆 Top Performers
              </h2>
              <div className="space-y-3">
                {exam.participants
                  .filter((p: any) => typeof p.scorePercent === "number")
                  .sort((a: any, b: any) => b.scorePercent - a.scorePercent)
                  .slice(0, 5)
                  .map((p: any, i: number) => (
                    <Card
                      key={p.email}
                      className="p-4 border flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-white shadow-glow ${
                            i === 0
                              ? "bg-gradient-to-br from-yellow-400 to-amber-600"
                              : "bg-gradient-to-br from-purple-500 to-pink-500"
                          }`}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-semibold">
                            {p.name || "Unnamed"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {p.email}
                          </p>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-purple-600">
                        {p.scorePercent}%
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  </section>
)
  }

  // نمایش اطلاعات اولیه + دکمه ورود
  if (!joined) {
    if (!isRegistered) {
      // کاربر ثبت‌نام نکرده
      return (
  <section className="py-20 sm:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-red-500/10 to-transparent" />
    <div className="container relative px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in space-y-6 text-center">
          {/* Exam Title */}
          <h1 className="text-3xl font-bold tracking-tight">{exam.title}</h1>

          {/* Warning */}
          <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-red-600 font-semibold text-lg flex items-center justify-center gap-2">
              ⚠️ You must register to participate in this exam.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3 text-muted-foreground">
            <p className="text-green-600 font-medium">
              ✅ Registration is free, and your exam results will be sent to your email.
            </p>
            <p>Please go to the login or registration page to sign up.</p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="w-full bg-gradient-hero hover:opacity-90 shadow-glow"
              onClick={() => navigate("/register")}
            >
              Go to Registration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </section>
)
    }

    if (expired) {
      // آزمون منقضی شده
      return (
  <section className="py-20 sm:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-pink-500/10 to-transparent" />
    <div className="container relative px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in space-y-8">
          {/* Exam Title */}
          <h1 className="text-3xl font-bold tracking-tight text-center">
            {exam.title}
          </h1>

          {/* Expired Notice */}
          <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
            <p className="text-red-600 font-semibold text-lg">
              ⏰ This exam has ended.
            </p>
          </div>

          {/* Participants Count */}
          <div className="p-4 rounded-lg border bg-background text-center">
            <p className="text-sm text-muted-foreground">📋 Total Participants</p>
            <p className="text-2xl font-bold">
              {exam.participants?.length || 0}
            </p>
          </div>

          {/* Top Participants */}
          {exam.participants?.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                🏆 Top Performers
              </h2>
              <div className="space-y-3">
                {exam.participants
                  .filter((p: any) => typeof p.scorePercent === "number")
                  .sort((a: any, b: any) => b.scorePercent - a.scorePercent)
                  .slice(0, 5)
                  .map((p: any, i: number) => (
                    <Card
                      key={p.email}
                      className="p-4 border flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-semibold">
                            {p.name || "Unnamed"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {p.email}
                          </p>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-purple-600">
                        {p.scorePercent}%
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  </section>
)
    }

    // کاربر ثبت‌نام کرده و آزمون هنوز فعال است
    return (
  <section className="py-20 sm:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-transparent" />
    <div className="container relative px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400">
            <ClipboardCheck className="h-4 w-4" />
            {exam.examId}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {exam.title}
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            {exam.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg border bg-background">
              <div className="text-xs text-muted-foreground">Duration:</div>
              <div className="text-xl font-semibold">{exam.durationMinutes} minutes</div>
            </div>
            <div className="p-4 rounded-lg border bg-background">
              <div className="text-xs text-muted-foreground">Number of Questions:</div>
              <div className="text-xl font-semibold">{exam.questions.length}</div>
            </div>
            <div className="p-4 rounded-lg border bg-background col-span-2">
              <div className="text-xs text-muted-foreground">Created by:</div>
              <div className="text-lg font-medium">
                {exam.creator?.name}{" "}
                <span className="text-muted-foreground text-sm">({exam.creator?.email})</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button
              size="lg"
              className="w-full bg-gradient-hero hover:opacity-90 shadow-glow"
              onClick={handleJoin}
            >
              Take the Exam
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          {exam.participants?.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                🏆 Top Performers
              </h2>
              <div className="space-y-3">
                {exam.participants
                  .filter((p: any) => typeof p.scorePercent === "number")
                  .sort((a: any, b: any) => b.scorePercent - a.scorePercent)
                  .slice(0, 5)
                  .map((p: any, i: number) => (
                    <Card
                      key={p.email}
                      className="p-4 border flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-semibold">
                            {p.name || "Unnamed"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {p.email}
                          </p>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-purple-600">
                        {p.scorePercent}%
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  </section>
);
  }

  if (joined && participant?.submittedAt && !submitted && !result) {
    // کاربر قبلاً آزمون رو داده، باید نتیجه‌اش رو ببینه
    const correctCount = exam.questions.reduce((acc: number, q: any) => {
      const correct = q.choices.filter((c: any) => c.isCorrect).map((c: any) => c.id)
      const selected = participant.answers[q.id] || []
      const isCorrect = correct.length === selected.length && correct.every(id => selected.includes(id))
      return acc + (isCorrect ? 1 : 0)
    }, 0)

    setResult({
      scorePercent: participant.scorePercent,
      correctCount,
      answers: participant.answers,
      rank: participant.rank
    })
    setSubmitted(true)
  }

  // نمایش سوالات
  return (
  <section className="py-20 sm:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-transparent" />
    <div className="container relative px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in space-y-8">
          {/* Exam Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">{exam.title}</h1>
            <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 font-semibold">
              ⏱ Time Left: {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {exam.questions.map((q: any, i: number) => (
              <Card key={q.id} className="p-6 border bg-background">
                <p className="font-semibold mb-4">
                  {i + 1}. {q.text}
                </p>
                <div className="space-y-2">
                  {q.choices.map((c: any) => (
                    <label
                      key={c.id}
                      className="flex items-center gap-2 p-2 rounded-lg border cursor-pointer hover:bg-purple-500/5 transition"
                    >
                      <input
                        type="checkbox"
                        className="accent-purple-600"
                        checked={answers[q.id]?.includes(c.id) || false}
                        onChange={(e) => {
                          const prev = answers[q.id] || [];
                          setAnswers({
                            ...answers,
                            [q.id]: e.target.checked
                              ? [...prev, c.id]
                              : prev.filter((x) => x !== c.id),
                          });
                        }}
                      />
                      <span>{c.text}</span>
                    </label>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button
              size="lg"
              className="w-full bg-gradient-hero hover:opacity-90 shadow-glow"
              onClick={handleSubmit}
            >
              Submit Answers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </section>
)
}