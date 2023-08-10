import { SignUpInfo } from "../Model/SignUpInfo";
import { apiClient , basicApiClient} from "./ApiCilent";

export const signUpMemberService = (signUpInfo : SignUpInfo) => basicApiClient.post('/api/member/join', signUpInfo)


export const emailVerifyRequestService = (email : {email : string}) => basicApiClient.post('/api/member/join/email/verify/send', email)

export const EmailVerifyService = (emailVerifyInfo : {email : string, code : string}) => basicApiClient.post('/api/member/join/email/verify', emailVerifyInfo)

export const executeLoginVerifyService = (loginVerifyInfo : {email : string, password : string}) => apiClient.post('/api/member/login', loginVerifyInfo);

