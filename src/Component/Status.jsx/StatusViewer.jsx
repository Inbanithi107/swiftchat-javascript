import React, { useEffect, useState } from 'react'
import { stories } from './DummyStory'
import ProgressBar from './ProgressBar';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router-dom';

const StatusViewer = () => {
    const [currentStoryIndex,Setcurrentstoryindex]=useState(0);
    const [activeindex,Setactiveindex]=useState(0);
    const navigate=useNavigate();

    const handleNextStory=()=>{
        if(currentStoryIndex < stories.length-1){
            Setcurrentstoryindex(currentStoryIndex+1);
            Setactiveindex(activeindex+1);
        }else{
            Setcurrentstoryindex(0);
            Setactiveindex(0);
        }
    }
    useEffect(()=>{
        const intervalid=setInterval(()=>{
            handleNextStory();
        },2000)
        return ()=>clearInterval(intervalid);
    },[currentStoryIndex])
    
    const handleNavigate=()=>{
      navigate(-1);
    }

  return (
    <div>
      <div className='relative flex justify-center items-center h-[100vh] bg-slate-900'>
        <div className='relative'>
            <img className='max-h-[96vh] object-contain' src={stories?.[currentStoryIndex].image} alt="" />
            <div className='absolute top-0 flex w-full'>

              {stories.map((item,index)=><ProgressBar key={index} duration={2000} index={index} activeIndex={activeindex}/>)}

            </div>
        </div>
        <div>
          <BsArrowLeft onClick={handleNavigate} className='text-white text-4xl cursor-pointer absolute top-10 left-10'/>
          <AiOutlineClose onClick={handleNavigate} className='text-white text-4xl cursor-pointer absolute top-10 right-10'/>
        </div>
      </div>
    </div>
  )
}

export default StatusViewer
