import { SignUpInfo } from "../Model/SignUpInfo";
import { apiClient } from "./ApiCilent";

export const executeSignUpMemberService = (signUpInfo : SignUpInfo) => apiClient.post('/api/member/join', signUpInfo).then().catch(err => {
    return err
})

export const executeEmailVerifyRequestService = (email : {email : string}) => apiClient.post('/api/member/join/email/verify/send', email)

export const executeEmailVerifyService = (emailVerifyInfo : {email : string, code : string}) => apiClient.post('/api/member/join/email/verify', emailVerifyInfo)

export const executeLoginVerifyService = (loginVerifyInfo : {email : string, password : string}) => apiClient.post('/api/member/login', loginVerifyInfo);

