import { formatTime, getDayData } from '../../utils/functions'

const Clock = ({ time }: { time: Date }) => {
  return (
    <div className='stats bg-primary-content shadow text-center  flex items-center justify-center h-full'>
      <div className='stat  fieldset place-items-center'>
        <div className='fieldset-legend text-2xl 2xl:text-4xl leading-none tracking-tight'>
          {getDayData(time)}
        </div>
        <div className='fieldset-legend font-bold text-4xl 2xl:text-7xl text-primary tabular-nums'>
          {formatTime(time)}
        </div>
      </div>
    </div>
  )
}

export default Clock
