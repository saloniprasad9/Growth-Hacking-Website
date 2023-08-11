import React from 'react'
import vaibhav from '../assets/621e98c0ca1634f75b8e0412_DSC08761 4.jpg';
import styles from '../style';
import linkedin from '../assets/Screenshot 2023-08-09 at 21-13-21 Growth Hacking.png';
import instagram from '../assets/Screenshot 2023-08-09 at 21-13-57 Growth Hacking.png';
import twitter from '../assets/Screenshot 2023-08-09 at 21-14-08 Growth Hacking.png';
import logos from '../assets/Screenshot 2023-08-09 at 21-38-58 Growth Hacking.png';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Instructor = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className={`${styles.heading2}`}>Instructed by</h2>
        <div className='flex flex-row rounded-[8px] bg-green_gradient2 h-[800px] w-[800px] px-4'>
            <img src={vaibhav} alt='vaibhav' className='w-[300px] h-[500px]'/>
            <div className='flex flex-col'>
                <h2 className={`${styles.heading2}`}>Vaibhav Sisinty</h2>
                <h2 className={`${styles.heading2}`}>Growth Hacker, Entrepreneur Ex. Uber, Klook</h2>
                <p className='text-white'>I turn startups into profitable businesses, growth consult for brands & help them use the internet to increase profitability & their overall bottom lines.</p>
                <p className='text-white'>In 2012 (at age 19), I moved from running Discovery Android to founding an award winning digital media company, CrazyHeads. Within 3 years, CrazyHead helped 100+ clients over the world grow their businesses using internet.</p>
                <p className='text-white'>After working at Uber ( India & Latin America ) for 4.5 years, I joined Klook to lead marketing for India & the Middle East where I scaled the business to over $27M in a year.</p>
                <div className='flex flex-row'>
                    <div className='bg-[#3e4503] justify-center items-center'>
                        <img src={linkedin} alt='linkedin' className='h-[30px] w-[30px]'/>
                    </div>
                    <div className='bg-[#232602] flex flex-row'>
                        <h2 className='text-white'>150M+</h2>
                        <p className='text-white'>impressions</p>
                        <h2 className='text-white'>330K+</h2>
                        <p className='text-white'>followers </p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-row'>
                        <div className='bg-[#3e4503]'>
                            <img src={instagram} alt='instagram'/>
                        </div>
                        <div className='bg-[#232602] flex flex-row'>
                            <h2 className='text-white'>84K+</h2>
                            <p className='text-white'>followers </p>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='bg-[#3e4503]'>
                            <img src={twitter} alt='twitter'/>
                        </div>
                        <div className='bg-[#232602] flex flex-row'>
                            <h2 className='text-white'>75K+</h2>
                            <p className='text-white'>followers </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-white'>Featured in</p>
                    <img src={logos} alt='logos'/>
                </div>
            </div>
        </div>
        <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
    </div>
  )
}

export default Instructor