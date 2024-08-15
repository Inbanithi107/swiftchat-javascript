import React, { useEffect, useState } from 'react'
import "./ProgressBar.css"

const ProgressBar = ({index, activeIndex, duration}) => {
   
    const isActive=index===activeIndex;
    const [progress,Setprogress]=useState();

    useEffect(()=>{
       const intervalid=setInterval(()=>{
         Setprogress((Prev)=>{
            if(Prev<100){
                return Prev+1;
            }
            clearInterval(intervalid);
            return Prev;
         })
       },duration/100)
    },[duration, activeIndex])

    useEffect(()=>{
      Setprogress(0);
    },[activeIndex])


  return (
    <div className={`progress-bar-container ${isActive?"active":""}`}>
      <div className={`${isActive?"progress-bar":""}`} style={{width: `${progress}%`}}>

      </div>
    </div>                                                                         
  )
}

export default ProgressBar
