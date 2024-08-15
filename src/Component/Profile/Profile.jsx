import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsArrowLeft, BsCheck2, BsCheck2Circle, BsCheck2Square, BsPencil } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { store } from '../../Redux/Store'
import { currentuser, updateuser } from '../../Redux/Auth/Action'

const Profile = ({handleCloseOpenProfile}) => {
    
    const [flag, Setflag]=useState(false);

    const [username, Setusername]=useState(null);

    const dispatch=useDispatch();

    const {auth}=useSelector(store=>store);

    const token=localStorage.getItem("token");

    useEffect(()=>{
       if(token)dispatch(currentuser(token))
    },[token])
    
    const navigate=useNavigate();

    

    const handleFlag=()=>{
      Setflag(true);
    }

    const handlecheckclick=()=>{
      Setflag(false);
      
    }

    const handleinputchange=(e)=>{
      Setusername(e.target.value);
      console.log(username);
    }

    const [temppicture, Settemppicture]=useState(null);

    const uploadToCloudinary=(pics)=>{
      
           const data=new FormData();
           data.append("file", pics);
           data.append("upload_preset", "whatsapp");
           data.append("cloud_name", "dyvqq3bue");
           fetch("https://api.cloudinary.com/v1_1/dyvqq3bue/image/uplaod",{
            method: "POST",
            body: data,
           })
           .then((res)=> res.json())
           .then((data)=>{
            Settemppicture();
           // Setmessage("profile updated succesfully")
           // Setopen(true);
            console.log("imageurl, ",data.url.toString());
            const dataa={
              id: auth.requser.id,
              token: localStorage.getItem("token"),
              data: {profilepicture: data.url.toString()},
            };
            dispatch(updateuser(dataa));
           })
      
    }

    

  return (
    <div className='w-full h-full'>
      <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>
        <BsArrowLeft className='cursor-pointer text-2xl font-bold' onClick={handleCloseOpenProfile}/>
        <p className='cursor-pointer font-semibold'>Profile</p>
      </div>
      {/* update profile pic section */ }
      <div className='flex flex-col justify-center items-center my-12'>
        <label htmlFor="imginput">
            <img className='rounded-full w-[15vw] h-[15vw] cursor-pointer' src={temppicture || "https://cdn.pixabay.com/photo/2024/02/26/14/06/flower-8598044_960_720.jpg"} alt="" />
        </label>
        <input onChange={(e)=>uploadToCloudinary(e.target.files[0])}  type="file" id='imginput' className='hidden'/>
      </div>
       {/* name section */}
       <div className='bg-white px-3'>
          <p className='py-3'>Your Name</p>
          {!flag && <div className='flex w-full justify-between items-center'>
            <p className='py-3'>{"username" || username}</p>
            <BsPencil onClick={handleFlag} className='cursor-pointer'/>
          </div>}
          {flag && <div className='flex items-center justify-between w-full py-2'>
            <input onChange={handleinputchange} className='w-[80%] outline-none border-b-2 border-blue-700 p-2' type="text" placeholder='Enter Your Username' />
            <BsCheck2 onClick={handlecheckclick} className='cursor-pointer text-2xl'/>
            </div>}
       </div>
      <div className='px-3 my-5'>
        <p className='py-10'>Please enter the username properly as this will appaer for other users</p>
      </div>
    </div>
  )
}

export default Profile
