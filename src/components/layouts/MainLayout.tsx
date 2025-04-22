import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-fit md:h-screen overflow-y-auto'>
      <div className='max-w-full md:max-w-screen h-full'>{children}</div>
    </div>
  )
}

export default MainLayout
