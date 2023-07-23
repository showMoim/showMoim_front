import axios from "axios"
import {Status} from "../enum/status"
export const apiClient = axios.create(
    {
        baseURL : "http://localhost:8080",
    }
)

//공통 에러 다이얼로그 여기에 호출

apiClient.interceptors.response.use(
    response =>  {
        return response;
    },
    error => {
        if(error.response.status === Status.SERVER_ERROR){
            console.log("서버 에러");
        }
        return error.response;
    }
)