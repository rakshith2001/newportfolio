
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = ({dark}) => {
  return (
 
    <div name='home' className={dark ?'bg-[#ffffff] w-full h-screen':'bg-[#0b0c10] w-full h-screen'}>


    <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#66FCF1]'>Hi, My Name is</p>
    <h1 className='text-[#c5c6c7] text-4xl sm:text-7xl font-bold'>Rakshith</h1>
    <h2 className='text-[#50bdb7] text-4xl sm:text-7xl font-bold'>I'M A WEB DEVELOPER</h2>
    <p className='text-[#c5c6c7] text-3xl'>I'm a Web developer Who Creates Web Apps Reach out to me if you want any Web related help :)</p>
    <div  >
        <button className='text-white group  border-2 border-[#45a29e] px-6 py-3 my-2 flex  items-center hover:bg-[#66FCF1] hover:text-black transition  hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
        
        View Work <HiArrowNarrowRight className='ml-2'/ ></button>
        
    </div>
  </div>
    

    
   

    </div>
  
  )
}

export default Home