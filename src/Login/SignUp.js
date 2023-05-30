import React, { useState } from 'react';
import '../css/Login.css';

function SignUp() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [name, setName] = useState("");

    const [chkEmail, setChkEmail] = useState(false);
    const [chkCode, setChkCode] = useState(false);
    const [chkPassword, setChkPassword] = useState(false);
    const [chkInfo, setChkInfo] = useState(false);

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    //인증 유효 시간 넣어야 될거같음
    const onAuthHandler = (e) => {

        setChkCode(true); //일단은 임시로
        // fetch("/auth", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //     }).then(res => res.json())
        //         .then(response => {
        //             if(response.Authorization == null) {
        //                 alert("인증에 실패하였습니다. 다시 시도 해주세요.")
        //             }

        //             //setChkCode(true);
        //         })

        // })
    }

    const onCodeHandler = (e) => {
        setCode(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onConPasswordHandler = (e) => {
        setConPassword(e.currentTarget.value);
    }

    const onInfoHandler = (e) => {
        setName(e.currentTarget.value);
    }

    // 비밀번호가 유효한지 체크하는 로직
    const checkValidPassword = (_password, _conPassword) => {
        // 비밀번호 길이가 1 이상
        if (!_password || !_conPassword) return false;
        // 비밀번호가 동일
        if (_password !== _conPassword) return false;

        return true;
    }

    return (
        <div>
        {chkEmail == false && chkPassword == false && chkInfo == false &&
        <div>
            이메일<br/>
            <input type='text' onChange={onEmailHandler} value={email} placeholder="이메일을 입력해주세요."></input>@bccard.com <button onClick={onAuthHandler}>번호 요청</button><br/>
            인증코드<br/>
            <input type='text' onChange={onCodeHandler} value={code} placeholder="인증코드를 입력해주세요."></input><br/>
            <button onClick={()=>{console.log("이메일 작성 완료"); setChkEmail(true); /* 인증코드 확인 필요 */ }} disabled={email.length < 1 || code.length < 1 || chkCode == false}> 다음 </button>
        </div>
        }
        {chkEmail == true && chkPassword == false && chkInfo == false &&
        <div>
            비밀번호<br/>
            <input type='password' onChange={onPasswordHandler} value={password} placeholder="비밀번호를 입력해주세요."></input><br/>
            비밀번호 확인<br/>
            <input type='password' onChange={onConPasswordHandler} value={conPassword} placeholder="인증코드를 입력해주세요."></input><br/>
            {conPassword && !checkValidPassword(password, conPassword) && (
            <span className={`${!checkValidPassword(password, conPassword) ? 'messsage' : ''}`}>비밀번호가 일치하지 않습니다.</span>
          )}<br/>
            <button
                onClick={()=>{
                    // 비밀번호 체크해서 맞으면 chkPassword 를 true 로
                    if(checkValidPassword(password, conPassword)) {
                        console.log("비밀번호 작성 완료");
                        // 버튼 안눌렀는데 화면 넘어가고 그랬던건
                        // setChkPassword(true) 가 onChange 에 있었어서
                        // 백스페이스나 키보드 입력했을때 화면이 넘어갔던거임~
                        // (밑에서 chkPassword 플래그를 보고 화면을 전환하니까)
                        setChkPassword(true);
                    }
                }}
                disabled={!checkValidPassword(password, conPassword)}> 다음 </button>
        </div>
        }
        {chkEmail == true && chkPassword == true && chkInfo == false &&
        <div>
            이름<br/>
            <input type='text' onChange={onInfoHandler} value={name} placeholder="이름을 입력해주세요."></input><br/>
            <button onClick={()=>{console.log("정보 작성 완료"); setChkInfo(true);}} disabled={name.length < 1}> 다음 </button>
        </div>
        }
        </div>
    );

}

export default SignUp;