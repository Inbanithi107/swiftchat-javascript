
import { BASE_API_URL } from "../../Config/api"
import { LOGIN, LOGOUT, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER } from "./ActionType";

export const register=(data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${BASE_API_URL}/auth/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                
            },
            body:JSON.stringify(data)
        })
        const resdata=await res.json();
        if(resdata.jwt)localStorage.setItem("token",resdata.jwt);
        dispatch({type:REGISTER,payload:resdata});
    } catch (error) {
        
    }
}

export const login=(data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${BASE_API_URL}/auth/login`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                
            },
            body:JSON.stringify(data)
        })
        const resdata=await res.json();
        if(resdata.token)localStorage.setItem("token",resdata.token);
        console.log("login ",resdata);
        dispatch({type:LOGIN,payload:resdata});
    } catch (error) {
        console.log("catch error ",error);
    }
}

export const currentuser=(token)=>async(dispatch)=>{
    try {
        const res=await fetch(`${BASE_API_URL}/api/user/profile`,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                 Authorization: `Bearer ${token}` ,
                 profilegetter: `${token}`
                
            },
            
        })
        const resdata=await res.json();
        console.log("currentuser ",resdata);
        dispatch({type:REQ_USER,payload:resdata});
        return resdata;
    } catch (error) {
        console.log("catch error ",error);
    }
}

export const searchuser=(data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${BASE_API_URL}/api/user/${data.keyword}`,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}` 
                
            },
            
        })
        const resdata=await res.json();
        console.log("saerchuser ",resdata);
        dispatch({type:SEARCH_USER,payload:resdata});
    } catch (error) {
        console.log("catch error ",error);
    }
}

export const updateuser=(data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${BASE_API_URL}/users/update/${data.id}`,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}` 
                
            },
            
        })
        const resdata=await res.json();
        console.log("login ",resdata);
        dispatch({type:UPDATE_USER,payload:resdata});
    } catch (error) {
        console.log("catch error ",error);
    }
}

export const handlelogoutaction=()=>async(dispatch)=>{
    localStorage.removeItem("token");
    dispatch({type:LOGOUT,payload:null});
    dispatch({type:REQ_USER,payload:null});
}