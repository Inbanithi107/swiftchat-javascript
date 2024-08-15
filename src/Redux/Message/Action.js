import { BASE_API_URL } from "../../Config/api";
import { CREATE_NEW_MESSAGE, GET_ALL_CHAT } from "./ActionType";

export const createmessage=(meassagedata)=>async(dispatch)=>{
    
    try {
        const response = await fetch(`${BASE_API_URL}/api/message/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${meassagedata.token}`,
                jtwgetter:`${meassagedata.token}`
            },
            body:JSON.stringify(meassagedata.data)
        })

        const data=await response.json();
        console.log("create chat ",data);
        dispatch({type:CREATE_NEW_MESSAGE,payload:data})
    } catch (error) {
        console.log("error ",error);
    }

}

export const getallmessage=(reqdata)=>async(dispatch)=>{
    
    try {
        const response = await fetch(`${BASE_API_URL}/api/message/chat/${reqdata.chatid}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${reqdata.token}`,
                jtwgetter:`${reqdata.token}`
            },
            
        })

        const data=await response.json();
        console.log("create chat ",data);
        dispatch({type:GET_ALL_CHAT,payload:data})
    } catch (error) {
        console.log("error ",error);
    }

}