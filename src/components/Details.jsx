import React from 'react'
import styles ,{ layout } from '../style'
import tick3 from '../assets/Screenshot 2023-08-10 at 20-30-49 Growth Hacking.png';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
import { benefits } from '../constant';
const Details = () => {
  return (
    <div className='flex flex-col mt-20'>
        <div className='flex justify-center items-center'>
            <h2 className={`${styles.heading2}`}>Program Details</h2>
        </div>
        <div className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <div className='flex flex-col w-[550px] px-10 py-10 h-[720px] bg-darkolive_gradient border-[1px] border-[#ddee36] rounded-[14px]'>
                    <h2 className={`${styles.heading2}`}>Ready to join Growth hacking Program?</h2>
                    <p className='text-[#c0c0c0] font-bold font-dm'>Learn from industry experts to develop a growth mindset</p>
                    <div className='flex flex-col space-y-6 mt-10'>
                        <div className='flex flex-row text-left space-x-8 items-center'>
                            <img src={tick3} alt='tick3' className='h-[60px] w-[60px]'/>
                            <p className='text-white text-[30px] font-bold font-dm'>60+ Hours of Content</p>
                        </div>
                        <div className='flex flex-row text-left space-x-8 items-center'>
                            <img src={tick3} alt='tick3' className='h-[60px] w-[60px]'/>
                            <p className='text-white text-[30px] font-bold font-dm'>15+ Guest Sessions</p>
                        </div>
                        <div className='flex flex-row text-left space-x-8 items-center'>
                            <img src={tick3} alt='tick3' className='h-[60px] w-[60px]'/>
                            <p className='text-white text-[30px] font-bold font-dm'>8 Live QnA</p>
                        </div>
                        <div className='flex flex-row text-left space-x-8 items-center'>
                            <img src={tick3} alt='tick3' className='h-[60px] w-[60px]'/>
                            <p className='text-white text-[30px] font-bold font-dm'>Premium Growth Hacking community of marketers</p>
                        </div>
                        <button className='bg-[#bed827] w-[400px] h-[70px] font-bold font-dm border border-r-6 border-round text-[#000000] text-semiBold rounded-[10px] items-center mt-8 text-dm text-[22px]'>Apply Now</button>
                    </div>
                </div> 
            </div>
            <div className={`${layout.sectionImg} flex flex-col space-y-4`}>
                <h2 className='font-bold font-dm xs:text-[48px] text-[40px] text-[#ddee36] xs:leading-[76.8px] leading-[66.8px]'>What you get:</h2>
                {benefits.map((benefit,id) => (
                    <div key={id} className='flex flex-row'>
                        <img src={benefit.img} alt='benefit' className='h-[60px] w-[60px]'/>
                        <p className='text-white max-w-[400px] font-bold font-dm'>{benefit.content}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
        </div>
    </div>
  )
}

export default Details