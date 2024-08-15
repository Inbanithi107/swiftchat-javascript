import { Alert, Button, Snackbar } from '@mui/material';
import { blue, green } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentuser, register } from '../../Redux/Auth/Action';
import { store } from '../../Redux/Store';



const Signup = () => {

    const [inputData,SetinputData]=useState({username:"",password:"",email:"",mobile:"",role:"USER"});

    const [opensnackbar, Setopensnackbar]=useState(false);

    const dispatch=useDispatch();

    const navigate=useNavigate();

    const {auth}=useSelector(store=>store);

    const token=localStorage.getItem("token");

    console.log("current user ",auth.requser);



    const handleSnackbarClose=()=>{
        Setopensnackbar(false);
      }

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("handle submit ",inputData);
        dispatch(register(inputData));
        Setopensnackbar(true);
    }

    const handleChange=(e)=>{

        const {name,value}=e.target;
        SetinputData((values)=>({...values,[name]:value}))

    }

    useEffect(()=>{
        if(token)dispatch(currentuser(token))
    },[token]);

    

    useEffect(()=>{

        if(auth.requser?.username){
            navigate("/");
        }
    
        },[auth.requser]);

    

   

  return (

    
    <div>

        <div>
            <div className='flex flex-col justify-center min-h-screen items-center'>

                <div className='w-[30%] p-10 shadow-md bg-white'>

                    <form onSubmit={handlesubmit} className='space-y-5'>
                        <div>
                            <p className='mb-2'>

                                UserName

                            </p>
                            <input type="text"
                            className='py-2 px-3 outline outline-green-600 w-full rounded-md border-1'
                            placeholder='Enter username'
                            name='username'
                            onChange={(e)=>handleChange(e)}
                             />
                        </div>

                        <div>
                            <p className='mb-2'>

                                password

                            </p>
                            <input type="text"
                            className='py-2 px-3 outline outline-green-600 w-full rounded-md border-1'
                            placeholder='Enter password'
                            name='password'
                            onChange={(e)=>handleChange(e)}
                             />
                        </div>

                        

                        <div>
                            <p className='mb-2'>

                                Email

                            </p>
                            <input type="text"
                            className='py-2 px-3 outline outline-green-600 w-full rounded-md border-1'
                            placeholder='Enter emailid'
                            name='email'
                            onChange={(e)=>handleChange(e)}
                             />
                        </div>

                        <div>
                            <p className='mb-2'>

                                Mobile.No

                            </p>
                            <input type="text"
                            className='py-2 px-3 outline outline-green-600 w-full rounded-md border-1'
                            placeholder='Enter mobile number'
                            name='mobile'
                            onChange={(e)=>handleChange(e)}
                             />
                        </div>

                        <div className=''>
              <Button type='submit' sx={{bgcolor:green[700], padding:".5rem"}} className='w-full bg-g' variant='contained'>Signup</Button>
            </div>

                        

                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className=''>Already have an account?</p>
                        <p onClick={()=>navigate("/login")} className='text-blue-500 hover:text-blue-800 cursor-pointer'>Login</p>
                        <Button variant='text' onClick={()=>navigate("/signin")}>Signin</Button>
                    </div> 

                </div>

            </div>
            <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity='success' sx={{width: '100%',bgcolor: blue[600],color: "white"}}>
          You Account is successsfully created
        </Alert>
      </Snackbar>
        </div>
      
    </div>
  )
}

export default Signup
