import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Common/Modal';
import '../css/Login.css';

function Login() {
    const [modalVisible, setModalVisible] = useState(false)
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
                    </form>
                    <div className="w-3/4 mt-3 mb-3">
                        {/* <button type="submit" disabled={email.length < 1 || password.length < 1} formAction='' className="py-4 bg-sf-btn-bg w-full rounded font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400"> 로그인 </button> */}
                        <button onClick={openModal} className="py-4 bg-sf-btn-bg w-full rounded font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400"> 로그인 </button>
                        {modalVisible && <Modal closeModal={closeModal}></Modal>}
                    </div>
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