export interface Exam {
  examId: string
  title: string
  description: string
  createdAt: string
  durationMinutes: number
  creator: { name: string; email: string }
  access: {
    maxParticipants?: number
    allowedEmails?: string[]
    public: boolean
  }
  questionCount?: number  // ← این خط جدید
  questions: Question[]
  participants: Participant[]
  status: {
    isActive: boolean
    expiredAt: string
  }
}

export interface Question {
  id: string
  text: string
  choices: { id: string; text: string; isCorrect: boolean }[]
  minCorrect: number
  hasIncorrect: boolean
  weight: number
}

export interface Participant {
  email: string
  startedAt: string
  submittedAt?: string
  answers: Record<string, string[]>
  scorePercent?: number
  rank?: number
}