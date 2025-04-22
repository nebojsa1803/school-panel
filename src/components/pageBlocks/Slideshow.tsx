import { useState, useEffect } from 'react'
import FirstImg from './../../assets/school/fifth.jpg'
import SecondImg from './../../assets/school/first.jpg'
import ThirdImg from './../../assets/school/fourth.jpg'
import FourthImg from './../../assets/school/second.jpg'
import FifthImg from './../../assets/school/third.jpg'

const Slideshow = ({ interval = 1000 }) => {
  const images = [FirstImg, SecondImg, ThirdImg, FourthImg, FifthImg]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  return (
    <div
      className=' card rounded-box shadow-md relative overflow-hidden w-full p-4 text-center  flex items-center justify-center' // Tailwind klase
      style={{ height: '100%' }} // Dodajte željenu visinu ovde
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`} // Tailwind klase za pozicioniranje i tranziciju
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className='block w-full h-auto object-fit object-center' // Tailwind klase za prikaz slike
            style={{ height: '100%' }} // Dodajte height: '100%' ako želite da slika popuni visinu kontejnera
          />
        </div>
      ))}
    </div>
  )
}

export default Slideshow
