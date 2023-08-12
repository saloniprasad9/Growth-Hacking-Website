import React from 'react'
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Deadline = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <div className='bg-green_gradient3 flex flex-row px-20 py-8 justify-between border-[1px] border-[#c0c0c0] rounded-[10px] w-[1000px] h-[200px]'>
            <div className='flex flex-col space-y-6 justify-center items-center'>
                <h2 className='text-white font-bold font-dm text-[20px]'>Application deadline</h2>
                <p className='text-white text-[45px] font-bold font-dm'>10 Aug, 2023</p>
            </div>
            <div className='flex flex-col space-y-6 justify-center items-center'>
                <h2 className='text-white font-bold font-dm text-[20px]'>Cohort Starts On</h2>
                <p className='text-white text-[45px] font-bold font-dm'>Sept 10th, 2023 </p>
            </div>
        </div>
        <div className='flex justify-center items-center mb-20'>
            <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
        </div>
    </div>
  )
}

export default Deadline