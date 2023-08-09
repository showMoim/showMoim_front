import { createContext, useContext, useState } from "react";
import { useRecoilState } from "recoil";
import {errorState} from "../recoil/error/atoms";

export const DefaultApiContext = createContext();

export const useDefaultApi = () => useContext(DefaultApiContext);

export default function DefaultApiProvider({children}){
    const [state, setState] = useRecoilState(errorState)
    async function executeDefaultApiService(func){
        try{
            const response = await func();
            if(response.status === 200){
                setState("200");
                console.log(
                    "executeDefaultApiService : 요청 성공"  
                )
            }
        }catch(e){
            setState(e.status);
        }
    }

    return (<DefaultApiContext.Provider value = {{executeDefaultApiService}}>
        {children} 
    </DefaultApiContext.Provider> );
}