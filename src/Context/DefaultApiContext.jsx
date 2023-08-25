import { createContext, useContext} from "react";
import { useRecoilState } from "recoil";
import {errorState} from "../recoil/error/atoms";

export const DefaultApiContext = createContext();

export const useDefaultApi = () => useContext(DefaultApiContext);

export default function DefaultApiProvider({children}){
    const [state, setState] = useRecoilState(errorState)
    
    async function executeDefaultApiService(func){
        try{
            var response = await func();
            setState(response.state);
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
            return response
        }catch(e){
            //setState(e.response.status);
            const e1 = e;
            const configData = e.config;
            console.log(
                "[ Error ] Request Start >>>>>  \n"
                + "url : "  + configData.baseURL + configData.url +"\n"
                + "method : " + configData.method + "\n"
                + "headers : " + configData.headers + "\n"
                + "data : " + configData.data + "\n" 
                + "          \n" 
                + "[ Error ] Response Start >>>>>> \n"
                + "error code : " + e.response.status +"\n"
                + "message : " + e.message + "\n"
                + "error name : " + e.name
            );
            return e
        }
    }

    return (<DefaultApiContext.Provider value = {{executeDefaultApiService}}>
        {children} 
    </DefaultApiContext.Provider> );
}