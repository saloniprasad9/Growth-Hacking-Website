import React from 'react'
import styles from '../style';
import { guests } from '../constant';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Guest = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className={`${styles.heading2} mt-20`}>Guest sessions by</h2>
        <div className='guest-list'>
            {guests.map((guest,id) => ( 
                <div key={id} className='flex mt-10 flex-col border justify-center rounded-[6px] w-[320px] h-[420px] bg-green_gradient2 space-y-2 px-4'>
                  <h2 className='text-white'>{guest.title}</h2>
                  <img src={guest.img} alt='guests' className='h-[260px] w-[280px] rounded-[10px]'/>
                  <p className='text-white font-bold font-dm'>{guest.name}</p>
                  <p className='text-white font-bold font-dm'>{guest.designation}</p>
                </div>
            ))}
        </div>
        <button className='h-[30px] w-[60px] text-black font-semibold bg-white mt-10'>Next</button>
        <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
    </div>
  )
}

export default Guest