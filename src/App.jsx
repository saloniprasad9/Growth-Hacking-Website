import React from 'react'
import Hero from './components/Hero.jsx'
import styles from './style';
import Program from './components/Program.jsx';
import Footer from './components/Footer.jsx';
import Features from './components/Features.jsx';
import Community from './components/Community.jsx';
import Mentor from './components/Mentor.jsx';
import FAQ from './components/FAQ.jsx';
import Mentorship from './components/Mentorship.jsx';
import Reasons from './components/Reasons.jsx';
import Guest from './components/Guest.jsx';
import Instructor from './components/Instructor.jsx';
import Testimonials from './components/Testimonials.jsx';
import Overview from './components/Overview.jsx';
import Process from './components/Process.jsx';
import LogoSlider from './components/LogoSlider.jsx';
import Details from './components/Details.jsx';
import Marketing from './components/Marketing.jsx';
import Cohort from './components/Cohort.jsx';
import Deadline from './components/Deadline.jsx';
const App = () => {
  return (
    <div className='bg-[#000000] w-full'>
      <div className={`bg-[#000000]  ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Hero/>
              <Deadline/>
          </div>
      </div>
      <div className='flex flex-col'>
          <div>
              <Cohort/>
              <Program/>
              <Features/>
              <Mentorship/>
              <Marketing/>
              <Testimonials/>
              <Reasons/>
              <Overview/>
              <Instructor/>
              <Mentor/>
              <Guest/>
              <LogoSlider/>
              <Community/>
              <Process/>
              <Details/>
              <FAQ/>
              <Footer/>
          </div>
      </div>
    </div>
  )
}



export default App