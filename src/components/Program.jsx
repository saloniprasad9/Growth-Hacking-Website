import React from 'react'
import styles , {layout} from '../style';
import { program1 , program2 } from '../constant';

const ProgramCard = ({img , title ,list1content , list2content , list3content ,index}) => (
    <div className={`flex flex-row p-6 rounded-[10px] w-full bg-green_gradient border border-[rgba(255,255,255,.41)] ${index !== program1.length ? "mb-6" : 'mb-0'} feature-card `}> 
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
        <img src={img} alt='icon' className='w-[60px] h-[60px]'/>
      </div>
      <div className='flex-1 flex flex-col ml-3 text-[15px] space-y-2 leading-[24px] mb-1'>
        <h2 className='text-white text-[20px] font-bold font-dm'>{title}</h2>
        <ul key={program1.id}>
            <li className='text-white list-disc font-bold font-dm'>{list1content}</li>
            <li className='text-white list-disc font-bold font-dm'>{list2content}</li>
            <li className='text-white list-disc font-bold font-dm'>{list3content}</li>
        </ul>
      </div>
    </div>
  )


const Program = () => {
  return (
    <div className={`flex flex-col h-screen bg-[#000000] w-full mt-40 justify-center items-center`}>
        <div className='items-center'>
            <h2 className={`${styles.heading2}`}>
                Who is this program for?
            </h2>
        </div>
        <div className='flex flex-row align-items-center mt-10'>
            <div className={`${layout.sectionImg} flex-col`}>
                {program1.map((program, index) => (
                <ProgramCard key={program.id} {...program} index={index}/>
                ))}
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {program2.map((program, index) => (
                <ProgramCard key={program.id} {...program} index={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Program