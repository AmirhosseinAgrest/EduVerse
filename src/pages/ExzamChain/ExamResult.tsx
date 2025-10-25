import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchExam } from "@/lib/exam"

export default function ExamResult() {
  const { examId } = useParams()
  const [exam, setExam] = useState<any>(null)

  useEffect(() => {
    if (examId) fetchExam(examId).then(setExam)
  }, [examId])

  if (!exam) return <p>در حال بارگذاری...</p>

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-2xl font-bold">نتایج آزمون {exam.title}</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th>ایمیل</th>
            <th>امتیاز</th>
            <th>رتبه</th>
          </tr>
        </thead>
        <tbody>
          {exam.participants.map((p: any) => (
            <tr key={p.email}>
              <td>{p.email}</td>
              <td>{p.scorePercent}%</td>
              <td>{p.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}