import { useState, useEffect } from 'react'

interface CurrentActivityProps {
  currentTime: Date
}

function SchoolDayCurrentActivity({
  currentTime: initialTime,
}: CurrentActivityProps) {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const updateMessage = () => {
      const day = initialTime.getDay()
      const hours = initialTime.getHours()
      const minutes = initialTime.getMinutes()

      // Funkcija za proveru da li je vreme u datom opsegu (uključujući granice)
      const isInRange = (
        startingHours: number,
        startingMinutes: number,
        endingHours: number,
        endingMinutes: number
      ) => {
        const startingTime = new Date(initialTime)
        startingTime.setHours(startingHours, startingMinutes, 0, 0)
        const endingTime = new Date(initialTime)
        endingTime.setHours(endingHours, endingMinutes, 0, 0)
        return initialTime >= startingTime && initialTime < endingTime
      }

      if (day >= 1 && day <= 5) {
        if (isInRange(7, 25, 7, 55)) {
          setMessage('У току је претчас.')
        } else if (isInRange(7, 55, 8, 0)) {
          setMessage('У току је мали одмор.')
        } else if (isInRange(8, 0, 8, 30)) {
          setMessage('У току је први час.')
        } else if (isInRange(8, 30, 8, 35)) {
          setMessage('У току је мали одмор.')
        } else if (isInRange(8, 35, 9, 5)) {
          setMessage('У току је други час.')
        } else if (isInRange(9, 5, 9, 25)) {
          setMessage('У току је велики одмор.')
        } else if (isInRange(9, 25, 9, 55)) {
          setMessage('У току је трећи час.')
        } else if (isInRange(9, 55, 10, 15)) {
          setMessage('У току је велики одмор.')
        } else if (isInRange(10, 15, 10, 45)) {
          setMessage('У току је четврти час.')
        } else if (isInRange(10, 45, 10, 50)) {
          setMessage('У току је мали одмор.')
        } else if (isInRange(10, 50, 11, 20)) {
          setMessage('У току је пети час.')
        } else if (isInRange(11, 20, 11, 25)) {
          setMessage('У току је мали одмор')
        } else if (isInRange(11, 25, 11, 55)) {
          setMessage('У току је шести час.')
        } else if (isInRange(11, 55, 12, 0)) {
          setMessage('У току је мали одмор.')
        } else if (isInRange(12, 0, 12, 30)) {
          setMessage('У току је седми час.')
        } else if (
          (hours === 12 && minutes >= 30) ||
          hours > 12 ||
          hours < 7 ||
          (hours === 7 && minutes < 10)
        ) {
          setMessage('Сада нема наставе.')
        } else {
          setMessage(null) // Ako nijedan uslov nije ispunjen unutar radnog dana
        }
      } else {
        setMessage('Данас је нерадни дан.') // Vikend
      }
    }

    updateMessage()
  }, [initialTime]) // Efekat se ponovo pokreće ako se promeni initialTime

  return (
    <div className='stats rounded-box  shadow-md text-center  flex items-center justify-center h-full bg-info-content'>
      <div className='stat fieldset flex justify-center items-center '>
        <div className='fieldset-legend font-bold text-4xl 2xl:text-6xl text-info'>
          {message}
        </div>
      </div>
    </div>
  )
}

export default SchoolDayCurrentActivity
