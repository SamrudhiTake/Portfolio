import React from 'react'
import { useNavigate } from 'react-router-dom'

const Options = () => {

  let navigate=useNavigate();
  return (
    <div className='flex gap-2'>
        <button onClick={()=> navigate('/Resume')} className='bg-blue-900 text-white font-semibold px-4 py-2 rounded-xl hover:bg-blue-950'>Resume</button>
        <button onClick={()=> navigate('/projects')}className='bg-blue-900 text-white font-semibold px-4 py-2 rounded-xl hover:bg-blue-950'>View Projects</button>
    </div>
  )
}

export default Options