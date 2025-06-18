import React from 'react'

const Title = ({titleContent = "This is sample title", highlightText = ""} ) => {
  return (
    <div>
        <h1 className='text-6xl md:text-7xl lg:text-9xl font-anton'>{titleContent} 
            <span className='text-primary'>{highlightText}</span>
        </h1>
    </div>
  )
}

export default Title