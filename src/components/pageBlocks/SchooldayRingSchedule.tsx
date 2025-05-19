const scheduleOrderRows = [
  ['1.', '8 : 00', '8 : 30', '5'],
  ['2.', '8 : 35', '9 : 05', '20'],
  ['3.', '9 : 25', '9 : 55', '20'],
  ['4.', '10 : 15', '10 : 45', '5'],
  ['5.', '10 : 50', '11 : 20', '5'],
  ['6.', '11 : 25', '11 : 55', '5'],
]

const SchooldayRingSchedule = () => {
  return (
    <div className='rounded-box shadow-md w-full base-200 p-4 text-center overflow-y-auto flex flex-col h-full '>
      <div className='flex w-full justify-center items-center mb-5 '>
        <h1 className='font-semibold text-2xl 2xl:text-4xl leading-none tracking-tight'>
          Распоред звоњења (30')
        </h1>
      </div>
      {/* Uklonili smo ovaj div, tabela će biti direktni potomak flex kontejnera */}
      <table className='table table-zebra h-full '>
        {/* head */}
        <thead>
          <tr className='2xl:text-lg'>
            <th className='text-center'>Час</th>
            <th className='text-center'>Почетак часа</th>
            <th className='text-center'>Крај часа</th>
            <th className='text-center'>Одмор</th>
          </tr>
        </thead>
        <tbody className='2xl:text-xl 2xl:font-semibold'>
          {scheduleOrderRows.map((oneLine) => {
            const [num, start, end, pause] = oneLine
            return (
              <tr key={num}>
                <td className='text-center'>{num}</td>
                <td className='text-center'>{start}</td>
                <td className='text-center'>{end}</td>
                <td className='text-center'>{`${pause}'`}</td>
              </tr>
            )
          })}
        </tbody>
        <thead>
          <tr className='2xl:text-lg'>
            <th colSpan={2}></th>
            <th className='text-center'>Почетак</th>
            <th className='text-center'>Крај</th>
          </tr>
        </thead>
        <tbody className='2xl:text-xl 2xl:font-semibold'>
          <tr>
            <th colSpan={2} className='text-center'>
              Продужени боравак
            </th>
            <td className='text-center'>11 : 45</td>
            <td className='text-center'>16 : 30</td>
          </tr>
          <tr>
            <th colSpan={2} className='text-center'>
              Ужина
            </th>
            <td className='text-center'>9 : 05</td>
            <td className='text-center'>9 : 25</td>
          </tr>
          <tr>
            <th colSpan={2} className='text-center'>
              Ужина
            </th>
            <td className='text-center'>9 : 55</td>
            <td className='text-center'>10 : 15</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SchooldayRingSchedule
