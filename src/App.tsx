import { useState, useEffect } from 'react'
import MainLayout from './components/layouts/MainLayout'
import ActivePeriod from './components/layouts/ActivePeriod'
import NonWorkingTime from './components/layouts/NonWorkingTime'

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
  const hours = time.getHours()
  const minutes = time.getMinutes()

  const isWithinActivePeriod =
    (day >= 1 &&
      day <= 5 && // Ponedeljak (1) do Petak (5)
      (hours > 7 || (hours === 7 && minutes >= 10)) &&
      hours < 14) ||
    (day >= 1 && day <= 5 && hours === 14 && minutes <= 15)
  return (
    <MainLayout>
      {!isWithinActivePeriod ? (
        <ActivePeriod time={time} />
      ) : (
        <NonWorkingTime time={time} />
      )}
    </MainLayout>
  )
}

export default App
