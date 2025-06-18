import React from 'react'
import SmallTitle from '../ui/Titles/SmallTitle'
import WorkflowCard from './WorkflowCard'
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";

const ProductionWorkflow = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 mb-16'>
        <div className='w-full lg:w-2/5'>
            <SmallTitle 
                titleContent='What is the Work Flow of the product development'
            />
            <div className='mt-5 lg:w-4/5'>
                <p>Product development turns ideas into impact—through research, design, develop, testing, and growth—to create solutions that truly matter.</p>
            </div>
        </div>
        <div className='w-full grid gap-3 md:grid-cols-2 md:gap-3 lg:w-3/5 lg:grid lg:grid-cols-3 lg:gap-7'>
            <WorkflowCard 
                icon={<FaRegLightbulb />}
                title='Ideation'
                content='Understand problem and build alternatives.'
            />
            <WorkflowCard 
                title='Validation'
                content='Validate the alternatives and select best one.'
            />
            <WorkflowCard 
                icon={<MdOutlineDesignServices />}
                title='Design'
                content='Make alternative usable and user friendly solution'
            />
            <WorkflowCard
                icon={<FaCode />}
                title='Develop'
                content='Make design into real product and serve to users'
            />
            <WorkflowCard 
                icon={<BiTestTube />}
                title='Test'
                content='Test the product and identify the required changes for optimizations.'
            />
        </div>
    </div>
  )
}

export default ProductionWorkflow