import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
const SelectedMembers = ({handleRemoveMember,member}) => {
  return (
    <div className='flex items-center bg-slate-300 rounded-full'>
        <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2023/03/17/16/42/bridge-7859045_960_720.jpg" alt="" />
        <p className='px-2'>Username</p>
        <AiOutlineClose onClick={handleRemoveMember} className='pr-1 cursor-pointer'/>
    </div>
  )
}

export default SelectedMembers
