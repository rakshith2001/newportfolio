import React,{ useState } from 'react'
import { FaBars,FaTimes ,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

import {Link} from 'react-scroll'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = ({dark,setDark}) => {
  
  
  const [nav,setNav] = useState(false);



  

  const onHandleClick = () => {
    setNav(!nav);
  }
  return (
   
    <div className={dark? 'fixed w-full bg-[#ffffff] h-[80px] flex justify-between items-center px-4 text-[#66fc9f]':'fixed w-full bg-[#0b0c10] h-[80px] flex justify-between items-center px-4 text-[#66fcf1]'}>
      <div className='text-2xl'>
        <div>RAKSHITH</div>
      </div>


      
      <DarkModeSwitch className='m-auto'
      style={{ marginBottom: '2rem' }}
      checked={dark}
      onChange={()=>setDark(!dark)}
      moonColor='black'
      sunColor='white'
      size={20} />
     

    

  
      

      
       
      {/* menu*/}
      
        <ul className=' hidden md:flex'>

          <li>
          <Link  to="home"  smooth={true}  duration={500} >
            Home
          </Link>
          </li>
          <li>
          <Link  to="about"  smooth={true}  duration={500} >
            About
          </Link>
          </li>
          <li>
          <Link  to="work"  smooth={true}  duration={500} >
            Work
          </Link>
          </li>
          <li>
          <Link  to="contact"  smooth={true}  duration={500} >
            Contact
          </Link>
          </li>
        </ul>
      

      {/* Hamburger menu */}
      <div className='md:hidden z-10 ' onClick={onHandleClick}>
        {!nav? <FaBars/> :<FaTimes/>}
      </div>

      {/** Hamburger items**/}
      <ul className={!nav ?'hidden': 'absolute   top-0 left-0 w-full h-screen bg-[#0b0c10] flex flex-col justify-center items-center '}>
          <li className='py-6 text-4xl'>
          <a a href='https://twitter.com/familyneedlove' target="_blank"  rel="noreferrer">
            Twitter
          </a>
          </li>

          <li className='py-6 text-4xl'>
          <a a href='https://github.com/rakshith2001' target="_blank"  rel="noreferrer">
            Github
          </a>
          </li>
          <li className='py-6 text-4xl'>
          <a a href='https://www.linkedin.com/in/rakshith-r-3a98aa187' target="_blank"  rel="noreferrer">
            LinkedIn
          </a>
          </li>
          <li className='py-6 text-4xl'>
          <a a href='https://drive.google.com/file/d/10UXA4Q11sNPG3_vjcm6c7-E08fJ627A7/view?usp=sharing' target="_blank"  rel="noreferrer">
            Resume
          </a>
          </li>
        </ul>

      {/** Social icons**/}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul >
        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1f2833]'>
          <a href='https://twitter.com/familyneedlove' target="_blank"  rel="noreferrer" className='flex justify-between items-center w-full '>
            Twitter <FaTwitter size={30}  style={{color:"#1DA1F2"}}/>
          </a>
        </li>

        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1f2833]'>
          <a href='https://github.com/rakshith2001'target="_blank"  rel="noreferrer" className='flex justify-between items-center w-full '>
            Github <FaGithub size={30} style={{color:"#171515"}} />
          </a>
        </li>

        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1f2833]'>
          <a href='https://www.linkedin.com/in/rakshith-r-3a98aa187' className='flex justify-between items-center w-full '>
            LinkedIn <FaLinkedin size={30} style={{color:"#0072b1"}}/>
          </a>
        </li>

        <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1f2833]'>
        <a href='https://drive.google.com/file/d/10UXA4Q11sNPG3_vjcm6c7-E08fJ627A7/view?usp=sharing' className='flex justify-between items-center w-full '>
            Resume <HiOutlineMail size={30}/>
          </a>
        </li>
      </ul>

      

      </div>

      

    </div>


    
  )
}

export default Navbar