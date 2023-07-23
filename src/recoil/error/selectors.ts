import {selector} from 'recoil';
import { Status } from '../../enum/status';
import { errorState } from './atoms';
export const errorCommentState = selector({
    key : 'errorCommentState',
    get : ({get}) => {
        const error = get(errorState);
        switch(error){
            case Status.EMAIL_VERIFY_FAIL :
                return "이메일 인증 코드가 일치하지 않습니다.";
            case Status.FORBIDDEN_ERROR :
                return "권한이 없습니다.";
            case Status.NOT_FOUND_ERROR : 
                return "접근 경로가 잘못되었습니다."
            default : 
                return "알수 없는 에러가 발생하였습니다.";
        }
    }
 
}
);