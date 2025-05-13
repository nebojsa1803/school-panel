import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import FirstImg from './../../assets/school/fifth.jpg'
import SecondImg from './../../assets/school/first.jpg'
import ThirdImg from './../../assets/school/fourth.jpg'
import FourthImg from './../../assets/school/second.jpg'
import FifthImg from './../../assets/school/third.jpg'

const schoolPhotos = [
  {
    img: FirstImg,
    title: 'first_photo',
    id: 1,
  },
  {
    img: SecondImg,
    title: 'second_photo',
    id: 2,
  },
  {
    img: ThirdImg,
    title: 'third_photo',
    id: 3,
  },
  {
    img: FourthImg,
    title: 'fourth_photo',
    id: 4,
  },
  {
    img: FifthImg,
    title: 'fifth_photo',
    id: 5,
  },
]
const ImageSlideshow = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(), Fade()])
  return (
    <div
      className=' card rounded-box shadow-md relative overflow-hidden w-full text-center  flex items-center justify-center'
      style={{ height: '100%' }}
    >
      <div className='embla' ref={emblaRef}>
        <div className='embla__container h-full'>
          {schoolPhotos.map((photo) => {
            const { img, id, title } = photo
            return (
              <div key={id} className='embla__slide'>
                <img
                  src={img}
                  alt={title}
                  className='block w-full h-auto object-fit object-center' // Tailwind klase za prikaz slike
                  style={{ height: '100%' }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ImageSlideshow
