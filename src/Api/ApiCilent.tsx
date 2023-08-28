import axios from "axios"
import {getCookie} from '../Login/Util/Cookie';
import { responseLoggingService, errorLoggingService } from "./ApiLoggingService";

export const ACCESS_TOKEN_COOKIE = "SHOWMOIM_ACCESS_TOKEN";

export const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080",
        withCredentials: true,
    }
)

apiClient.interceptors.request.use(config => {
    const token = getCookie(ACCESS_TOKEN_COOKIE);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})

apiClient.interceptors.response.use(
    response => {
        responseLoggingService(response)
        return response
    },
    error => {
        errorLoggingService(error)
        return error
    }
)

//access Token 필요 없는 요청
export const basicApiClient = axios.create(
    {
        baseURL : "http://localhost:8080"
    }
)


basicApiClient.interceptors.response.use(
    response => {
        responseLoggingService(response)
        return response
    },
    error => {
        try{errorLoggingService(error)}catch(e){throw e}
        return error
    }
)