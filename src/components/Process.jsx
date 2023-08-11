import React from 'react'
import styles , {layout} from '../style';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Process = () => {
  return (
    <div className='flex flex-col mt-20'>
        <div className='flex justify-center items-center'>
            <h2 className={`${styles.heading2}`}>How it works?</h2>
        </div>
        <div className={`${layout.sectionImg} mt-30 flex flex-col`}>
            <h2 className='text-[#ddee36]'>Application  Process</h2>
            <p className='text-white'>Fill out the application form to apply for the Program</p>
        </div>
        <div className={`${layout.sectionImgReverse} flex flex-col`}>
            <h2 className='text-[#ddee36]'>Application  Review</h2>
            <p className='text-white'>Experts review each application selecting only the people who are aligned with our goal and values. </p>
        </div>
        <div className={`${layout.sectionImg} flex flex-col`}>
            <h2 className='text-[#ddee36]'>Selection</h2>
            <p className='text-white'>Successful candidates will receive an email. </p>
        </div>
        <div className={`${layout.sectionImgReverse} flex flex-col`}>
            <h2 className='text-[#ddee36]'>Fellowship Kick-off & Onboarding</h2>
            <p className='text-white'>Welcome to the 6-week madness, to learn, and hit your goals. </p>
        </div>
        <div className={`${layout.sectionImg} flex flex-col`}>
            <h2 className='text-[#ddee36]'>Build Relations</h2>
            <p className='text-white'>Meet & network with your fellows </p>
        </div>
        <div className={`${layout.sectionImgReverse} flex flex-col`}>
            <h2 className='text-[#ddee36]'>Share</h2>
            <p className='text-white'>Celebrate your deals with the community</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <button className='bg-[#bed827] w-[400px] h-[70px] font-semibold border border-r-6 border-round text-[#000000] text-semiBold rounded-[10px] items-center mt-8 text-dm text-[22px]'>Apply Now</button>
            <p className='text-[15px] text-[#C0C0C0] mt-4'>Program starts on 26th June 2023</p>
        </div>
        <div className='flex justify-center items-center'>
            <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
        </div>
    </div>
  )
}

export default Process