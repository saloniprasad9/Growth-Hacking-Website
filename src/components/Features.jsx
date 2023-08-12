import React from 'react'
import styles , { layout } from '../style'
import gif1 from '../assets/61d6be9a05bd9eb56f860a93_ezgif.com-gif-maker (2).gif';
import gif2 from '../assets/61d6bca4cf7e8b0ee3688526_ezgif.com-gif-maker (1).gif';
import gif3 from '../assets/61d6bbda05bd9e2a1985fae0_ezgif.com-gif-maker.gif';
import gif4 from '../assets/61d6bd842e8e2e556c399681_jamming.gif';
import gif5 from '../assets/61d6b980187c4a64333206cb_community.gif';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
        <h2 className={`${styles.heading2}`}>How does the program work?</h2>
        <section className={`${layout.sectionReverse} flex flex-row`}>
          <div className={layout.sectionImgReverse}>
            <img src={gif1} alt='gif1' className='h-[100%] w-[100%] relative z-[5]'/> 
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={` text-[#bbd231] font-dm text-[25px] font-bold`}>WEEKLY LIVE Q&A Sessions</h2>
            <p className={`${styles.paragraph} max-w-[460px] mt-5 text-[#C0C0C0] text-[17px] font-bold font-dm`}>
              Have doubts about the program content or need guidance to fast-track your marketing career or facing roadblocks while scaling up your brand?I got you covered. Every week I will come LIVE and answer any question you through at me LIVE.
            </p>
          </div>
        </section>
        <section className={`${layout.sectionReverse} flex flex-row`}>
          <div className={layout.sectionInfo}>
            <h2 className={` text-[#bbd231] font-dm text-[25px] font-bold`}>WEEKLY MASTERCLASSES by Industry Experts</h2>
            <p className={`${styles.paragraph} max-w-[460px] mt-5 text-[#C0C0C0] text-[17px] font-bold font-dm`}>
            Why just learn from me, when you can learn from my friends and mentors too?<br/>Every week learn from marketing ninjas who have worked with brands like Accel, PitchGround, RazorPay, Springworks, and more.
            </p>
          </div>
          <div className={layout.sectionImgReverse}>
            <img src={gif2} alt='gif2' className='h-[100%] w-[100%] relative z-[5]'/> 
          </div>
        </section>
        <section className={`${layout.sectionReverse} flex flex-row`}>
          <div className={layout.sectionImgReverse}>
            <img src={gif3} alt='gif3' className='h-[100%] w-[100%] relative z-[5]'/> 
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={` text-[#bbd231] font-dm text-[25px] font-bold`}>ON-DEMAND CONTENT TRACK</h2>
            <p className={`${styles.paragraph} max-w-[460px] mt-5 text-[#C0C0C0] text-[17px] font-bold font-dm`}>
              We know coming LIVE daily to learn can be difficult. Hence I have created the on-demand video track where you can learn the most important concepts required by spending the least amount of time.<br/>Every week, study the video content and then come up with your doubts in the QnA session.
            </p>
          </div>
        </section>
        <section className={`${layout.sectionReverse} flex flex-row`}>
          <div className={layout.sectionInfo}>
            <h2 className={` text-[#bbd231] font-dm text-[25px] font-bold`}>JAMMING AND NETWORKING SESSIONS</h2>
            <p className={`${styles.paragraph} max-w-[460px] mt-5 text-[#C0C0C0] text-[17px] font-bold font-dm`}>
            Learning alone online is boring & tough.<br/>So, this program is structured in a model: Learn - Ask Questions - Discuss - Apply<br/>Hence every week, there will be a live session for you to discuss and share ideas with your peers, and jam on different problem statements so that you can meet people and learn together.
            </p>
          </div>
          <div className={layout.sectionImgReverse}>
            <img src={gif4} alt='gif4' className='h-[100%] w-[100%] relative z-[5]'/> 
          </div>
        </section>
        <section className={`${layout.sectionReverse} flex flex-row`}>
          <div className={layout.sectionImgReverse}>
            <img src={gif5} alt='gif5' className='h-[100%] w-[100%] relative z-[5]'/> 
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={` text-[#bbd231] font-dm text-[25px] font-bold`}>COMMUNITY FOR LIFETIME</h2>
            <p className={`${styles.paragraph} max-w-[460px] mt-5 text-[#C0C0C0] text-[17px] font-dm font-bold`}>
              You learn and grow best when you are surrounded by like-minded people: You will be made part of a community where you can network, share opportunities, and build relations.
            </p>
          </div>
        </section>
        <button className='bg-[#bed827] w-[400px] h-[70px] font-bold font-dm border border-r-6 border-round text-[#000000] text-semiBold rounded-[10px] items-center mt-8 text-dm text-[22px]'>Apply Now</button>
        <p className='text-[15px] text-[#C0C0C0] mt-4'>Program starts on 10th Sept 2023</p>
        <img src={line} alt='line' className='mt-20 w-[300px] h-[2px]'/>
    </div>
  )
}

export default Features