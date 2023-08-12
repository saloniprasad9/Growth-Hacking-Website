import growthschool from '../assets/620fad0f6de223b564568807_image 14.png';
import herocontent from '../assets/622057e51aac4e15268ac6bf_Group 48096756.jpg';
import uber2 from '../assets/62203c24b1908f71fdb70972_Group 48096904.svg';
import klook from '../assets/62203c2537fd2f3203b22670_Group 48096903.svg';
import styles from '../style';
const Hero = () => {
    return (
        <section className={`flex md:flex-row h-screen bg-[#000000] w-full justify-center items-center`}>
            <div className={`flex-col xl:px-0 sm:px-16 px-6`}>
                <img src={growthschool} alt='growthschool' className='w-[120px] h-[50px]'/>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#bbd231] text-dm text-[40px] leading-[50px]`}>
                    Learn Growth Hacking that works in 8 weeks
                </p>
                <p className={`${styles.paragraph} max-w-[490px] mt-5 text-white text-[15px] leading-[30px]`}>
                An 8-week cohort-based course to help you build a career in growth and grow your business faster than ever.
                </p>
                <button className='bg-[#bed827] w-[400px] h-[70px] font-dm font-bold border border-r-6 border-round text-[#000000] text-semiBold rounded items-center mt-8 text-dm text-[22px]'>
                    Apply Now
                </button>
            </div>
            <div className={`flex flex-col space-y-10`}>
                <div className='border border-r-8 rounded-lg w-[420px] h-[250px]'>
                    <img src={herocontent} alt='herocontent' className='w-[420px] h-[250px]'/>
                </div>
                <div className='flex flex-col mt-10 items-center border-[1px] w-[410px] h-[100px] border-white rounded-[10px]'>
                    <div className='bg-[#1f2502] w-[110px] h-[40px] rounded-[12px] border-white -mt-6 border-[1px] flex justify-center items-center'>
                        <p className='text-white'>Instructed by</p>
                    </div>
                    <div className='bg-olive2_gradient w-[410px] px-10  py-2 h-[50px] flex flex-col justify-center items-center'>
                        <h2 className='text-white font-semibold'>Vaibhav Sisinty</h2>
                        <p className='text-white'>Founder - GrowthSchool</p>
                    </div>
                    <div className='bg-transparent flex flex-row px-4 items-center space-x-4'>
                        <p className='text-white'>Previously Worked at</p>
                        <img src={uber2} alt='uber2' className='w-[50px] h-[50px]'/>
                        <img src={klook} alt='klook' className='w-[50px] h-[50px]'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;