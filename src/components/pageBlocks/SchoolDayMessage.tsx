import GradientText from '../ui/GradientText'

const SchoolDayMessage = () => {
  return (
    <div className='fieldset rounded-box shadow-md w-full bg-success-content  text-center overflow-y-auto flex flex-col h-full justify-around items-center'>
      <h1 className='font-semibold text-primary text-2xl 2xl:text-5xl leading-none tracking-tight '>
        152 године школе у Приликама
      </h1>
      <GradientText
        colors={['#fdc700', '#00bafe', '#e6e4e3', '#ff6266', '#00d390']}
        animationSpeed={5}
        showBorder={false}
        className='fieldset-legend custom-class text-3xl 2xl:text-7xl'
      >
        <p className='font-bold tracking-widest'>-- ДАН ШКОЛЕ --</p>
      </GradientText>
    </div>
  )
}

export default SchoolDayMessage
