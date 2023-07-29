import { SignUpInfo } from "../Model/SignUpInfo";
import { apiClient } from "./ApiCilent";

export const executeSignUpMemberService = (signUpInfo : SignUpInfo) => apiClient.post('/api/member/join', signUpInfo).then().catch(err => {
    return err
})

export const executeEmailVerifyRequestService = (email : {email : String}) => apiClient.post('/api/member/join/email/verify/send', email)

export const executeEmailVerifyService = (emailVerifyInfo : {email : String, code : String}) => apiClient.post('/api/member/join/email/verify', emailVerifyInfo)

export const executeLoginVerifyService = (loginVerifyInfo : {email : String, password : String}) => apiClient.post('/api/member/login', loginVerifyInfo).then().catch(err => {
    return err
})

