import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log('email: ', email);
        console.log('password: ', password);

        if(email == "") {
            alert("이메일을 입력해주세요!");
            return;
        }
        if(password == "") {
            alert("비밀번호를 입력해주세요!");
            return;
        }
        if(email != "" && password != "") {
            fetch("/login", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }).then(res => res.json())
                    .then(response => {
                        if(response.Authorization == null) {
                            alert("아이디 혹은 비밀번호를 확인해주세요.")
                        }
                    })

            })
        }
        
        // let body = {
        //     email: email,
        //     password: password,
        // }
    }

    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type='email' value={email} onChange={onEmailHandler} placeholder="이메일을 입력해주세요."/>
                <label>Password</label>
                <input type='password' value={password} onChange={onPasswordHandler} placeholder="비밀번호를 입력해주세요."/>
                <br />
                <button formAction=''>
                    Login
                </button>
            </form>
            <span>
                <Link to="/SignUp">회원가입</Link>
            </span>
            
        </div>
    )
}

export default Login;