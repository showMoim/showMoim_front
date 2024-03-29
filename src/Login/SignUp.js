import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useDefaultApi } from "../Context/DefaultApiContext";
import { EmailVerifyService, emailVerifyRequestService, executeChangePasswordService  } from "../Api/MemberApiService";
import { Status } from "../enum/status";
import Timer from "./Timer.jsx"
import "../css/Login.css";

function SignUp() {
  const [second , setSecond] = useState(0)
  const [isVerifyRequested , setIsVerifyRequested] = useState(false)
  const [isExpired , setIsExpired] = useState(false)

  const authContext = useAuth()
  const defaultApiContext = useDefaultApi();
  const [searchParams, setSearchParams] = useSearchParams();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [name, setName] = useState("");
 

  const [chkEmail, setChkEmail] = useState(false);
  const [chkCode, setChkCode] = useState(false);
  const [chkPassword, setChkPassword] = useState(false);
  const [chkInfo, setChkInfo] = useState(false);

  const authCode = "123456";
  const [previousPassword, setPreviousPassword] = useState("");
  const navigate = useNavigate();

  async function emailVerifyRequest (email){
    setIsExpired(false)
    const emailInfo = {
            email
        }
    const response = await defaultApiContext.executeDefaultApiService(() => emailVerifyRequestService(emailInfo))
    emailVerifyRequestNavigator(response)  
  }

  async function emailVerifyRequestNavigator(response){
    if(response.status == Status.OK){
        setSecond(300)
        setIsVerifyRequested(true)
        activeTimer()
    }
  }

  const activeTimer = () => {
    const minusSecond = setInterval(
      () => {
      setSecond((prev) => {
          if(prev < 1){
            setIsVerifyRequested(false)
            //timer (setInterval) anmount
            setIsExpired(true)
            clearInterval(minusSecond)
            return 0
          }
          return --prev
        })
    }, 1000)
  }

  async function emailVerify(email, code){

    const response = await defaultApiContext.executeDefaultApiService(
      () => EmailVerifyService({email, code})
    );
    emailVerifyNavigator(response)
  }

  async function emailVerifyNavigator(response){
    if(response.status == Status.OK){
      setChkEmail(true)
    }
  }

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  //인증 유효 시간 넣어야 될거같음
  const onAuthHandler = (e ) => {
    emailVerifyRequest(email);
  };

  const onCodeHandler = (e) => {
    setCode(e.currentTarget.value);
    //인증 코드가 맞는지 여부 확인 필요
    setChkCode(true); //일단은 임시로
  };

  const onPreviousPasswordHandler = (e) => {
    setPreviousPassword(e.currentTarget.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConPasswordHandler = (e) => {
    setConPassword(e.currentTarget.value);
  };

  const onInfoHandler = (e) => {
    setName(e.currentTarget.value);
  };

  async function checkValidEmail(code){
    setCode(code)
    return await emailVerify(email, code)
  };

  const checkValidPassword = (pwd, conPwd) => {
    if (!pwd || !conPwd) return false;
    if (pwd !== conPwd) return false;

    return true;
  };

  async function onSignUp(){
    if(await authContext.signUp(email, code,name, password, conPassword)){
      navigate("/Login");
    }else{
      console.log("회원가입 실패!!!")
      navigate("/Login")
    }
  }

  async function onChangePassword(){
    const response = await defaultApiContext.executeDefaultApiService(
      () => executeChangePasswordService(
        {
          email,
          code,
          previousPassword,
          'newPassword' : password,
          'newPasswordConfirm' : conPassword
        }
      ))

    await changePasswordNavigator(response)
  
  }

  async function changePasswordNavigator(response){
    if(await response.status == Status.OK){
      navigate("/Login")
    }else{
      console.log("비밀번호 변경 실패")
    }
  }
  return (
    <div className="bg-gray-10 flex items-center justify-center p-12">
        <div className="w-full flex flex-col ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            {searchParams.get("cmd") === "signup" ? "회원가입" : "비밀번호 재설정"}
          </h1>
          {chkEmail == false && chkPassword == false && chkInfo == false && (
            <div>
                <div className="mb-6">
                    <div className="mb-1 text-sm text-gray-600 font-semibold">이메일을 입력해주세요.</div>
                    <input type="text" onChange={onEmailHandler} value={email} className="w-3/4 py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg mr-3"/>
                    <button onClick={() => {onAuthHandler()}} disabled={email.length < 1} className="w-1/5 py-2.5 bg-sf-btn-bg rounded text-sm font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400">번호 요청</button>
                </div>
                <div className="mb-3">
                    <div className="mb-1 text-sm text-gray-600 font-semibold">인증코드를 입력해주세요.</div>
                    <input type="text" onChange={onCodeHandler} value={code} className="w-full py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg" />
                    {isVerifyRequested && <Timer second = {second}></Timer>}
                    {isExpired && <div className="mb-2 text-sm text-red-500">인증 요청 기간이 만료되었습니다.</div>}
                </div>
                <div className="mb-2 text-sm text-red-500">{code.length > 0 && authCode != code ? "인증번호가 일치하지 않습니다." : "\u00A0"}</div>
                <button onClick={() => {
                                          checkValidEmail(code)
                                    }}
                disabled={code.length < 6 || !isVerifyRequested} className="py-4 bg-sf-btn-bg w-full rounded font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400">다음</button>
                
            </div>
            
          )}
          {chkEmail == true && chkPassword == false && chkInfo == false && (
            <div>
              {
                searchParams.get("cmd") === "findpw" && (
                  <div className="mb-6">
                    <div className="mb-1 text-sm text-gray-600 font-semibold">기존 비밀번호를 입력해주세요.</div>
                    <input type="password"  onChange={onPreviousPasswordHandler} className="w-full py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg mr-3"></input>
                </div>
                )
              }
                <div className="mb-6">
                    <div className="mb-1 text-sm text-gray-600 font-semibold">비밀번호를 입력해주세요.</div>
                    <input type="password" onChange={onPasswordHandler} value={password} className="w-full py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg mr-3"></input>
                </div>
                <div className="mb-3">
                    <div className="mb-1 text-sm text-gray-600 font-semibold">비밀번호를 한 번 더 입력해주세요.</div>
                    <input type="password" onChange={onConPasswordHandler} value={conPassword} className="w-full py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg mr-3"></input>
                </div>
                <div className="mb-2 text-sm text-red-500">{conPassword.length > 0 && password != conPassword ? "비밀번호가 일치하지 않습니다." : "\u00A0"}</div>
                <button
                onClick={async () => {
                  if (checkValidPassword(password, conPassword)) {
                    if(searchParams.get("cmd") === "findpw") {
                      //비밀번호 재설정 진행
                      await onChangePassword()
                      return
                    }
                    setChkPassword(true);
                    
                  }
                }}
                disabled={!checkValidPassword(password, conPassword)} className="py-4 bg-sf-btn-bg w-full rounded font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400">{searchParams.get("cmd") === "signup" ? "다음" : "완료"}</button>
            </div>
          )}
          {searchParams.get("cmd") === "signup" && chkEmail == true && chkPassword == true && chkInfo == false && (
            <div>
                <div className="mb-3">
                    <div className="mb-1 text-sm text-gray-600 font-semibold">이름을 입력해주세요.</div>
                    <input type="text" onChange={onInfoHandler} value={name} className="w-full py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg mr-3"></input>
                </div>
                <div className="mb-2 text-sm text-red-500">&nbsp;</div>
                <button
                  onClick={() => {
                    console.log("정보 작성 완료");
                    setChkInfo(true);
                    onSignUp();
                  }}
                  disabled={name.length < 1} className="py-4 bg-sf-btn-bg w-full rounded font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400" >완료</button>
            </div>
            )}
        </div>
    </div>
  );
}

export default SignUp;
