import React from 'react'

const Main2 = () => {
  return (
    <div className="main2 flex flex-col md:flex-row items-center justify-between p-4">
      <div className="left2 flex-1 relative flex justify-center md:justify-start">
        <img src="/blob2.png" className='absolute inset-0 z-0 object-contain w-full h-full' alt="" />
        <img src="/main2.png" className='relative z-10 object-contain w-3/4 md:w-full' alt="" />
      </div>
      <div className="right2 flex-1 mt-8 md:mt-0 p-4">
        <h6 className='text-red-500 text-lg font-semibold mb-2'>FEATURES</h6>
        <h1 className='text-6xl font-black mb-6'>uifry premium </h1>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src="/main2star.png" className='mr-2 w-6 h-6' alt="" />
            <span className='font-semibold'>Budgeting Intervals</span>
          </div>
          <p className='text-gray-600'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
         
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src="/main2cube.png" className='mr-2 w-6 h-6' alt="" />
            <span className='font-semibold'>Budgeting Intervals</span>
          </div>
          <p className='text-gray-600'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src="/main2cube2.png" className='mr-2 w-6 h-6' alt="" />
            <span className='font-semibold'>Budgeting Intervals</span>
          </div>
          <p className='text-gray-600'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
      </div>
    </div>
  )
}

export default Main2
