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