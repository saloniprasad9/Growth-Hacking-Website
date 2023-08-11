import React from 'react'
import styles from '../style'
import line2 from '../assets/621e14632f3c54386bb4142c_Line 5.png';
import andrew from '../assets/62392a17db586c586fb3f8e7_image 64.png';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Reasons = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className={`${styles.heading2}`}>But, why Become a </h2>
            <h2 className='font-semibold xs:text-[48px] text-[40px] text-[#ddee36] xs:leading-[76.8px] leading-[66.8px] '>Growth Hacker?</h2>
        </div>
        <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-semibold xs:text-[48px] text-[40px] text-[#ddee36] xs:leading-[76.8px] leading-[66.8px] '>₹18L</h2>
                <p className={`${styles.paragraph} text-white text-center text-[20px] leading-[30px]`}>Experienced Growth <br/> Hackers earn an average of <br/> ₹18 Lakhs per annum</p>
            </div>
            <img src={line2} alt='line2' className='h-[160px] w-[2px] ml-10'/>
            <div className='flex flex-col justify-center items-center ml-20'>
                <h2 className='font-semibold xs:text-[48px] text-[40px] text-[#ddee36] xs:leading-[76.8px] leading-[66.8px] '>25000+</h2>
                <p className={`${styles.paragraph} text-white text-center text-[20px] leading-[30px]`}>There are more than 25000 <br/> openings for the role of <br/> Growth Hackers</p>
            </div>
            <img src={line2} alt='line2' className='h-[160px] w-[2px] ml-10'/>
            <div className='flex flex-col justify-center items-center ml-20'>
                <h2 className='font-semibold xs:text-[48px] text-[40px] text-[#ddee36] xs:leading-[76.8px] leading-[66.8px] '>4000+</h2>
                <p className={`${styles.paragraph} text-white text-center text-[20px] leading-[30px]`}>There are more than 4000 <br/> remote opportunities for <br/>Growth Hacking</p>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center border border-dashed mt-20 border-[#ddee36] w-[580px] h-[150px] rounded-[10px]'>
            <img src={andrew} alt='andrew' className='rounded-full h-[100px] w-[100px]'/>
            <div className='flex flex-col justify-center items-center ml-20'>
                <p className={`${styles.paragraph} text-white text-[20px]`}>“Growth Hacker is the new VP of Marketing”</p>
                <p className='text-white mt-4 text-[18px]'>-Andrew Chen</p>
            </div>
        </div>
        <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
    </div>
  )
}

export default Reasons