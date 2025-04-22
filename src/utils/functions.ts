// returns hours : minutes : seconds
export const formatTime = (time: Date) => {
  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')

  return `${hours} : ${minutes} : ${seconds}`
}

// returns day
export const getDayData = (time: Date) => {
  const dayInWeek = time.toLocaleString('sr-RS', { weekday: 'long' })
  const dateInCalendar = time.toLocaleString('sr-RS', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return `${dayInWeek}, ${dateInCalendar} године`
}
