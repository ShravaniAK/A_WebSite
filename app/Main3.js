import React from 'react'

const Main3 = () => {
  return (
    <div className="main3 flex flex-col md:flex-row items-center justify-between p-4">
      <div className="left3 flex-1 mt-8 md:mt-0 p-4">
        <h6 className='text-red-500 text-lg font-semibold mb-2'>ADVANTAGES</h6>
        <h1 className='text-6xl font-black mb-6'>Why choose Uifry?</h1>
        <div className="flex items-center mb-4">
          <img src="/main3icon.png" className='mr-2 w-6 h-6' alt="" />
          <span className='font-semibold'>Clever Notifications</span>
        </div>
        <p className='text-gray-600'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
      </div>
      <div className="right3 flex-1 relative flex justify-center md:justify-end mt-8 md:mt-0">
        <img src="/blob2.png" className='absolute inset-0 z-0 object-contain w-full h-full' alt="" />
        <img src="/main3.png" className='relative z-10 object-contain w-3/4 md:w-full' alt="" />
      </div>
    </div>
  )
}

export default Main3
