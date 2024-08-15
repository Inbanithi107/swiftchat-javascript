import React from 'react'
import { useNavigate } from 'react-router-dom'

const StatusUserCard = () => {

  const navigate=useNavigate();

  const handlenavigate=()=>{
    navigate("/status/{userid}")
  }

  return (
    <div className='flex items-center my-3 cursor-pointer' onClick={handlenavigate}>
      <div>
        <img className='h-7 w-7 lg:h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/10/26/04/53/car-8341712_960_720.jpg" alt="" />
      </div>
      <div className='ml-2 text-white'>
        Inbanithi
      </div>
    </div>
  )
}

export default StatusUserCard
