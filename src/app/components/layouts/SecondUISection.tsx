import React from 'react'
import Title from '../ui/Titles/Title'

const SecondUISection = () => {
  return (
    <div className='w-full h-full py-10 flex flex-col lg:flex-row'>

        {/* title section */}
        <div className='md:w-full lg:w-7/12'>
            <Title 
                titleContent='Everything Begins with a '
                highlightText='Valid Idea'
            />
        </div>

        {/* content section */}
        <div className='flex md:w-full lg:w-5/12 lg:flex-col lg:justify-center'>
            <hr className='border-[10px] mb-7 hidden lg:block' />
            <p className='font-normal text-[14px] pt-5 md:text-[16px] lg:pt-0'>Every innovation begins with a clear, intentional idea. I start with a defined purpose, carefully refine it with structured logic, and bring it to life through precise code. Clarity acts as the essential blueprint, guiding each step to ensure creation is purposeful. With intent driving the process and code as the tool, I transform vision into reality, crafting solutions that endure.</p>
        </div>
        
    </div>
  )
}

export default SecondUISection