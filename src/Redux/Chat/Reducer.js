import { getuserchat } from "./Action"
import { CREATE_CHAT, CREATE_GROUP, GET_USERS_CHAT } from "./ActionType"

const initialvalue={
    chat:[],
    craetedgroup:null,
    createdchat:null,
}
export const chatReducer=(store=initialvalue,{type,payload})=>{
    if(type===CREATE_CHAT){
        return{...store,createchat:payload}
    }else if(type===CREATE_GROUP){
        return{...store,createdgroup:payload}
    }else if(type===GET_USERS_CHAT){
        return{...store,chat:payload}
    }
    return store;
}