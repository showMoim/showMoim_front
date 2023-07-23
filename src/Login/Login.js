import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../Context/AuthContext";
import Modal from '../Common/Modal';
import '../css/Login.css';

function Login() {
    const authContext = useAuth();
    
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    async function onSubmitHandler() {
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
            if(await authContext.loginVerify(email, password)) {

            }
            
            // fetch("/login", {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         email: email,
            //         password: password
            //     }).then(res => {
            //             let token = res.headers.get("Authorization");
            //             if(token == null) {
            //                 openModal();
            //             } else {
            //                    localStorage.setItem("Authorization", token);
            //                    setCookie("refreshToken", res.payload.)
            //                    return res.json();
            //              }
            //        })

            // })

            // axios.post('/login', data).then(response => {
            //     const { accessToken } = response.data.acess_token;
            //     const { refreshToken } = response.data.refresh_token;

            //     // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
            //     axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        
            //     setCookie("refreshToken", refreshToken)
            //     localStorage.setItem("accessToken", accessToken)
        
            // }).catch(error => {
            //     // ... 에러 처리
            //     openModal();
            // });

            //로그아웃시
            //removeCookie("accessToken");
            //localStorage.removeItem("refreshToken");

            openModal(); //임시로
        }
        
        // let body = {
        //     email: email,
        //     password: password,
        // }
    }

    return (
        <div className="bg-gray-10 ">
            <div className="flex justify-center h-screen w-screen items-center">
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">쑈모임 로고</h1>
                    <form className="w-3/4" onSubmit={onSubmitHandler}>
                    <div className="mb-6">
                        <input type="email" value={email} onChange={onEmailHandler} className="w-full py-4 px-4 bg-gray-100 placeholder:font-semibold rounded hover:ring-1 outline-sf-btn-bg" placeholder="이메일을 입력해주세요."/>
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} onChange={onPasswordHandler} className="w-full py-4 px-4 bg-gray-100 placeholder:font-semibold rounded hover:ring-1 outline-sf-btn-bg" placeholder="비밀번호를 입력해주세요."/>
                    </div>
                    
                    <div className="w-full mt-3 mb-3">
                        <button type="submit" disabled={email.length < 1 || password.length < 1} formAction='' className="py-4 bg-sf-btn-bg w-full rounded font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400"> 로그인 </button>
                        {/* <button onClick={openModal} className="py-4 bg-sf-btn-bg w-full rounded font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400"> 로그인 </button> */}
                        {modalVisible && <Modal closeModal={closeModal} title="로그인 정보 불일치" content="아이디와 비밀번호가 일치하지 않습니다."></Modal>}
                    </div>
                    </form>
                    <div className="w-3/4 flex flex-row justify-between">
                        <div className=" flex items-center gap-x-1">
                            {/* <input type="checkbox" className=" w-4 h-4 sf-btn-bg" />
                            <label className="text-sm text-slate-400">Remember me</label> */}
                            <Link to="/SignUp?cmd=findpw" className="text-sm text-slate-400 hover:text-sf-btn-bg">비밀번호 재설정</Link>
                        </div>
                        <div>
                            {/* <Link to="/" className="text-sm text-slate-400 hover:text-blue-500">비밀번호 찾기</Link> */}
                            <Link to="/SignUp?cmd=signup" className="text-sm text-slate-400 hover:text-sf-btn-bg">회원가입 하기</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login;