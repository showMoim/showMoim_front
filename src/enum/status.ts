//typeScript 에서 enum은 Tree-shaking이 되지 않아 성능 저하를 일으킨다고 한다. 
    // Tree-shaking : 실제로 사용하지 않는 코드를 최종 번들에 포함하지 않는 기능(ex. export했지만 아무데서도 import 하지 않는 코드)
//대신 as const문법을 사용하여 구현하였다.

type Statustype = {
    OK : string,
    SERVER_ERROR : string,
    NOT_FOUND_ERROR : string,
    FORBIDDEN_ERROR : string,
    EMAIL_VERIFY_FAIL : string
}

export const Status : Statustype ={
    OK : "200",
    //서버 에러
    SERVER_ERROR : "500",
    //잘못된 경로
    NOT_FOUND_ERROR : "404",
    //권한 없음
    FORBIDDEN_ERROR : "403",
    //이메일 인증 틀림
    EMAIL_VERIFY_FAIL : "101"
} as const;
