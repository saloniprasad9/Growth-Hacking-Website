import React from 'react'
import growthschool2 from '../assets/62b9011c0ac0e9603375bf6b_GS Logo Full.svg';
import divider from '../assets/Screenshot 2023-08-08 at 18-30-08 Growth Hacking.png';
import linkedin from '../assets/635286329efb3c48dba89e44_Frame 48097612 (1).svg';
import styles from '../style';
const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-col bg-[#000000] mt-10'>
        <div className='flex flex-col justify-center items-center bg-[#1f1f1f] h-[300px]'>
            <div className='flex flex-row space-x-4 items-center'>
                <img src={growthschool2} alt='growthschool2' className='h-[80px] w-[100px]'/>
                <img src={divider} alt='divider' className='w-[25px] h-[60px]'/>
                <img src={linkedin} alt='linkedin'/>
            </div>
            <div className='max-w-[510px]'>
                <p className={`${styles.paragraph} text-white mt-6 text-center `}>
                    For any support, please mail to hi@growthschool.io. Our support team will get back to you within 24 hours. The brands and companies that the instructors of growthschool are working or have worked, have no relation what so ever with Growthschool
                </p> 
            </div>
        </div>
        <div className=' flex justify-center items-center bg-[#1e1c1c]'>
            <p className={`${styles.paragraph} text-white mt-4 mb-4`}>©️ 2022 Growthschool.io. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer