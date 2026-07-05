import React from 'react'
import LeftMain from './LeftMain'
import RightMain from './RightMain'

const Main = () => {
  return (
    <div className='flex items-center gap-20 justify-between py-10 % px-30 % h-[90vh] '>
        <LeftMain/>
        <RightMain/>

    </div>
  )
}

export default Main