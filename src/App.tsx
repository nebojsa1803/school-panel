import { useState, useEffect } from 'react'
import MainLayout from './components/layouts/MainLayout'
import StandardWorkingDay from './components/layouts/StandardWorkingDay'
import SchoolDay from './components/layouts/SchoolDay'

const App = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const day = time.getDay() // 0 (Nedelja) do 6 (Subota)
  const monthDay = time.getDate()
  const month = time.getMonth()
  const hours = time.getHours()
  const minutes = time.getMinutes()

  const isWithinActivePeriod =
    (day >= 1 &&
      day <= 5 && // Ponedeljak (1) do Petak (5)
      (hours > 7 || (hours === 7 && minutes >= 10)) &&
      hours < 14) ||
    (day >= 1 && day <= 5 && hours === 14 && minutes <= 15)

  const isWithinActiveSchoolDayPeriod =
    (day >= 1 &&
      day <= 5 && // Ponedeljak (1) do Petak (5)
      (hours > 7 || (hours === 7 && minutes >= 25)) &&
      hours < 12) ||
    (day >= 1 && day <= 5 && hours === 12 && minutes <= 30)

  const isSchoolDay = monthDay === 20 && month === 4 // 4 = may

  return (
    <MainLayout>
      {isSchoolDay ? (
        <SchoolDay
          time={time}
          isWithinActiveSchoolDayPeriod={isWithinActiveSchoolDayPeriod}
        />
      ) : (
        <StandardWorkingDay
          time={time}
          isWithinActivePeriod={isWithinActivePeriod}
        />
      )}
    </MainLayout>
  )
}

export default App
