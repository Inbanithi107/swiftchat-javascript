import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import SelectedMembers from './SelectedMembers';
import Chatcard from '../ChatCard/Chatcard';
import NewGroup from './NewGroup';

const CreateGroup = () => {

    const [newgroup,Setnewgroup]=useState(false);

    const [groupmember, Setgroupmember]=useState(new Set());

    const [query,Setquery]=useState("");

    const handleRemoveMember=(item)=>{
        groupmember.delete(item);
        Setgroupmember(groupmember);
    }

    const handleSearch=()=>{

    }

    

  return (
    <div className='w-full h-full'>
      {
        !newgroup && (
        <div>
           <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>
        <BsArrowLeft className='cursor-pointer text-2xl font-bold' />
        <p className='text-xl font-semibold'>Add Group Participants</p>
        </div>
        <div className='relative bg-white py-4 px-3'>
            <div className='flex space-x-2 flex-wrap space-y-1'>
                {groupmember.size>0 && Array.from(groupmember).map((item)=>(<SelectedMembers handleRemoveMember={()=>handleRemoveMember(item)} member={item}/>))}

            </div>
          <input type="text" onChange={(e)=>{
            handleSearch(e.target.value);
            Setquery(e.target.value);
          }} className='outline-none border-b border-[#8888] p-2 w-[93%]' placeholder='Search User' value={query}/>
        </div>

        <div className='bg-white overflow-y-scroll h-[50.2vh]'>
          {query && [1,1,1,1,1,1,1].map((item)=><div onClick={()=>{
            groupmember.add(item)
            Setgroupmember(groupmember)
            Setquery("");
          }} key={item?.id}>
            <hr />
            <Chatcard />
          </div>)}
        </div>

        <div className='bottom-10 py-10 flex bg-slate-200 items-center justify-center'>

          <div className='bg-green-600 rounded-full p-4 cursor-pointer' onClick={()=>{
            Setnewgroup(true);
          }}>
            <BsArrowRight className='text-white font-bold text-3xl'/>
          </div>

        </div>
        
        </div>
        
      )}
      {newgroup && <NewGroup />}
    </div>
  )
}

export default CreateGroup
