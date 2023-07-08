
import { HiArrowNarrowRight } from 'react-icons/hi'
import Navbar from './Navbar'


const Home = () => {
  return (
 
    <div name='home' className='bg-[#0b0c10] w-full h-screen dark:bg-slate-50 '>


    <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#66FCF1]'>Hi, My Name is</p>
    <h1 className='text-[#c5c6c7] text-4xl sm:text-7xl font-bold'>Rakshith</h1>
    <h2 className='text-[#45a29e] text-4xl sm:text-7xl font-bold'>I'm a Full Stack Web Developer</h2>
    <p className='text-[#c5c6c7] text-3xl'>I'm a Full Stack Web Developer based in 
        India. I have a passion for web development and love to create for web and mobile devices.</p>
    <div  >
        <button className='text-white group  border-2 border-[#45a29e] px-6 py-3 my-2 flex  items-center hover:bg-[#66FCF1] hover:text-black transition  hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
        
        View Work <HiArrowNarrowRight className='ml-2'/ ></button>
    </div>
    </div>

    </div>
  
  )
}

export default Home