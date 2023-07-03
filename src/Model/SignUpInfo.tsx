class SignUpInfo{

    private email:String;
    private code:String;
    private nickname:String;
    private password:String; 
    private passwordConfirm:String;

    constructor(email : String, code:String, nickname:String,  password:String, passwordConfirm:String){
        this.email = email;
        this.code = code;
        this.nickname = nickname;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }

}