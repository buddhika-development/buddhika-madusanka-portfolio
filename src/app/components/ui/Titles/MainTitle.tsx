import React from 'react'

const MainTitle = ({titleContent = "This is sample main title"}) => {
  return (
    <div>
        <h1 className='font-anton md:text-9xl text-shadow-lg tracking-wide'>{titleContent}</h1>
    </div>
  )
}

export default MainTitle