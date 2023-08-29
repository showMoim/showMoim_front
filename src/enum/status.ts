//typeScript 에서 enum은 Tree-shaking이 되지 않아 성능 저하를 일으킨다고 한다. 
    // Tree-shaking : 실제로 사용하지 않는 코드를 최종 번들에 포함하지 않는 기능(ex. export했지만 아무데서도 import 하지 않는 코드)
//대신 as const문법을 사용하여 구현하였다.

type Statustype = {
    OK : string,
    SERVER_ERROR : string,
    NOT_FOUND_ERROR : string,
    FORBIDDEN_ERROR : string,
    AUTH_FAILED : string, 
    MEMBER_NOT_EXIST : string, 
    EMAIL_ALREADY_EXIST : string, 
    PASSWORD_INVALID : string, 
    PASSWORD_INCORRECT : string,
    EMAIL_VERIFY_FAILED : string,
    PASSWORD_EMPTY : string,
    PASSWORD_TOO_SHORT : string,
    PASSWORD_NOT_CONFIRMED : string,
    NICKNAME_INVALID : string

}

export const Status : Statustype ={
    OK : "200",
    //서버 에러
    SERVER_ERROR : "500",
    //잘못된 경로
    NOT_FOUND_ERROR : "404",
    //권한 없음
    FORBIDDEN_ERROR : "403",
    AUTH_FAILED : "ERR000", 
    MEMBER_NOT_EXIST : "ERR001", 
    EMAIL_ALREADY_EXIST : "ERR002", 
    PASSWORD_INVALID : "ERR003", 
    PASSWORD_INCORRECT : "ERR004",
    EMAIL_VERIFY_FAILED : "ERR005",
    PASSWORD_EMPTY : "ERR006",
    PASSWORD_TOO_SHORT : "ERR007",
    PASSWORD_NOT_CONFIRMED : "ERR008",
    NICKNAME_INVALID : "ERR009"
    
    
} as const;
