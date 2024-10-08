import { LOGIN, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER } from "./ActionType"

const initailvalue={

    signup:null,
    signin:null,
    requser:null,
    

}

export const authReducer=(store=initailvalue, {type,payload})=>{

    if(type===REGISTER){
        return {...store,signup:payload}
    }
    else if(type===LOGIN){

        return {...store,signin:payload}

    }
    else if(type===REQ_USER){
        return {...store,requser:payload}
    }
    else if(type===SEARCH_USER){
        return {...store,searchuser:payload}
    }
    else if(type===UPDATE_USER){
        return {...store,updateduser:payload}
    }

    return store;

}