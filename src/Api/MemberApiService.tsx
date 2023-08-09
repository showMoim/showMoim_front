import { SignUpInfo } from "../Model/SignUpInfo";
import { apiClient , basicApiClient} from "./ApiCilent";

export const executeSignUpMemberService = (signUpInfo : SignUpInfo) => basicApiClient.post('/api/member/join', signUpInfo).then().catch(err => {
    return err
})

export const emailVerifyRequestService = (email : {email : string}) => basicApiClient.post('/api/member/join/email/verify/send', email)

export const executeEmailVerifyService = (emailVerifyInfo : {email : string, code : string}) => basicApiClient.post('/api/member/join/email/verify', emailVerifyInfo)

export const executeLoginVerifyService = (loginVerifyInfo : {email : string, password : string}) => apiClient.post('/api/member/login', loginVerifyInfo);

