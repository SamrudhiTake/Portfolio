import React from 'react'

const Part1 = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 overflow-none ">
        <div className='flex flex-col lg:flex-row items-center gap-10'>
            <div className='w-full lg:w-3/5'>
            <h2 className="text-4xl font-bold mb-6">
                Know Who <span className="text-purple-400">I'M</span>
            </h2>

            <p className="text-lg mb-4">
                Hi everyone! I'm <span className="font-semibold">Samrudhi Take</span>{" "}
                from Maharashtra, India.
            </p>

            <p className="text-lg mb-4">
                I'm currently pursuing a B.Tech in Electronics & Telecommunication
                Engineering at Government College of Engineering Amravati.
            </p>

            <p className="text-lg mb-6">
                I am passionate about web development and enjoy building responsive and
                user-friendly applications. I continuously improve my skills through
                projects, coding challenges, and learning new technologies.
            </p>

            <p className="text-lg mb-4">
                Apart from coding, some activities that I enjoy are:
            </p>

            <ul className="space-y-3 text-lg ml-4">
                <li>💻 Exploring new technologies</li>
                <li>📚 Learning Data Structures & Algorithms</li>
                <li>🎨 Designing modern web interfaces</li>
                <li>🌱 Working on personal projects</li>
            </ul>

            <p className="mt-8 text-xl italic text-purple-400">
                "Committed to learning, creating, and making a difference."
            </p>
            </div>

            <div className='w-full lg:w-2/5 flex justify-center '>
                <img className='max-w-full h-auto rounded-lg' src='https://www.roessner.tech/static/media/about.d8fe852f6a9badcd8616.png' alt='img'/>
            </div>
        </div>
    </section>
       
    
   
  )
}

export default Part1