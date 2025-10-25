import { useEffect, useState } from "react"

export function useExamTimer(createdAt?: string, durationMinutes?: number) {
  const [timeLeft, setTimeLeft] = useState(0)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    if (!createdAt || !durationMinutes) return

    const endTime = new Date(createdAt).getTime() + durationMinutes * 60 * 1000

    const interval = setInterval(() => {
      const now = Date.now()
      const diff = Math.floor((endTime - now) / 1000)
      if (diff <= 0) {
        setExpired(true)
        setTimeLeft(0)
        clearInterval(interval)
      } else {
        setTimeLeft(diff)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [createdAt, durationMinutes])

  return { timeLeft, expired }
}