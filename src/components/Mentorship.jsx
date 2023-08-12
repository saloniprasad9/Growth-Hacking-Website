import React from 'react'
import { mentorships } from '../constant'
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
import styles from '../style';
const Mentorship = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className={`${styles.heading2}`}>Don't do this mentorship</h2>
            <div className='items-center'>
                {mentorships.map((mentorship, id) => (
                    <div key={id} className='flex flex-col px-4  items-center bg-red_gradient rounded-[10px] w-[600px] h-[150px] border border-white mt-8'>
                        <div className='flex flex-row mt-4 space-x-2'>
                            <img src={mentorship.icon} alt='mentorship' className='w-[50px] h-[50px]'/>
                            <div className='flex flex-col space-y-4 mt-2'>
                                <h2 className='text-white font-dm font-bold text-[20px]'>{mentorship.title}</h2>
                                <p className='text-white font-dm font-bold'>{mentorship.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
            </div>
        </div>
        
    </div>
  )
}

export default Mentorship