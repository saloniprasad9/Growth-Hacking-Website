import React from 'react'
import { logos1 , logos2 } from '../constant';
import styles from '../style';
import Marquee from "react-fast-marquee";
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const LogoSlider = () => {
  return (
    <div className="flex flex-col mt-20">
        <div className='flex justify-center items-center'>
            <h2 className={`${styles.heading2}`}>Speakers from brands like</h2>
        </div>
        <Marquee speed={70} direction='right'>
            <div className='space-x-20 flex flex-row'>
                {logos1.map((logo,id) => (
                    <div key={id} className='flex flex-row justify-center items-center'>
                        <img src={logo.img} alt='logo' className='w-[100px] h-[100px]'/>
                    </div>
                ))}
            </div>
        </Marquee>
        <Marquee speed={70}>
            <div className='space-x-20 flex flex-row'>
                {logos2.map((logo,id) => (
                    <div key={id} className='flex flex-row justify-center items-center'>
                        <img src={logo.img} alt='logo' className='w-[100px] h-[100px]'/>
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

export default LogoSlider