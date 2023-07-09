import { createContext, useContext, useState } from "react";
import { executeSignUpMemberService , executeEmailVerifyRequestService, executeEmailVerifyService} from "../Api/MemberApiService";
import { SignUpInfo }from "../Model/SignUpInfo";
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

    async function emailVerifyRequest(email : String){
        const emailInfo : { email:String } = {
            email
        }

        const response = await executeEmailVerifyRequestService(emailInfo)

        if(response.status === 200){
            console.log("이메일 인증 요청 성공")
            return true
        }
        
        console.log("이메일 인증 요청 실패")

        return false
    }

    async function emailVerifyRequest(email){
        
        const response = await executeEmailVerifyRequestService({email})

        if(response.status===200){
            console.log("이메일 인증 요청 성공")
            return true
        }
        console.log("이메일 인증 요청 실패")
        
        return false
    }

    async function emailVerify(email, code){

        const response = await executeEmailVerifyService({email, code})

        if(response.status === 200){
            console.log("이메일 인증 성공")
            return true
        }

        return false
    }
    

        

    return <AuthContext.Provider value = {{signUp, emailVerifyRequest, emailVerify, username}}>
        {children}
    </AuthContext.Provider>
}