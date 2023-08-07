import { createContext, useContext, useState } from "react";
import { executeSignUpMemberService , executeEmailVerifyRequestService, executeEmailVerifyService, executeLoginVerifyService} from "../Api/MemberApiService";
import { SignUpInfo }from "../Model/SignUpInfo";
import DefaultErrorModal from "../Common/DefaultErrorModal";
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

    async function emailVerifyRequest(email : string){
        const emailInfo : { email:string } = {
            email
        }

        const response = await executeEmailVerifyRequestService(emailInfo)

        if(response.status === 200){
            console.log("이메일 인증 요청 성공")
            return true
        }
        
        console.log("이메일 인증 요청 실패")

        return false;
    }

    async function emailVerify(email, code){

        const response = await executeEmailVerifyService({email, code})

        if(response.status === 200){
            console.log("이메일 인증 성공")
            return true
        }

        return false
    }

    async function loginVerify(email, password){
        
        const response = await executeLoginVerifyService({email, password})
        // console.log("response: " + JSON.stringify(response));
        console.log("response: ", response);

        if(response.status === 200){
            console.log("로그인 성공");

            let token = response.headers.get("Authorization");
            console.log("response.headers: " + response.headers);
            if(token == null) {
                console.log("token: " + token);
                //openModal();
            } else {
                localStorage.setItem("Authorization", token);
                
                //return res.json();
            }

            return true
        } else {
            console.log("로그인 실패");
        }
        return false
    }

    return <AuthContext.Provider value = {{signUp, emailVerifyRequest, emailVerify, loginVerify, username}}>
        {children}
    </AuthContext.Provider>
}