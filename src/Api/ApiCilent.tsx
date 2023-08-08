import axios from "axios"
import { getCookie } from '../Login/Util/Cookie'

export const apiClient = axios.create(
    {
        baseURL : "http://localhost:8080",
        withCredentials : true,
        headers: {
            accessToken: getCookie('accessToken'),
        },
    }
)

//access Token 필요 없는 요청
export const basicApiClient = axios.create(
    {
        baseURL : "http://localhost:8080"
    }
)