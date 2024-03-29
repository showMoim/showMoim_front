import { useState } from 'react';
import styled from 'styled-components';


const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const { closeModal } = props;
    

  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
    <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div className="w-3/4 max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
    <div>
      <div className="text-center flex-auto justify-center">
        <h2 className="text-xl font-bold py-4 ">{props.title}</h2>
        <p className="text-sm text-gray-500 px-8 display-linebreak">{props.content /* 개행 처리 해야함 */}</p>
     </div>
     <div className="p-3  mt-2 text-center space-x-4 md:block">
         {/* <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
             Cancel
         </button>
         <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button> */}
      <button onClick={closeModal} className="mb-2 md:mb-0 bg-sf-btn-bg border border-sf-btn-bg px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:sf-btn-bg">확인</button>
     </div>
   </div>
 </div>
</div>
  );
};

export default Modal;
