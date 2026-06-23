import { useEffect, useState } from 'react'

/**
 * Returns the current time in India (Asia/Kolkata), formatted as HH:MM,
 * updating once per second.
 */
export default function useIndiaTime() {
  const [time, setTime] = useState(() => formatIndiaTime())

  useEffect(() => {
    const id = setInterval(() => setTime(formatIndiaTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

function formatIndiaTime() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}
