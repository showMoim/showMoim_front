import {createContext, useContext, useEffect, useState} from "react";
import { executeSignUpMemberService , executeEmailVerifyRequestService, executeEmailVerifyService, executeLoginVerifyService} from "../Api/MemberApiService";
import { SignUpInfo }from "../Model/SignUpInfo";
import DefaultErrorModal from "../Common/DefaultErrorModal";
import {getCookie, removeCookie, setCookie} from '../Login/Util/Cookie';
import {ACCESS_TOKEN_COOKIE, apiClient} from "../Api/ApiCilent";


export const AuthContext = createContext()
 
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){
    
    const [username, setUsername] = useState(null)

    async function signUp(email, code, nickname, password, passwordConfirm){

        const memberInfo = new SignUpInfo(email, code, nickname, password, passwordConfirm);
 
        const response = await executeSignUpMemberService(memberInfo)

        if(response.status === 200){
            console.log("회원가입 성공!")
            setUsername(nickname)
            return true
        }

        console.log("회원가입 실패")

        return false
    }

    

    async function loginVerify(email, password) {
        try {
            await executeLoginVerifyService({email, password});
            const accessToken = getCookie(ACCESS_TOKEN_COOKIE);

            if (!accessToken) {
                console.log("[loginVerify] 토큰 null");
                return false;
            }

            console.log("[loginVerify] 로그인 성공");
            console.log("[loginVerify] 액세스 토큰: ", accessToken);

            return true;
        } catch (e) {
            console.log("[loginVerify] 로그인 실패");
            return false;
        }
    }

    // 새로고침 할때마다 토큰 검증 (테스트용 코드)
    useEffect(() => {
        apiClient.get("/api/member/auth")
            .then(res => console.log("[토큰 검증] 성공: ", res))
            .catch(e => console.error("[토큰 검증] 실패: ", e));
    }, []);

    // async function loginVerify(email, password){
    //
    //     const response = await executeLoginVerifyService({email, password})
    //     // console.log("response: " + JSON.stringify(response));
    //     console.log("response: ", response);
    //
    //     if(response.status === 200){
    //         console.log("로그인 성공");
    //
    //         let token = response.headers.get("Authorization");
    //         console.log("response.headers: " + response.headers);
    //         if(token == null) {
    //             console.log("token: " + token);
    //
    //         } else {
    //             //localStorage.setItem("Authorization", token);
    //             //axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
    //             //setCookie('accessToken', data.token)
    //             //return res.json();
    //         }
    //
    //         return true
    //     } else {
    //         console.log("로그인 실패");
    //     }
    //     return false
    // }

    return (
        <AuthContext.Provider value = {{signUp, loginVerify, username}}>
            {children}
        </AuthContext.Provider>
    )
}