import React from 'react'
import { skills } from './Skills'


const Part2 = () => {
  return (
    <div className='min-h-screen '>
        <h1 className='text-4xl text-center font-bold mt-50'>Professional <span className='text-purple-400'>Skillset</span></h1>
        <div className='align-center flex flex-wrap justify-center px-50 gap-6 mt-10 overflow-x-hidden' >
            {skills.map((skill) => {
                const Icon = skill.icon;

                return(
                    <button className='flex items-center gap-3 py-2 px-4 border-2 border-purple-500 rounded-full shadow-lg hover:scale-105 hover:bg-purple-500 transition-all duration-300'>
                        <Icon/>
                        <span>{skill.name}</span>
                    </button>
                );
            })}

        </div>
    </div>
  )
}

export default Part2