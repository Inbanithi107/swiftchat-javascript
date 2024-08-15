import React, { useEffect, useState } from 'react'
import { TbCircleDashed } from "react-icons/tb"
import { BiCommentDetail } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from "react-icons/bs"
import Chatcard from './ChatCard/Chatcard'
import MessageCard from './MessageCard/MessageCard'
import { ImAttachment } from "react-icons/im"
import "./HomePage.css"
import { useNavigate } from 'react-router-dom'
import Profile from './Profile/Profile'
import { Button, Menu, MenuItem } from '@mui/material'
import CreateGroup from './Group/CreateGroup'
import { useDispatch, useSelector } from 'react-redux'
import { currentuser, handlelogoutaction, searchuser } from '../Redux/Auth/Action'
import { store } from '../Redux/Store'
import { createchat, getuserchat } from '../Redux/Chat/Action'

const HomePage = () => {

 const [querys,setQuerys]=useState(null);
 const [currentChat,setCurrentChat]=useState(null);
 const [content, setContent]=useState("");
 const [isprofile, setIsprofile]=useState(false);

 const dispath=useDispatch();

 const {auth,chat,messages}=useSelector(store=>store);

 const [resdata,Setresdata]=useState(null);

 const token=localStorage.getItem("token");

 const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


 const navigate=useNavigate();

 const handleClickonChatCard=()=>{
    setCurrentChat(true)
   //console.log(userid," ------- ",item)
      
    
 }

 const handleSearch=(keyword)=>{
  dispath(searchuser({keyword,token}))
 }

 const handleCreateNewMessage=()=>{

 }

 const handleNavigate=()=>{
  //navigate("/profile");
  setIsprofile(true);
 }

 const handleCloseOpenProfile=()=>{
  setIsprofile(false);
 }

 const handleCreateGruop=()=>{

  Setisgroup(true)

 }

 const handleLogout=()=>{
   dispath(handlelogoutaction())
   navigate("/signin");
 }

 

 

 
 

 const [isgroup, Setisgroup]=useState(false);

 

 

  return (
      <div className='relative'>
      <div className='w-full py-14 bg-[#00a884]'></div>
      <div className='flex bg-[#f0f2f5] h-[90vh] absolute left-[2vh] top-[5vh] w-[96vw]'>
        <div className='left w-[30%] bg-[#e8e9ec] h-full'>
          {/* profile */}
          {isgroup && <CreateGroup />}
          {isprofile && <div className='w-full h-full'><Profile handleCloseOpenProfile={handleCloseOpenProfile} /></div> }
          {!isprofile && !isgroup && <div className='w-full'>
               

               {/* home */}
            {<div className='flex justify-between items-center p-3'>
              <div onClick={handleNavigate} className='flex items-center space-x-3'>
              <img className='rounded-full w-10 h-10 cursor-pointer' src="https://cdn.pixabay.com/photo/2023/12/19/16/08/butterfly-8457979_960_720.jpg" alt="" />
              <p>{auth.requser?.username}</p>
              </div>
              <div className='space-x-3 text-2xl flex'>
                  <TbCircleDashed className='cursor-pointer' onClick={()=>navigate("/status")}/>
                  <BiCommentDetail />
                  <div>
                  
                  
        
      
        <BsThreeDotsVertical id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} className='cursor-pointer' />
      
                  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleCreateGruop}>Create Group</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
                  </div>
                  
              </div>
           </div>}

           <div className='relative flex justify-center items-center bg-white py-4 px-3'>
            <input className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2' type="text" placeholder='Search or Start New Chat'
            onChange={(e)=>{
              setQuerys(e.target.value)
              handleSearch(e.target.value)
            }}
            value={querys} />
            <AiOutlineSearch className='left-5 top-7 absolute'/>
            <div>
              <BsFilter className='ml-4 text-3xl
              '/>
            </div>
           </div>
           {/* all user*/}
           <div className='bg-white overflow-scroll h-[72vh] px-3'>
            

{[1,1].map((items)=>(<div onClick={handleClickonChatCard}>
               <hr /><Chatcard />
              {" "}
              </div>
            ))}
            </div>

           

            
         </div>}
        </div>


      {/* default chat page */}
           {!currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full'>
              <div className='max-w[70%] text-center'>
                <img src="https://res.cloudinary.com/zarmariya/image/upload/v1662264838/whatsapp_multi_device_support_update_image_1636207150180-removebg-preview_jgyy3t.png" alt="" />
                <h1 className='text-4xl text-gray-600'>SwiftChat</h1>
                <p className='my-9'>send and recive messages with friends,family and group</p>
              </div>
           </div>}
      {/* {message part}*/}
           {currentChat && <div className='w-[70%] relative bg-blue-200'>
             <div className='header absolute top-0 w-full bg-[#f0f2f5]'>
              <div className='flex justify-between'>
                <div className='py-3 space-x-4 flex items-center px-3'>
                  <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/02/21/14/42/flowers-8587835_960_720.jpg" alt="" />
                  <p>
                    UserName
                  </p>
                </div>
                <div className='py-3 flex space-x-4 items-center px-3'>
                   <AiOutlineSearch />
                   <BsThreeDotsVertical />
                   
                </div>
              </div>
             </div>
             {/* message section */}
             <div className='px-10 h-[85vh] overflow-y-scroll'>
              
                <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                  {[1,1,1,1,1,1].map((item,i )=><MessageCard isReqUserMessage={i%2===0} content={"message"} />)}
                </div>

             </div>
             {/* footer part */}
             <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>

          <div className='flex justify-between items-center px-5 relative'>

              

              
                <BsEmojiSmile className='cursor-pointer' />
                <ImAttachment />
              

              <input className='py-2 outline-none border-none bg-white rounded-md w-[85%]' type="text" onChange={(e)=>setContent(e.target.value)} 
              placeholder='Type message here' value={content} onKeyPress={(e)=>{
                if(e.key==="Enter"){
                  handleCreateNewMessage();
                  setContent("");
                }
              }}
              />
                <BsMicFill />
             </div>
             </div>
            </div>}
          
      </div>

      </div>
    
  )
}

export default HomePage
