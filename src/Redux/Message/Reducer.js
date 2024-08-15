import { CREATE_NEW_MESSAGE, GET_ALL_CHAT } from "./ActionType"

const initialstate={
    message:[],
    newmessage:null,
}
export const messageReducer=(store=initialstate,{type,payload})=>{
    if(type===CREATE_NEW_MESSAGE){
        return{...store,newmessage:payload}
    }
    else if(type===GET_ALL_CHAT){
        return{...store,message:payload}
    }
    return store
}