import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { v4 as uuidv4 } from "uuid"

export default function CreateExam() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState(60)
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      text: "",
      choices: [
        { id: uuidv4(), text: "", isCorrect: false },
        { id: uuidv4(), text: "", isCorrect: false }
      ]
    }
  ])
  const [examLink, setExamLink] = useState("")

  const handleAddQuestion = () => {
    if (questions.length >= 100) return
    setQuestions([
      ...questions,
      {
        id: uuidv4(),
        text: "",
        choices: [
          { id: uuidv4(), text: "", isCorrect: false },
          { id: uuidv4(), text: "", isCorrect: false }
        ]
      }
    ])
  }

  const handleAddChoice = (qi: number) => {
    const updated = [...questions]
    if (updated[qi].choices.length < 10) {
      updated[qi].choices.push({ id: uuidv4(), text: "", isCorrect: false })
      setQuestions(updated)
    }
  }

  const handleRemoveChoice = (qi: number, ci: number) => {
    const updated = [...questions]
    if (updated[qi].choices.length > 2) {
      updated[qi].choices.splice(ci, 1)
      setQuestions(updated)
    }
  }

  const handleCreate = async () => {
    const examId = uuidv4()
    const exam = {
      examId,
      title,
      description,
      durationMinutes: duration,
      createdAt: new Date().toISOString(),
      creator: { name: "Amir Hossein", email: "amir@example.com" },
      access: { public: true },
      questions,
      participants: [],
      status: {
        isActive: true,
        expiredAt: new Date(Date.now() + duration * 60000).toISOString()
      }
    }

    const res = await fetch("http://localhost:4000/api/exzamchain/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exam)
    })

    if (res.ok) {
      setExamLink(`https://exzamchain.com/exam/${examId}`)
    } else {
      setExamLink("")
      alert("خطا در ساخت آزمون")
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-2xl font-bold">ساخت آزمون جدید</h1>
      <Card className="p-6 space-y-4">
        <div>
          <Label>عنوان آزمون</Label>
          <Input value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <Label>توضیحات</Label>
          <Textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <Label>مدت آزمون (دقیقه)</Label>
          <Input type="number" value={duration} onChange={e => setDuration(+e.target.value)} />
        </div>

        <h2 className="text-lg font-semibold mt-6">سوالات آزمون</h2>
        {questions.map((q, qi) => (
          <Card key={q.id} className="p-4 space-y-2">
            <Label>متن سوال {qi + 1}</Label>
            <Textarea
              value={q.text}
              onChange={e => {
                const updated = [...questions]
                updated[qi].text = e.target.value
                setQuestions(updated)
              }}
            />

            <div className="space-y-2">
              {q.choices.map((c, ci) => (
                <div key={c.id} className="flex items-center gap-2">
                  <Input
                    value={c.text}
                    onChange={e => {
                      const updated = [...questions]
                      updated[qi].choices[ci].text = e.target.value
                      setQuestions(updated)
                    }}
                    placeholder={`گزینه ${ci + 1}`}
                  />
                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="checkbox"
                      checked={c.isCorrect}
                      onChange={e => {
                        const updated = [...questions]
                        updated[qi].choices[ci].isCorrect = e.target.checked
                        setQuestions(updated)
                      }}
                    />
                    پاسخ صحیح
                  </label>
                  <Button variant="ghost" size="sm" onClick={() => handleRemoveChoice(qi, ci)}>❌</Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={() => handleAddChoice(qi)}>➕ افزودن گزینه</Button>
            </div>
          </Card>
        ))}

        <Button variant="outline" onClick={handleAddQuestion}>➕ افزودن سوال جدید</Button>
        <Button onClick={handleCreate}>✅ ساخت آزمون</Button>

        {examLink && (
          <div className="mt-6 p-4 bg-green-100 rounded">
            <p className="font-semibold">آزمون با موفقیت ساخته شد!</p>
            <p className="text-sm mt-2">لینک آزمون:</p>
            <Input readOnly value={examLink} className="mt-1" />
          </div>
        )}
      </Card>
    </div>
  )
}