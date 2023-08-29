import {selector} from 'recoil';
import { Status } from '../../enum/status';
import { errorState } from './atoms';
export const errorCommentState = selector({
    key : 'errorCommentState',
    get : ({get}) => {
        const error = get(errorState);
        switch(error){
            case Status.EMAIL_VERIFY_FAILED :
                return "이메일 인증에 실패했습니다.";
            case Status.FORBIDDEN_ERROR :
                return "권한이 없습니다.";
            case Status.NOT_FOUND_ERROR : 
                return "접근 경로가 잘못되었습니다.";
            case Status.AUTH_FAILED :
                return "로그인에 실패했습니다.";
            case Status.MEMBER_NOT_EXIST :
                return "존재하지 않는 회원입니다.";
            case Status.EMAIL_ALREADY_EXIST :
                return "이미 존재하는 메일입니다.";
            case Status.PASSWORD_INVALID : 
                return "비밀번호 형식에 맞지 않습니다.";
            case Status.PASSWORD_INCORRECT :
                return "비밀번호가 다릅니다.";
            case Status.PASSWORD_EMPTY : 
                return "비밀번호 입력값이 비었습니다.";
            case Status.PASSWORD_TOO_SHORT :
                return "비밀번호 입력값이 비었습니다.";
            case Status.PASSWORD_NOT_CONFIRMED :
                return "비밀번호 확인과 일치하지 않습니다.";
            case Status.NICKNAME_INVALID :
                return "올바르지 않은 닉네임입니다.";
            default : 
                return "알수 없는 에러가 발생하였습니다.";
        }
    }
 
}
);