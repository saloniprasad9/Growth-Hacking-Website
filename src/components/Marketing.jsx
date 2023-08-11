import React from 'react'
import styles from '../style';
import arrow from '../assets/62393f30eaff0773441763cf_Group 48097179.svg';
import hubspot from '../assets/6239424b0f868b9ee30c554a_Group 48097174.svg';
import pubg from '../assets/623941ecd9a520e20fc99977_Group 48097175.svg';
import uber from '../assets/623de450ba09624afdd7837f_Vector (6).svg';
import flipkart from '../assets/6239420af1583ac1657b6fe0_Vector (2).svg';
import amazon from '../assets/6239424b0dee5914142658a7_Group 48097173.svg';
import zomato from '../assets/62394209eaff07674417714f_Vector.svg';
import line1 from '../assets/6239405c881c5c4e99582067_Line 30.svg';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Marketing = () => {
  return (
    <div className='flex flex-col mt-20 justify-center items-center'>
        <div className='flex justify-center items-center'>
            <h2 className={`${styles.heading2}`}>How is Growth Hacking Different from Marketing?</h2>
        </div>
        <div className='border-[1px] border-[#c0c0c0] flex flex-row px-20 py-10 w-[1000px] h-[400px] rounded-[10px] bg-green_gradient2 mt-10'>
            <div className='flex flex-col'>
                <p className='text-[white] font-semibold'>The Growth Funnel</p>
                <img src={arrow} alt='arrow'  className='mt-8'/>
            </div>
            <div>
                <img src={line1} alt='line1' className='ml-10 mt-10 h-[280px] w-[2px]'/>
            </div>
            <div className='flex flex-col space-y-2 ml-10 max-w-[350px]'>
                <p className='text-white'>What is Growth Hacking?</p>
                <p className='text-white'>Growth hacking is all about running experiments and creating strategies for the exponential growth of the company while spending as little as possible.</p>
                <p className='text-white'>Funnel Breakdowns of Brands which are covered in the program</p>
                <div className='flex flex-row space-x-10'>
                    <img src={hubspot} alt='hubspot' className='h-[50px] w-[50px]'/>
                    <img src={pubg} alt='pubg' className='h-[50px] w-[50px]'/>
                    <img src={uber} alt='uber' className='h-[50px] w-[50px]'/>
                    <img src={flipkart} alt='flipkart' className='h-[50px] w-[50px]'/>
                </div>
                <div className='flex flex-row max-w-[100px] space-x-10'>
                    <img src={amazon} alt='amazon' className='h-[50px] w-[50px]'/>
                    <img src={zomato} alt='zomato' className='h-[50px] w-[50px]'/>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
        </div>
    </div>
  )
}

export default Marketing