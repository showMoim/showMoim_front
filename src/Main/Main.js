import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { errorState } from '../recoil/error/atoms';
import { Status } from '../enum/status';
import DefaultErrorModal from '../Common/DefaultErrorModal';
function Main() {
    // const user = userRecoilState(userState);
    // const authenticated = user.status;
    // const [authenticated, setAuthenticated] = useState(false);

    let errorState = useRecoilValue(errorState)
    console.log("error State 변경 " + errorState)
    useEffect(() => {
        //로그인 체크
        // setAuthenticated(true);
    }, [errorState]);

    // if (!authenticated) {
    //     return <div>로그인해주세여</div>
    // }
        

    return (
        <div className="bg-gray-10 ">
            <div className="flex justify-center h-screen w-screen items-center">
                메인페이지 영역
            </div>
            {errorState != Status.OK && <DefaultErrorModal></DefaultErrorModal>}
        </div>
    )
}

export default Main;