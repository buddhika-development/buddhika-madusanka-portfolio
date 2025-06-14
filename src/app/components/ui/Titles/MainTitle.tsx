import React from 'react'

const MainTitle = ({titleContent = "This is sample main title"}) => {
  return (
    <div>
        <h1 className='font-anton text-6xl text-center lg:text-left md:text-7xl lg:text-9xl text-shadow-lg tracking-wider'>{titleContent}</h1>
    </div>
  )
}

export default MainTitle