export class SignUpInfo{

    private email:string;
    private code:string;
    private nickname:string;
    private password:string; 
    private passwordConfirm:string;

    constructor(email : string, code:string, nickname:string,  password:string, passwordConfirm:string){
        this.email = email;
        this.code = code;
        this.nickname = nickname;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }

}
