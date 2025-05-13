import { useEffect, useState } from 'react'
import faceTest from './../../assets/photos/faceTest.jpeg'

const ControlTeachers = () => {
  const controlTeachers = [
    [
      {
        teacher: 'Наташа Зечевић',
        subject: 'Наставница географије',
      },
      {
        teacher: 'Мирјана Митровић',
        subject: 'Наставница информатике',
      },
      {
        teacher: 'Оливера Ћојбашић',
        subject: 'Учитељица',
      },
    ],
    [
      {
        teacher: 'Неђељко Лековић',
        subject: 'Наставник историје',
      },
      {
        teacher: 'Александра Ћурчић',
        subject: 'Наставница енглеског',
      },
      {
        teacher: 'Мирјана Араповић',
        subject: 'Учитељица',
      },
    ],
    [
      {
        teacher: 'Горан Костић',
        subject: 'Наставник ликовног',
      },
      {
        teacher: 'Ивана Миливојевић',
        subject: 'Наставница биологије',
      },
      {
        teacher: 'Лела Ћурчић',
        subject: 'Учитељица',
      },
    ],
    [
      {
        teacher: 'Радмила Костић',
        subject: 'Наставница српског',
      },
      {
        teacher: 'Ана Павловић',
        subject: 'Наставница музичког',
      },
      {
        teacher: 'Биљана Ћурчић',
        subject: 'Учитељица',
      },
    ],

    [
      {
        teacher: 'Мира Ремовић',
        subject: 'Наставница енглеског',
      },
      {
        teacher: 'Сања Мијаиловић',
        subject: 'Наставница физике',
      },
      {
        teacher: 'Данка Вучићевић',
        subject: 'Учитељица',
      },
    ],
  ]
  const [currentDayAdjusted, setCurrentDayAdjusted] = useState<number>(
    getAdjustedDay(new Date())
  )

  function getAdjustedDay(datum: Date): number {
    const dan = datum.getDay() // 0 za nedelju, 1 za ponedeljak, ..., 6 za subotu
    return dan === 0 ? 7 : dan // Prebacujemo nedelju (0) na 7, a ostale ostavljamo kako jesu
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const thisDayAdjusted = getAdjustedDay(new Date())
      if (thisDayAdjusted !== currentDayAdjusted) {
        setCurrentDayAdjusted(thisDayAdjusted)
      }
    }, 60 * 60 * 1000) // Proveravaj svakih sat vremena

    return () => clearInterval(intervalId)
  }, [currentDayAdjusted])

  return (
    <ul className='list  shadow-md rounded-box p-4 text-center bg-base-100 justify-around overflow-y-auto h-full'>
      <li className='p-4 pb-2  font-semibold text-xl leading-none tracking-tight text-center 2xl:text-4xl 2xl:pb-3'>
        Дежурни наставници
      </li>

      {controlTeachers[currentDayAdjusted - 1].map((dayGroup) => {
        const { teacher, subject } = dayGroup
        return (
          <li className='list-row' key={teacher}>
            <div>
              <img className='size-10 rounded-box 2xl:size-24' src={faceTest} />
            </div>
            <div>
              <div className=' 2xl:text-3xl'>{teacher}</div>
              <div className='text-xs uppercase font-semibold opacity-60 2xl:text-xl'>
                {subject}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ControlTeachers
