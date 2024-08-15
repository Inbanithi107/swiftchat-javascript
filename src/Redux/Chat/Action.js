import { BASE_API_URL } from "../../Config/api"
import { CREATE_CHAT, CREATE_GROUP, GET_USERS_CHAT } from "./ActionType";

export const createchat=(chatdata)=>async(dispatch)=>{
    
    try {
        const response = await fetch(`${BASE_API_URL}/api/chat/single`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${chatdata.token}`,
                jtwgetter:`${chatdata.token}`
            },
            body:JSON.stringify(chatdata.data)
        })

        const data=await response.json();
        console.log("create chat ",data);
        dispatch({type:CREATE_CHAT,payload:data})
    } catch (error) {
        console.log("error ",error);
    }

}

export const creategroupchat=(chatdata)=>async(dispatch)=>{
    
    try {
        const response = await fetch(`${BASE_API_URL}/api/chat/group`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${chatdata.token}`,
                jtwgetter:`${chatdata.token}`
            },
            body:JSON.stringify(chatdata.data)
        })

        const data=await response.json();
        console.log("group chat ",data);
        dispatch({type:CREATE_GROUP,payload:data})
    } catch (error) {
        console.log("error ",error);
    }

}

export const getuserchat=(chatdata)=>async(dispatch)=>{
    
    try {
        const response = await fetch(`${BASE_API_URL}/api/chat/user`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${chatdata.token}`,
                jtwgetter:`${chatdata.token}`
            },
            body:JSON.stringify(chatdata.data)
        })

        const data=await response.json();
        console.log("user chat ",data);
        dispatch({type:GET_USERS_CHAT,payload:data})
    } catch (error) {
        console.log("error ",error);
    }

}