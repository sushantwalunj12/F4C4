import {FETCH_POST_REQ,FETCH_POST_SUCC,FETCH_POST_FAIL} from "./ActionType"

export const fetchPostReq=()=>{
    return {type:FETCH_POST_REQ}
}

export const fetchPostSucc=(data)=>{
    return {type:FETCH_POST_SUCC,payload:data,}
}

export const fetchPostFail=(errmsg)=>{
    return {type:FETCH_POST_FAIL,payload:errmsg};
}