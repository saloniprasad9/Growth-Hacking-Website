import React from 'react'
import mentor from '../assets/628f46832d2893fc15fd2d25__LP for GH Program - New Format_Page_02_Image_0002 3.png';
import scriptbox from '../assets/628f46851486c573d93e43c0_Group-2.svg';
import box from '../assets/628f46867bd3c9003d5ddb81_image 90.png';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Mentor = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
        <h2 className='font-bold font-dm text-white text-[40px]'>Co-Mentors</h2>
        <div className='flex w-[350px] h-[550px] bg-green_gradient border-[1px] border-white justify-center rounded-[10px] mt-20'>
            <div className='flex flex-col'>
                <img src={mentor} alt='mentor' className='w-[300px] h-[300px] mt-8'/>
                <div className='leading-[30px]'>
                    <p className='text-[white] font-bold font-dm text-center'>Ishan Singh</p>
                    <p className='text-[white] font-bold font-dm text-center'>Growth Marketing Manager - <br/> Scripbox ; Growth Assistance - <br/> UpGrad & Fynd</p>
                    <div className='flex flex-row justify-center items-center'>
                        <img src={scriptbox} alt='scriptbox' className='h-[30%] w-[30%]'/>
                        <img src={box} alt='box'  className='h-[60px] w-[60px]'/>
                    </div>  
                </div>    
            </div>
        </div>
        <img src={line} alt='line' className='mt-20 w-[300px] h-[2px]'/>
    </div>
  )
}

export default Mentor