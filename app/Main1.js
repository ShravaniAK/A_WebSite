import React from 'react'
import { FaArrowRight, FaVideo } from 'react-icons/fa'

const Main1 = () => {
  return (
    <div className="main1 flex flex-col md:flex-row items-center justify-center md:justify-between p-4">
      <div className="left1 mt-10 md:mt-[100px] flex flex-col justify-center items-center md:items-start md:w-1/2 relative">
        <h1 className='p-4 text-4xl md:text-6xl font-black text-center md:text-left relative z-10'>
          make the best financial decisions
        </h1>
        <img src="/blob1.png" className='absolute top-[-200px] left-0 w-[80%] h-full z-0 object-contain' alt="" />
        <p className='p-4 text-center md:text-left relative z-10'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        <div className="btns1 flex flex-col md:flex-row mt-4 w-full md:w-auto justify-center md:justify-start relative z-10">
          <button className='mb-2 md:mb-0 md:mr-4'>
            <div className='px-4 py-2 bg-black text-white rounded-md flex gap-4'>
              Get Started <FaArrowRight />
            </div>
          </button>
          <button>
            <div className='flex gap-4 px-4 py-2 bg-gray-200 rounded-md'>
              Watch Video <FaVideo />
            </div>
          </button>
        </div>
        <div className="leftBottom1 mt-4 md:mt-0 relative z-10">
          <img src="/lb1.png" alt="" />
        </div>
      </div>
      <div className="right1 w-full md:w-[700px] h-auto md:h-[700px] mt-10 md:mt-0">
        <img className='w-full h-full object-cover' src="/right1.png" alt="" />
      </div>
    </div>
  )
}

export default Main1
