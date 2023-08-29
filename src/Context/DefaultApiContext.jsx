import { createContext, useContext} from "react";
import { useRecoilState } from "recoil";
import {errorState} from "../recoil/error/atoms";
import { Status } from "../enum/status";
export const DefaultApiContext = createContext();

export const useDefaultApi = () => useContext(DefaultApiContext);

export default function DefaultApiProvider({children}){
    const [state, setState] = useRecoilState(errorState)
    
    async function executeDefaultApiService(func){
        let response = await func();
        //서버 error -> response undefined로 넘어옴
        return await setResponseState(response)
    }

    async function setResponseState(response){
        if(response === undefined || response.status === undefined){
            console.log("defaultApiContext")
            console.log(response)
            setState(Status.SERVER_ERROR)
            return {
                state : Status.SERVER_ERROR
            }
        }else{
            setState(response.status)
            return response
        }
    }


    return (<DefaultApiContext.Provider value = {{executeDefaultApiService}}>
        {children} 
    </DefaultApiContext.Provider> );
}