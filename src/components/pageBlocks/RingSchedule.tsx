const RingSchedule = () => {
  const scheduleOrderRows = [
    ['1.', '8 : 00', '8 : 45', '5'],
    ['2.', '8 : 50', '9 : 35', '20'],
    ['3.', '9 : 55', '10 : 35', '20'],
    ['4.', '11 : 00', '11 : 45', '5'],
    ['5.', '11 : 50', '12 : 35', '5'],
    ['6.', '12 : 40', '13 : 25', '5'],
  ]

  return (
    <div className='rounded-box shadow-md w-full base-200 p-4 text-center overflow-y-auto flex flex-col h-full '>
      <div className='flex w-full justify-center items-center mb-5 '>
        <h1 className='font-semibold text-2xl 2xl:text-4xl leading-none tracking-tight'>
          Распоред звоњења
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
            <td className='text-center'>9 : 35</td>
            <td className='text-center'>9 : 55</td>
          </tr>
          <tr>
            <th colSpan={2} className='text-center'>
              Ужина
            </th>
            <td className='text-center'>10 : 40</td>
            <td className='text-center'>10 : 55</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RingSchedule
