import React, { useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useDefaultApi } from "../Context/DefaultApiContext";
import { Status } from "../enum/status";
import "../css/Login.css";

function Open() {
  const [imgFile, setImgFile] = useState(false);
  const type = useRef();
  const name = useRef();
  const [leader, setLeader] = useState("");
  const [intro, setIntro] = useState("");
  
  const imgUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => { //fileReader기 성공적으로 파일 읽었을 때 트리거
        setImgFile(reader.result || null);
        resolve();
      };
    });

  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredType = type.current.value;
    const enteredName = name.current.value;

    if(enteredType == "") {
        alert("분야를 선택해주세요!");
        return;
    }
    if(enteredName.length < 1) {
        alert("모임명을 입력해주세요!");
        return;
    }
    if(true) {
    }
}


  return (
    <div className="bg-gray-10 flex items-center justify-center p-12">
        <div className="w-full flex flex-col ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            모임 개설하기
          </h1>
            <div>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label for="file">
                  <div className="w-full h-38 border-dashed border-2 border-gray-500 text-sm text-center text-gray-500 p-2.5 rounded hover:ring-1 outline-sf-btn-bg">
                  {imgFile ? <img src={imgFile} className="object-cover h-32 w-96"/> : <span className="object-cover h-32 inline-block align-middle">대표 이미지를 선택해주세요.</span>}
                  </div>
                </label>
                <input 
                  type="file" 
                  accept="image/jpg,image/png,image/jpeg" 
                  name="file" 
                  id="file" 
                  className="hidden" 
                  onChange={e => imgUpload(e)} />
              </div>
              <div className="mb-6">
                  <button className="w-1/4 py-2.5 bg-sf-btn-bg-1 rounded text-sm font-bold text-black hover:bg-sf-btn-bg disabled:bg-sf-btn-bg-1" disabled>분야</button>
                  <select id="" ref={type} className="w-1/2 py-2 px-3 bg-gray-100 rounded outline-sf-btn-bg ml-1 rounded absolute h-10 right-12 font-semibold text-gray-500 text-sm">
                    <option className="hidden" selected disabled>분야를 골라주세요.</option>
                    <option value="US">스터디</option>
                    <option value="CA">운동</option>
                    <option value="FR">문화</option>
                    <option value="DE">기타</option>
                  </select>
              </div>
              <div className="mb-6">
                  <button className="w-1/4 py-2.5 bg-sf-btn-bg-1 rounded text-sm font-bold text-black hover:bg-sf-btn-bg disabled:bg-sf-btn-bg-1" disabled>모임명</button>
                  <input type="text" ref={name} placeholder="모임명을 입력해주세요." className="w-1/2 py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg ml-1 absolute font-semibold text-gray-500 text-sm right-12"></input>
              </div>
                <div className="mb-6">
                  <button className="w-1/4 py-2.5 bg-sf-btn-bg-1 rounded text-sm font-bold text-black hover:bg-sf-btn-bg disabled:bg-sf-btn-bg-1" disabled>모임장</button>
                  <input type="text" className="w-1/2 py-2 px-4 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg ml-1 absolute font-semibold text-gray-500 text-sm right-12" value="쟈쟈"></input>
                </div>
                <div className="mb-6">
                  <button className="w-full py-2.5 bg-sf-btn-bg-1 rounded text-sm font-bold text-black hover:bg-sf-btn-bg disabled:bg-sf-btn-bg-1" disabled>모임 소개</button>
                </div>
                <div className="mb-6">
                  <textarea className="w-full responsive p-2.5 bg-gray-100 rounded hover:ring-1 outline-sf-btn-bg font-semibold text-gray-500 text-sm"></textarea>
                </div>
                <div className="mb-6">
                  <button className="w-full py-2.5 bg-sf-btn-bg rounded text-sm font-bold text-white hover:bg-sf-btn-bg disabled:bg-gray-300 disabled:text-gray-400 disabled">가입 하기</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Open;
