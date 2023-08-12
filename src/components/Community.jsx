import React from 'react'
import community from '../assets/622aaf7dace452e06f4ae3cd__LP for GH Program - New Format_Page_07_Image_0001 1 (1).png';
import styles from '../style';
const Community = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
        <div className='flex flex-row items-center space-x-4'>
            <h2 className='text-white font-bold font-dm text-[40px]'>Get access to</h2>
            <h2 className='text-[#bbd231] font-bold font-dm text-[40px]'>Community of 800+ growth hackers</h2>
        </div>
        <img src={community} alt='community' className='mt-20 h-[40%] w-[40%]'/>
    </div>
  )
}

export default Community