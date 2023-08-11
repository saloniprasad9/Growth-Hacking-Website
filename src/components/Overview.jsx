import React from 'react'
import styles , {layout} from '../style';
import line from '../assets/621e160b9d0a4d49b289be58_Line 17.png';
const Overview = () => {
  return (
    <div className='flex flex-col mt-20'>
      <div className='flex justify-center items-center'>
        <h2 className={`${styles.heading2}`}>Program Overview</h2>
      </div>
      <div className={`${layout.sectionImg} mt-30`}>
        <div className='flex flex-col bg-green_gradient w-[400px] h-[300px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
            <div className='bg-olive_gradient items-center w-[100px] h-[30px] justify-center rounded-[6px] -mt-3 ml-3'>
              <h2 className=' flex text-black items-center justify-center'>WEEK 0</h2>
            </div>
            <div className='flex flex-col px-10 max-w-[470px] py-4'>
              <h2 className={`${styles.heading2}`}>Kickoff Week</h2>
              <ul className='list-disc space-y-2'>
                <li className='text-white font-bold font-dm'>Learn exactly how to make the most out of this program in 8 weeks.</li>
                <li className='text-white font-bold font-dm'>Get to know the people you are learning with through ice-breaker sessions.</li>
                <li className='text-white font-bold font-dm'>Interact in the community and make friends to learn with for the next 8 weeks.</li>
              </ul>
            </div>
          </div>
      </div>
      <div className={layout.sectionImgReverse}>
          <div className='flex flex-col bg-green_gradient w-[500px] h-[600px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
            <div className='bg-olive_gradient items-center w-[100px] h-[30px] justify-center rounded-[6px] -mt-3 ml-3'>
                <h2 className=' flex text-black items-center justify-center'>WEEK 1</h2>
            </div>
            <div className='flex flex-col px-10 max-w-[470px] py-4'>
              <h2 className={`${styles.heading2}`}>Fundamentals of Growth Hacking</h2>
              <ul className='list-disc'>
                <li className='text-white'>Understanding the fundamentals</li>
                <li className='text-white'>Growth Hacking framework.</li>
                <li className='text-white'>JTBD Framework & Building a persona.</li>
                <li className='text-white'>Psychographics vs Demographics</li>
                <li className='text-white'>OPN Deep dive</li>
                <li className='text-white'>Finding competitors</li>
                <li className='text-white'>Understanding competitor channels</li>
                <li className='text-white'>Piggybacking on competitors data</li>
              </ul>
              <h2 className={`${styles.heading2}`}>Projects you'll be doing</h2>
              <ul className='list-disc'>
                <li className='text-white'>Pirate Funnel Mapping</li>
                <li className='text-white'>JBDT building for a brand</li>
                <li className='text-white'>Build a persona for a brand</li>
                <li className='text-white'>Competitor report</li>
              </ul>
            </div>
          </div>
      </div>
      <div className={layout.sectionImg}>
            <div className='flex flex-col bg-green_gradient w-[500px] h-[900px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
                <div className='bg-olive_gradient items-center w-[100px] h-[30px] justify-center rounded-[6px] -mt-3 ml-3'>
                    <h2 className=' flex text-black items-center justify-center'>WEEK 2-3</h2>
                </div>
                <div className='flex flex-col px-10 max-w-[470px] py-4'>
                    <h2 className={`${styles.heading2}`}>Building a Kickass Landing Page that converts</h2>
                    <ul className='list-disc'>
                      <li className='text-white'>Symmetric Messaging</li>
                      <li className='text-white'>Copywriting – LIFT model</li>
                      <li className='text-white'>Building a kickass landing page</li>
                      <li className='text-white'>Hard vs Soft Data</li>
                      <li className='text-white'>UTM setup Building a tracking plan</li>
                      <li className='text-white'>Headline & LP testing</li>
                      <li className='text-white'>Speed tracking and optimization</li>
                      <li className='text-white'>Eye-tracking test</li>
                      <li className='text-white'>Usability test</li>
                    </ul>
                    <h2 className={`${styles.heading2}`}>Projects you'll be doing</h2>
                    <ul className='list-disc'>
                      <li className='text-white'>Build your landing page by writing copy using the LIFT method </li>
                      <li className='text-white'>Integrate GA, Pixel, and other tracking codes using GTM</li>
                      <li className='text-white'>Setup parameters for 4 channels & a basic tracking plan</li>
                      <li className='text-white'>Perform all the tests on the landing page and optimize the landing page based on test results</li>
                    </ul>
                </div>
            </div>
      </div>
      <div className={layout.sectionImgReverse}>
            <div className='flex flex-col bg-green_gradient w-[500px] h-[850px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
                <div className='bg-olive_gradient items-center w-[100px] h-[30px] justify-center rounded-[6px] -mt-3 ml-3'>
                    <h2 className=' flex text-black items-center justify-center'>WEEK 4</h2>
                </div>
                <div className='flex flex-col px-10 max-w-[470px] py-4'>
                    <h2 className={`${styles.heading2}`}>Customer Acquisition & Marketing that works</h2>
                    <ul className='list-disc'>
                      <li className='text-white'>Understanding Data</li>
                      <li className='text-white'>Google Analytics</li>
                      <li className='text-white'>Understanding user behavior using recordings</li>
                      <li className='text-white'>User Feedback</li>
                      <li className='text-white'>Heatmap analysis</li>
                      <li className='text-white'>Conversion Rate optimization based on learnings</li>
                      <li className='text-white'>Landing page experimentation</li>
                      <li className='text-white'>Symmetric Messaging Experimentation</li>
                    </ul>
                    <h2 className={`${styles.heading2}`}>Projects you'll be doing</h2>
                    <ul className='list-disc'>
                        <li className='text-white'>Google Analytics hunt</li>
                        <li className='text-white'>Aggregate all the feedback and document them on a notion doc</li>
                        <li className='text-white'>Make changes on the landing page based on new learnings</li>
                        <li className='text-white'>Perform an A/B test</li>
                        <li className='text-white'>Perform a personalization experiment</li>
                    </ul>
                </div>
            </div>
      </div>
      <div className={layout.sectionImg}>
            <div className='flex flex-col bg-green_gradient w-[500px] h-[900px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
                <div className='bg-olive_gradient items-center w-[100px] h-[30px] justify-center rounded-[6px] -mt-3 ml-3'>
                    <h2 className=' flex text-black items-center justify-center'>WEEK 5</h2>
                </div>
                <div className='flex flex-col px-10 max-w-[470px] py-4'>
                    <h2 className={`${styles.heading2}`}>Understanding various Acquisition and Retention Channels</h2>
                    <ul className='list-disc'>
                      <li className='text-white'>Retention deep-dive</li>
                      <li className='text-white'>Awareness + Acquisition channels overview</li>
                      <li className='text-white'>Understanding: CAC, LTV, CLTV.</li>
                      <li className='text-white'>Friction to value, painkillers vs vitamins, etc</li>
                      <li className='text-white'>Understanding Acquisition cost based on channel</li>
                      <li className='text-white'>Ad creative research</li>
                      <li className='text-white'>Ad creative optimization</li>
                      <li className='text-white'>Leveraging Al for ad testing without running ads</li>
                      <li className='text-white'>Ad copywriting using Al</li>
                      <li className='text-white'>Building audiences from FB groups and Scraping</li>
                    </ul>
                    <h2 className={`${styles.heading2}`}>Projects you'll be doing</h2>
                    <ul className='list-disc'>
                      <li className='text-white'>Build a channel strategy for a brand/product </li>
                      <li className='text-white'>T3 and B3 of competition</li>
                      <li className='text-white'>Building your ad creatives</li>
                      <li className='text-white'>Testing your creative without ad spend </li>
                      <li className='text-white'>Building copy using GPT3</li>
                      <li className='text-white'>Conduct your first scrapping experiment</li>
                    </ul>
                </div>
            </div>
      </div>
      <div className={layout.sectionImgReverse}>
            <div className='flex flex-col bg-green_gradient w-[500px] h-[850px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
                <div className='bg-olive_gradient items-center w-[100px] h-[30px] justify-center rounded-[6px] -mt-3 ml-3'>
                    <h2 className=' flex text-black items-center justify-center'>WEEK 6-7</h2>
                </div>
                <div className='flex flex-col px-10 max-w-[470px] py-4'>
                    <h2 className={`${styles.heading2}`}>Customer Lifecycle and Advanced Email Marketing</h2>
                    <ul className='list-disc'>
                      <li className='text-white'>User lifecycle automation</li>
                      <li className='text-white'>Setting up SMS, Push, Email automation</li>
                      <li className='text-white'>User Segmentation</li>
                      <li className='text-white'>Finding emails of people who matter</li>
                      <li className='text-white'>Email list verification</li>
                      <li className='text-white'>Email warming & setup SPF, DKIP</li>
                      <li className='text-white'>Cold Email Fundamental</li>
                      <li className='text-white'>Understanding typography & iconography</li>
                      <li className='text-white'>Cold email personalisation : Image + Text <br/> Setting up your first cold email campaign</li>
                    </ul>
                    <h2 className={`${styles.heading2}`}>Projects you'll be doing</h2>
                    <ul className='list-disc'>
                        <li className='text-white'>MixPanel Scavenger hunt</li>
                        <li className='text-white'>Design a user journey and set it up on MP</li>
                        <li className='text-white'>Setup your first cold emailing campaign</li>
                    </ul>
                </div>
            </div>
      </div>
      <div className={layout.sectionImg}>
            <div className='flex flex-col bg-green_gradient w-[500px] h-[600px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
                <div className='bg-olive_gradient items-center w-[100px] h-[30px] justify-center rounded-[6px] -mt-3 ml-3'>
                    <h2 className=' flex text-black items-center justify-center'>WEEK 8</h2>
                </div>
                <div className='flex flex-col px-10 max-w-[470px] py-4'>
                    <h2 className={`${styles.heading2}`}>Understanding User Onboarding, Virality and Growth Loops</h2>
                    <ul className='list-disc'>
                      <li className='text-white'>Monetization deep-dive</li>
                      <li className='text-white'>User onboarding & WOW moment</li>
                      <li className='text-white'>Building Growth Loops</li>
                      <li className='text-white'>Referral Marketing Campaigns</li>
                      <li className='text-white'>Viral Marketing Campaigns</li>
                    </ul>
                    <h2 className={`${styles.heading2}`}>Projects you'll be doing</h2>
                    <ul className='list-disc'>
                        <li className='text-white'>Identify roadblocks in the onboarding process</li>
                        <li className='text-white'>Design a referral or viral marketing campaign for a brand</li>
                    </ul>
                </div>
            </div>
      </div>
      <div className={`flex flex-col justify-center items-center mt-20`}>
        <div className='flex flex-col bg-green_gradient2 justify-center items-center w-[1200px] h-[200px] border-[#c0c0c0] border-[1px] rounded-[12px]'>
          <div className='bg-olive_gradient justify-center items-center w-[200px] h-[35px] rounded-[6px] -mt-11'>
            <h2 className=' flex text-black text-[20px] items-center justify-center'>Beyond 8 Weeks...</h2>
          </div>
          <div className='flex flex-col px-10 justify-center items-center py-4'>
              <h2 className={`${styles.heading2}`}>It's over? Nope !</h2>
              <p className='text-white text-center'>While the program is done and you have learned everything about growth hacking, you will learn and grow together with your peers and stay connected for life through our community. </p> 
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center border rounded-[8px] mt-10 border-[#ddee36] h-[50px] w-[200px]'>
          <p className='text-white'>Download Brochure</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src={line} alt='line' className='mt-20 w-[300px] h-[2px] flex justify-center items-center'/>
      </div>
    </div>
  )
}

export default Overview