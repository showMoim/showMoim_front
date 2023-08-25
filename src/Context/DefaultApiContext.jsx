import { createContext, useContext} from "react";
import { useRecoilState } from "recoil";
import {errorState} from "../recoil/error/atoms";

export const DefaultApiContext = createContext();

export const useDefaultApi = () => useContext(DefaultApiContext);

export default function DefaultApiProvider({children}){
    const [state, setState] = useRecoilState(errorState)
    
    async function executeDefaultApiService(func){

        try{
            let response = await func();
            const state = await response.state;
            //timeout을 줘서 해결하는 방법..????
            setState(state);
            return response
        }catch(e){
            console.log(e)
            const d = e
            return e
        }
    }

    function saveErrorStatus(status){
        setState(status)
    }

    return (<DefaultApiContext.Provider value = {{executeDefaultApiService, saveErrorStatus}}>
        {children} 
    </DefaultApiContext.Provider> );
}