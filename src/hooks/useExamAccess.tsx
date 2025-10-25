import { Exam } from "@/lib/examTypes"

export function useExamAccess(exam: Exam, userEmail: string) {
  if (!exam) return false

  // اگر عمومی باشه
  if (exam.access.public) return true

  // اگر لیست ایمیل داشته باشه
  if (exam.access.allowedEmails?.includes(userEmail)) return true

  return false
}