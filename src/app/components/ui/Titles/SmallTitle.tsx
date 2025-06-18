import React from 'react'

const SmallTitle = ({titleContent = "This is sample title"} ) => {
  return (
    <div>
        <h1 className='text-6xl md:text-6xl lg:text-8xl font-anton'>
            {titleContent}
        </h1>
    </div>
  )
}

export default SmallTitle