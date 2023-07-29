import {FETCH_PROFILE_REQ,FETCH_PROFILE_SUCC,FETCH_PROFILE_FAIL} from "./ActionType";

export const fetchprofileReq=()=>{
    return {type:FETCH_PROFILE_REQ};
}


export const fetchprofileSucc=(data)=>{
    return {type:FETCH_PROFILE_SUCC,payload:data};
}

export const fetchProfileFail=(errmsg)=>{
    return {type:FETCH_PROFILE_FAIL,payload:errmsg};
}