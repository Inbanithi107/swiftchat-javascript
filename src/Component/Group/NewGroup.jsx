import { Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { BsArrowLeft, BsCheck, BsCheck2 } from 'react-icons/bs'

const NewGroup = () => {
    const [isimageuplaoding,Setisimageuplaoding]=useState(false);
    const [groupname,Setgroupname]=useState("");
  return (
    <div className='w-full h-full'>

        <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>
        <BsArrowLeft className='cursor-pointer text-2xl font-bold'/>
        <p className='text-xl font-semibold'>New Group</p>
        </div>

        <div className='flex flex-col justify-center items-center my-3'>
            <label htmlFor='imginput' className='relative'>
                <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579__340.png" className ='size-64' alt="" />
                {isimageuplaoding  && (<CircularProgress className='absolute top-[5rem] left-[6rem]'/>)}
            </label>

            <input type='file' id='imginput' className='hidden' value={""} onChange={()=> console.log("imageonchange")}></input>

        </div>

        <div className='w-full flex justify-between items-center py-2 px-5'>
            <input className='w-full outline-none border-b-2 border-green-700 px-2 bg-transparent' placeholder='Group subject' value={groupname} type="text" onChange={(e)=>Setgroupname(e.target.value)} />

        </div>

        {groupname && <div className='py-10 bg-slate-200 flex items-center justify-center'>
              <Button><div className='bg-[#0c977d] rounded-full p-4'>
                <BsCheck2 className='text-white font-bold text-3xl' />
                </div></Button>
        </div>}
      
    </div>
  )
}

export default NewGroup
