import { Question } from "./examTypes"

export function scoreQuestion(q: Question, selected: string[], alpha = 0.7) {
  const correct = q.choices.filter(c => c.isCorrect).map(c => c.id)
  const incorrect = q.choices.filter(c => !c.isCorrect).map(c => c.id)

  const correctSelected = correct.filter(id => selected.includes(id)).length
  const incorrectSelected = incorrect.filter(id => selected.includes(id)).length

  const pos = correctSelected / correct.length
  const pen = alpha * (incorrectSelected / Math.max(1, incorrect.length))

  const score = Math.max(0, q.weight * (pos - pen))
  return Number(score.toFixed(2))
}