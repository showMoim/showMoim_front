import { createContext, useContext, useState } from "react";
import { useRecoilState } from "recoil";
import {errorState} from "../recoil/error/atoms";

export const DefaultApiContext = createContext();

export const useDefaultApi = () => useContext(DefaultApiContext);

export default function DefaultApiProvider({children}){
    const [state, setState] = useRecoilState(errorState)
    
    async function executeDefaultApiService(func){
        try{
            var response = await func();
            console.log(response);
            if(response.status === 200){
                setState("200");
            }
        }catch(e){
            setState(e.status);
        }finally{
            const configData = response.config;
                console.log(
                    "Request Start >>>>>  \n"
                    + "url : "  + configData.baseURL + configData.url +"\n"
                    + "method : " + configData.method + "\n"
                    + "headers : " + configData.headers + "\n"
                    + "data : " + configData.data + "\n" 
                    + "          \n" 
                    + "Response Start >>>>>> \n"
                    + "status : " + response.data.status +"\n"
                    + "message : " + response.data.message + "\n"
                    + "data : " + response.data.data
                )
        }
    }

    return (<DefaultApiContext.Provider value = {{executeDefaultApiService}}>
        {children} 
    </DefaultApiContext.Provider> );
}