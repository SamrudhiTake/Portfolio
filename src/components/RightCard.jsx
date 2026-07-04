import React from 'react'
import profileimg from '../assets/WhatsApp.jpeg'

const RightCard = () => {
  return (
    <div className='h-full w-full overflow-hidden relative md:w-1/2 bg-blue-400 rounded-3xl '>
        <img className=' h-full w-full object-cover ' src={profileimg} alt='samrudhi'/>

    </div>
  )
}

export default RightCard