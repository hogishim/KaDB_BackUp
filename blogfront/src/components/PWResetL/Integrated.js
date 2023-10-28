import styled from "styled-components"

import InputBox from "../Login/InputBox";
import Button from "../Login/Button";

import IDIcon from "./IDIcon.png";
import passwordIcon from "./passwordIcon.png";
import logoIcon from "./logoIcon.png";
import emailIcon from "./emailIcon.png"

const PWResetLDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 30rem;
    background-color : #09006B;
`
const Logo = styled.img`
    width : 15rem;
    height : 15rem;
    margin-bottom : 3rem;
`
function PWResetL(){
    return(
        <PWResetLDiv>
            <Logo src={logoIcon}/>
            <InputBox src={IDIcon} text="USER NAME" type="text"/>
            <InputBox src={emailIcon} text="E-MAIL" type="text"/>
            <InputBox src={passwordIcon} text="CODE" type="password"/>
            <Button text="비밀번호 찾기"/>
        </PWResetLDiv>
    )
}

export default PWResetL;