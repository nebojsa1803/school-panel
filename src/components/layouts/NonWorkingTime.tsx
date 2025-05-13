import Clock from '../pageBlocks/Clock'
import CurrentActivity from '../pageBlocks/CurrentActivity'
import ImageSlideshow from '../pageBlocks/ImageSlideshow'
import Logo from '../pageBlocks/Logo'
import RingSchedule from '../pageBlocks/RingSchedule'

const NonWorkingTime = ({ time }: { time: Date }) => {
  return (
    <div className='grid md:grid-cols-8 md:grid-rows-5 h-full gap-2 p-2'>
      {/* Prvi red */}
      <div className='md:col-span-4 md:row-span-1'>
        <Logo />
      </div>
      <div className='md:col-span-4 md:row-span-1'>
        <Clock time={time} />
      </div>

      {/* Drugi red */}
      {/* <div className='md:col-span-2 md:row-span-3 md:row-start-2'>
        <ControlTeachers />
      </div> */}
      <div className='hidden md:block md:col-span-6 md:row-span-3 md:col-start-1 md:row-start-2'>
        <ImageSlideshow />
      </div>
      <div className='md:col-span-2 md:row-span-4 md:col-start-7 md:row-start-2'>
        <RingSchedule />
      </div>

      {/* Peti red */}
      <div className='md:col-span-6 md:row-span-1 md:col-start-1 md:row-start-5'>
        <CurrentActivity currentTime={time} />
      </div>
    </div>
  )
}

export default NonWorkingTime
