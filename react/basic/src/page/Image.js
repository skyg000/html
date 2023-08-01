import React from 'react'
import logo from '../logo.svg'
function Image() {
    return (
        <>
            # src 폴더안에 이미지 출력<br/>
            <img src={logo} alt="" /> <br/>
            # public 폴더안에 이미지 출력 <br/>
            <img src="./logo512.png" alt="" /> <br/>
        </>
    )
}

export default Image