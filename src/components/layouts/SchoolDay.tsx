import Clock from '../pageBlocks/Clock'
import ControlTeachers from '../pageBlocks/ControlTeachers'
import ImageSlideshow from '../pageBlocks/ImageSlideshow'
import SchoolDayCurrentActivity from '../pageBlocks/SchoolDayCurrentActivity'
import SchoolDayMessage from '../pageBlocks/SchoolDayMessage'
import SchooldayRingSchedule from '../pageBlocks/SchooldayRingSchedule'
const SchoolDay = ({
  time,
  isWithinActiveSchoolDayPeriod,
}: {
  time: Date
  isWithinActiveSchoolDayPeriod: boolean
}) => {
  return (
    <div className='grid md:grid-cols-8 md:grid-rows-5 h-full gap-2 p-2'>
      {/* Prvi red */}
      <div className='md:col-span-4 md:row-span-1'>
        <SchoolDayMessage />
      </div>
      <div className='md:col-span-4 md:row-span-1'>
        <Clock time={time} />
      </div>
      {/* Drugi red */}
      {isWithinActiveSchoolDayPeriod ? (
        <div className='md:col-span-2 md:row-span-3 md:row-start-2'>
          <ControlTeachers />
        </div>
      ) : null}
      <div
        className={`hidden md:block md:col-span-${
          isWithinActiveSchoolDayPeriod ? 4 : 6
        } md:row-span-3 md:col-start-${
          isWithinActiveSchoolDayPeriod ? 3 : 1
        } md:row-start-2`}
      >
        <ImageSlideshow />
      </div>
      <div className='md:col-span-2 md:row-span-4 md:col-start-7 md:row-start-2'>
        <SchooldayRingSchedule />
      </div>
      {/* Peti red */}
      <div className='md:col-span-6 md:row-span-1 md:col-start-1 md:row-start-5'>
        <SchoolDayCurrentActivity currentTime={time} />
      </div>
    </div>
  )
}

export default SchoolDay
