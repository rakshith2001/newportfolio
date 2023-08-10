import React from 'react'

const About = ({dark}) => {
  return (
      <div name='about' className={dark?'w-full h-screen bg-[#ffffff] ':'w-full h-screen bg-[#0b0c10]'}>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#66FCF1] text-[#c5c6c7]'>About
                </p>
              </div>
              <div></div>
              </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                 <div className='sm:text-right text-4xl font-bold'>
              <p className='text-[#66FCF1]'>Hi. I'm Rakshith and Welcome to my Portfolio</p>
            </div>
            <div>
              <p className='text-[#c5c6c7]'>
              Allow me to introduce myself. My name is Rakshith, and I am a skilled web developer and software engineer with expertise in React, Node.js, and Express. With a strong passion for creating exceptional digital experiences, I utilize my proficiency in these technologies to build dynamic and interactive web applications. Through my dedication and commitment to delivering high-quality solutions, I strive to enhance user experiences and provide efficient software solutions. As a web developer, I am constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest industry trends. I am thrilled to contribute my skills and expertise to the ever-evolving world of web development.


              </p>
            </div>
      </div>

      </div>

      </div>
  )
}

export default About