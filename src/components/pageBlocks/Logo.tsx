import LogoImg from './../../assets/logo/logo2.jpg'
const Logo = () => {
  return (
    <div className='stats bg-primary-content shadow text-center  flex items-center justify-center h-full'>
      <img
        src={LogoImg}
        alt=''
        className='block w-full h-full object-fit object-center'
      />
    </div>
  )
}

export default Logo
