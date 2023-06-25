import { apiClient } from "./ApiCilent";

export const executeSignUpMemberService = (memberInfo) => apiClient.post('/api/member/join', memberInfo)

