import { createContext, useContext, useState } from "react";
import { executeSignUpMemberService } from "../Api/MemberApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){
    
    const [username, setUsername] = useState(null)

    async function signUp(email, code, nickname, password, passwordConfirm){
 
        const memberInfo = {
            email,
            code,
            nickname,
            password,
            passwordConfirm
        }

        const response = await executeSignUpMemberService(memberInfo)

        if(response.status == 200){
            console.log("회원가입 성공!")
            setUsername(nickname)
            return true
        }

        console.log("회원가입 실패")

        return false
    }

    return <AuthContext.Provider value = {{signUp, username}}>
        {children}
    </AuthContext.Provider>
}