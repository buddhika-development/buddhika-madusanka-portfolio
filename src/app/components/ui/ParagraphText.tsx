import React from 'react'

const ParagraphText = ({textContent = "this is smaple text conten"}) => {
  return (
    <div>
      <p className='font-normal font-poppins'>{textContent}</p>
    </div>
  )
}

export default ParagraphText