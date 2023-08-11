import React from 'react'
import styles from '../style';
import { cohorts1 ,cohorts2 , cohorts3 } from '../constant';
import Marquee from "react-fast-marquee";
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Cohort = () => {
  return (
    <div className='flex flex-col space-y-10 justify-center items-center'>
      <div className='flex justify-center items-center'>
        <h2 className={`${styles.heading2}`}>People who have taken the Cohort</h2>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-[#c0c0c0] font-dm font-semibold text-[20px]'>A 8-week cohort-based course to help you build a Growth hacking mindset and boost your career.</p>
      </div>
      <Marquee speed={100} direction='right'>
            <div className='space-x-10 flex flex-row'>
                {cohorts1.map((cohort,id) => (
                    <div key={id} className='flex flex-col justify-center items-center w-[200px] h-[200px]'>
                        <img src={cohort.person} alt='cohort1' className='w-[120px] h-[120px] object-contain'/>
                        <div className='bg-white ml-16 -mt-4 w-[80px] h-[30px] rounded-[6px] px-2 py-2 object-contain'>
                            <img src={cohort.logo} alt='logo1' className='object-contain'/>
                        </div>
                    </div>
                ))}
            </div>
      </Marquee>
      <Marquee speed={70} direction='right'>
            <div className='space-x-20 flex flex-row'>
                {cohorts2.map((cohort,id) => (
                    <div key={id} className='flex flex-col justify-center items-center w-[200px] h-[200px]'>
                        <img src={cohort.person} alt='cohort2' className='w-[120px] h-[120px] object-contain'/>
                        <div className='bg-white ml-16 -mt-4 w-[80px] h-[30px] rounded-[6px] px-2 py-2 object-contain'>
                            <img src={cohort.logo} alt='logo2' className='object-contain'/>
                        </div>
                    </div>
                ))}
            </div>
      </Marquee>
      <Marquee speed={100} direction='right'>
            <div className='space-x-10 flex flex-row'>
                {cohorts3.map((cohort,id) => (
                    <div key={id} className='flex flex-col justify-center items-center w-[200px] h-[200px]'>
                        <img src={cohort.person} alt='cohort3' className='w-[120px] h-[120px] object-contain'/>
                        <div className='bg-white ml-16 -mt-4 w-[80px] h-[30px] rounded-[6px] px-2 py-2 object-contain'>
                            <img src={cohort.logo} alt='logo3' className='object-contain'/>
                        </div>
                    </div>
                ))}
            </div>
      </Marquee>
      <div className='flex justify-center items-center'>
            <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
      </div>
    </div>
  )
}

export default Cohort