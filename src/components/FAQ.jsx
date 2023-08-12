import React from 'react'
import { faqs } from '../constant'
import styles from '../style'
const FAQ = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <h2 className={`${styles.heading2}`}>FAQs: Here is everything you may ask...</h2>
        <div className='flex flex-col'>
            {faqs.map((faq, id) => (
                <div key={id} className='flex flex-row justify-between px-4 bg-darkgreen_gradient items-center rounded-[10px] w-[800px] h-[80px] border border-white mt-8'>
                    <p className='text-white font-bold font-dm text-[20px]'>{faq.title}</p>
                    <img src={faq.img} alt='faq' className='w-[30px] h-[30px]'/>
                </div>
            ))}
        </div>
        <button className='bg-[#bed827] w-[400px] h-[70px] font-bold font-dm border border-r-6 border-round text-[#000000] text-semiBold rounded-[10px] items-center mt-8 text-dm text-[22px]'>Apply Now</button>
        <p className='text-[15px] text-[#C0C0C0] mt-4 font-bold font-dm'>Program starts on 10th Sept 2023</p>
    </div>
  )
}

export default FAQ