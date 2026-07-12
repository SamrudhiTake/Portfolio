import React from 'react'


const Find = () => {
  return (
    <div className='text-center'>
        <h2 className='text-3xl font-bold'>Find Me On</h2>
    
        <p className='text-xl mt-4'>Feel free to connect with me</p>

        <div className='flex justify-center gap-6 mt-8 mb-20'>
            <a href="https://github.com/SamrudhiTake">
                <div className='w-14 h-14 rounded-full flex items-center justify-center'>
                    <img className='h-12 w-12' src='https://www.pngarts.com/files/8/Black-Github-Logo-PNG-Photo.png'/>
                </div>
            </a>
              <a href="https://www.linkedin.com/in/samrudhi-take-815333348/">
                <div className='w-14 h-14 rounded-full flex items-center justify-center'>
                    <img className='h-12 w-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS6uHWtrq76P_huoHbVy-3Twk3K5uwKFAQke5Tks4XQ&s=10'/>
                </div>
            </a>
            <a href="https://leetcode.com/u/Samrudhitake_3106/">
                <div className='w-14 h-14  rounded-full flex items-center justify-center'>
                    <img className='h-12 w-12' src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'/>
                </div>
            </a>
            <a href="https://www.instagram.com/samrudhitakey/">
                <div className='w-14 h-14  rounded-full flex items-center justify-center'>
                    <img className='h-12 w-12' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'/>
                </div>
            </a>
              
        </div>
    </div>
  )
}

export default Find