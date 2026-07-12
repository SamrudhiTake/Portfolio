import React from 'react'
import { Download } from 'lucide-react'
import ResumeTmg from '../assets/Resume.png';


const Resume = () => {
  return (
    <div className=' mb-20'>
      <div className='flex justify-center py-10  '>
        <a
          href="Resume.pdf"
          download
          className="px-6 py-3 bg-purple-500 text-white rounded-lg">
        <div className='flex gap-3 '>Download Resume<span><Download/></span></div>
        </a>
      </div>
      <div className='flex justify-center px-60 '>
        <img className='max-w-full h-auto' src={ResumeTmg} alt='resume'/>
      </div>
      <div className='flex justify-center py-10  '>
        <a
          href="Resume.pdf"
          download
          className="px-6 py-3 bg-purple-500 text-white rounded-lg">
        <div className='flex gap-3 '>Download Resume<span><Download/></span></div>
        </a>
      </div>
        
    </div>

  
  )
}

export default Resume