import { apiClient } from "./ApiCilent";

export const executeSignUpMemberService = (signUpInfo) => apiClient.post('/api/member/join', signUpInfo)

