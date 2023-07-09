import techNotes from '../assets/projects/Tech-notes.png'
import project2 from '../assets/projects/project2.png'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-[#c5c6c7] bg-[#0b0c10]'>
        <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#66FCF1]'>Work</p>
            <p className='py-7'>Check Out My Recent Works, Will keep on adding new Works</p>
          </div>

                <div 
                className='grid sm:grid-cols-2  md: grid-cols-3  gap-4'>
                    <div style={{backgroundImage:`url(${techNotes})`}} className='shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center md:mx-auto content-div'>
                        {/* Hover Effect */ }
                        <div className='opacity-0 group-hover:opacity-80'>
                            <span className='text-2xl font-bold text-[#c5c6c7] tracking-wider'>
                            MERN Stack Repair Shop App

                            </span>
                            <div className='pt-8 text-center'>
                            <a href='https://rakshithrepairs.onrender.com/'>
                                <button className='text-center rounded-lg  px-4 py-3m-2 bg-white text-gray-700s font-bold text-lg m-1'>DEMO</button>
                            </a>

                            <a href='https://github.com/rakshith2001/RakshithRepairs'>
                                <button className='text-center rounded-lg  px-4 py-3m-2 bg-white text-gray-700s font-bold text-lg'>Code</button>
                            </a>

                            </div>
                        </div>
                    </div>


                    <div style={{backgroundImage:`url(${project2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effect */ }
                        <div className='opacity-0 group-hover:opacity-80'>
                            <span className='text-2xl font-bold text-[#c5c6c7] tracking-wider'>
                            Tech Notes for Car service

                            </span>
                            <div className='pt-8 text-center'>

                            <a href='https://github.com/rakshith2001/newsapi'>
                                <button className='text-center rounded-lg  px-4 py-3m-2 bg-white text-gray-700s font-bold text-lg'>Code</button>
                            </a>

                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Work