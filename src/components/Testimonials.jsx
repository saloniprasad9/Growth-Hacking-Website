import React from 'react'
import styles from '../style';
import pratik from '../assets/623df29e09aae14e30ace02a_1621497916373 2.png';
import vauld from '../assets/623df47b60a9262ad317d7b1_vauld_logo_light 1.svg';
import ramya from '../assets/623df29e0a8d331a62d3fd8a_1621497916373 3.png';
import mappes from '../assets/623df47ca8c1588f6e13d563_Screenshot 2022-03-22 at 7 1.png';
import akhand from '../assets/623df2ab6cc638cd9ec4761f_1621497916373 5.png';
import refrens from '../assets/623df47ce0e3aae6f8024a94_Mask group (1).png';
import sushil from '../assets/623df2ad1f756a70a33d75ec_1621497916373 6.png';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Testimonials = () => {
  return (
    <div className='flex flex-col mt-20 justify-center items-center'>
      <div className='flex justify-center items-center'>
        <h2 className={`${styles.heading2}`}>Testimonials</h2>
      </div>
      <div className='flex flex-row mt-10 space-x-10'>
        <div className='flex flex-col space-y-10'>
          <div className='flex flex-col bg-green_gradient2 border-[1px] px-8 py-6 border-white rounded-[10px] w-[400px] h-[200px]'>
            <div className='flex flex-col'>
              <div className='flex flex-row space-x-4'>
                <img src={pratik} alt='pratik' className='rounded-full w-[100px] h-[100px]'/>
                <div className='flex flex-col'>
                  <h2 className='text-white font-bold font-dm'>Pratik Shigli (Vivan)</h2>
                  <p className='text-white font-dm'>Marketing Manager</p>
                  <div className='flex justify-center mt-2 items-center rounded-[8px] bg-[rgba(255,255,255,.2)] border-[5px] border-[rgba(255,255,255,.4)] w-[60px] h-[30px]'>
                    <img src={vauld} alt='vauld' className='w-[40px] h-[40px]'/>
                  </div>
                </div>
              </div>
              <p className='text-[#c0c0c0] mt-2 font-dm'>Got a new job at Vauld and started making videos for Coindcx.</p>
            </div>
          </div>
          <div className='flex flex-col bg-green_gradient2 border-[1px] px-8 py-6 border-white rounded-[10px] w-[400px] h-[300px]'>
            <div className='flex flex-col'>
              <div className='flex flex-row space-x-4'>
                <img src={ramya} alt='ramya' className='rounded-full w-[100px] h-[100px]'/>
                <div className='flex flex-col'>
                  <h2 className='text-white font-bold font-dm'>Ramya Anudeep</h2>
                  <p className='text-white font-dm'>Growth & Marketing Director</p>
                  <div className='flex justify-center mt-2 items-center rounded-[8px] bg-[rgba(255,255,255,.2)] border-[5px] border-[rgba(255,255,255,.4)] w-[80px] h-[40px]'>
                    <img src={mappes} alt='mappes' className='w-[60px] h-[20px]'/>
                  </div>
                </div>
              </div>
              <p className='text-[#c0c0c0] mt-2 font-dm'>Started with zero knowledge in marketing and with zero income. Now became a growth hacker and having an agency , served and serving 30+ clients from the past 11 months with a consistent income of 2 lakhs per month.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-10'>
          <div className='flex flex-col bg-green_gradient2 border-[1px] px-8 py-6 border-white rounded-[10px] w-[400px] h-[300px]'>
            <div className='flex flex-col'>
              <div className='flex flex-row space-x-4'>
                <img src={akhand} alt='akhand' className='rounded-full w-[100px] h-[100px]'/>
                <div className='flex flex-col'>
                  <h2 className='text-white font-bold font-dm'>Akhand Pratap Singh</h2>
                  <p className='text-white font-dm'>Product Manager</p>
                  <div className='flex justify-center mt-2 items-center rounded-[8px] bg-[rgba(255,255,255,.2)] border-[5px] border-[rgba(255,255,255,.4)] w-[80px] h-[40px]'>
                    <img src={refrens} alt='refrens' className='w-[60px] h-[20px]'/>
                  </div>
                </div>
              </div>
              <p className='text-[#c0c0c0] mt-2 font-dm'>When I mentioned the traffic growth on their website and few other things in start of the conversation the founder got ready to have next conversation with me. That resulted getting a full time job as a Product Manager even after being a fresher.</p>
            </div>
          </div>
          <div className='flex flex-col bg-green_gradient2 border-[1px] px-8 py-6 border-white rounded-[10px] w-[400px] h-[250px]'>
            <div className='flex flex-col'>
                <div className='flex flex-row space-x-4'>
                  <img src={sushil} alt='sushil' className='rounded-full w-[100px] h-[100px]'/>
                  <div className='flex flex-col'>
                    <h2 className='text-white font-bold font-dm'>Dr. Sushil Kumar</h2>
                    <p className='text-white font-dm'>Being in doctor</p>
                  </div>
                </div>
                <p className='text-[#c0c0c0] mt-2 font-dm'>Being in doctor profession, I was totally unaware of the online customer journey. I learnt a lot. I have more clear vision regarding online training system</p>
              </div>
          </div>
        </div>
      </div>
      <button className='w-[120px] h-[50px] border-[#ddee36] font-dm text-white rounded-[6px] mt-20 border-[1px]'>Load more</button>
      <div className='flex justify-center items-center'>
        <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
      </div>
    </div>
  )
}

export default Testimonials