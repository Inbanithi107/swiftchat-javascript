import { Alert, Button, Snackbar } from '@mui/material';
import { blue, green } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentuser, login } from '../../Redux/Auth/Action';
import { store } from '../../Redux/Store';

const Signin = () => {

    const [inputdata,Setinputdata]=useState({username:"",password:""});

    const [opensnackbar, Setopensnackbar]=useState(false);

    const dispatch=useDispatch();

    const {auth}=useSelector(store=>store);

    const token =localStorage.getItem("token");

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("handle submit");
        Setopensnackbar(true);
        dispatch(login(inputdata));
    }

    const handlechange=(e)=>{

      const {name,value}=e.target;
        Setinputdata((values)=>({...values,[name]:value}))

    }

    const handleSnackbarClose=()=>{
      Setopensnackbar(false);
    }

    useEffect(()=>{
      if(token)dispatch(currentuser(token))
  },[token]);

  

  useEffect(()=>{

      if(auth.requser?.username){
          navigate("/");
      }},[auth.requser]);


  return (
    <div>
      <div className='flex justify-center h-screen items-center'> 

      <div className='w-[30%] p-10 shadow-md bg-white'>

        <form className='space-y-5' onSubmit={handlesubmit}>

            <div>
                <p className='mb-2'>Username</p>
                <input
                name='username'
                 placeholder='Enter your username' onChange={handlechange} value={inputdata.username}
                type="text" className='py-2 outline outline-green-600 w-full rounded-md border' />
            </div>

            <div>
                <p className='mb-2'>Password</p>
                <input
                  name='password'
                 placeholder='Enter your password' onChange={handlechange} value={inputdata.password}
                type="text" className='py-2 outline outline-green-600 w-full rounded-md border' />
            </div>

            <div className=''>
              <Button type='submit' sx={{bgcolor:green[700], padding:".5rem"}} className='w-full bg-g' variant='contained'>Signin</Button>
            </div>

        </form>

        <div className='flex space-x-3 items-center mt-5'>
            <p className='m-0'>Create New Account</p>
            <Button variant='text' onClick={()=>navigate("/signup")}>Signup</Button>
        </div>

      </div>

      </div>
      <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity='success' sx={{width: '100%',bgcolor: blue[600],color: "white"}}>
          This is a success message
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Signin
