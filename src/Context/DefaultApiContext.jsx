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
        //서버 에러 났을 경우
        if(response === undefined || response.response === undefined && response.status != Status.OK){
            setState(Status.SERVER_ERROR)
            return {
                state : Status.SERVER_ERROR
            }
        }else{
            if(response.status == Status.OK){
                setState(Status.OK)
                return response
            }
            setState(response.response.data.data)
            return response
        }
    }


    return (<DefaultApiContext.Provider value = {{executeDefaultApiService}}>
        {children} 
    </DefaultApiContext.Provider> );
}