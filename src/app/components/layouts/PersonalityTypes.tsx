import React from 'react'
import Title from '../ui/Titles/Title'
import PersonalityTypeCard from './PersonalityTypeCard'

const PersonalityTypes = () => {
  return (
    <div className='flex flex-col justify-start'>
        {/* Title section
            There include section introduction catchy title
        */}
        <div className='mb-5 lg:mb-12'>
            <Title titleContent='To Build ' highlightText='Sustainable'/>
            <Title titleContent='Solution for ' highlightText='easy life'/>
        </div>

        {/* Personality types
            There include with kind of personality type roles I have run in the productino
        */}
        <div className='grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4'>
            <PersonalityTypeCard character='Idea Builder' image='/characters/ideaBuilderImage.png' alt_text='Hello, I am an idea creator' />
            <PersonalityTypeCard character='Designer' image='/characters/designerImage.png' />
            <PersonalityTypeCard character='Developer' image='/characters/developerImage.png' />
        </div>
    </div>
  )
}

export default PersonalityTypes