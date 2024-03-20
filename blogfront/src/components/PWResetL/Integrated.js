import styled from "styled-components"

import InputBox from "../Login/InputBox";

import IDIcon from "./IDIcon.png";
import passwordIcon from "./passwordIcon.png";
import logoIcon from "./logoIcon.png";
import emailIcon from "./emailIcon.png"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PWResetLDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 100%;
    height: 100vh;
    background-color : #09006B;
`
const Logo = styled.img`
    width : 15rem;
    height : 15rem;
    margin-bottom : 3rem;
`
const LoginFP = styled.div`
width : 27rem;
    color : white;
    margin-bottom:1rem;
`
const Empty = styled.div`

height: 0.5vh;

`
const ButtonBTN = styled.button`
    background-color : white;
    border : none;
    border-radius : 6px;
    font-size : 1.3rem;
    width : 27rem;
    height : 3.5rem;
`

function PWResetL(){

    const navi = useNavigate();
    const [text, setText] = useState("비밀번호 찾기")
    const [time, setTime] = useState(0)

    const startCountdown = () => {
        
        const countdown = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
    
        setTimeout(() => {
          clearInterval(countdown);
          setText("비밀번호 찾기");
          setTime("");
        }, 120000);

      };
    
      const onbtnclick = () =>{

        setText("인증번호 확인")
        setTime(120)
        startCountdown();

      }


    return(
        <PWResetLDiv>
            <Logo src={logoIcon}/>
            <InputBox src={IDIcon} text="USER NAME" type="text"/>
            <InputBox src={emailIcon} text="E-MAIL" type="text"/>
            <InputBox src={passwordIcon} text="CODE" type="password"/>
            <Empty />
            <LoginFP onClick={()=>{navi(`/login`)}}>비밀번호를 알고 계신가요?</LoginFP>
            <Empty />
            <ButtonBTN onClick={onbtnclick}>{text}</ButtonBTN>
            <Empty />
            <LoginFP>{time > 0 ? `남은 시간: ${time}초` : ""}</LoginFP>

        </PWResetLDiv>
    )
}

export default PWResetL;