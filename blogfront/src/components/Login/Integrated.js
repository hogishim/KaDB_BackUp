import styled from "styled-components"

import InputBox from "./InputBox";
import Button from "./Button";

import IDIcon from "./IDIcon.png";
import passwordIcon from "./passwordIcon.png";
import logoIcon from "./logoIcon.png";

const LoginDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 30rem;
    background-color : #09006B;
`
const LoginLogo = styled.img`
    width : 15rem;
    height : 15rem;
    margin-bottom : 3rem;
`
const LoginFP = styled.a`
    align-self : flex-end;
    color : white;
    margin-bottom:1rem;
`
function Login(){
    return(
        <LoginDiv>
            <LoginLogo src={logoIcon}/>
            <InputBox src={IDIcon} text="ID" type="text"/>
            <InputBox src={passwordIcon} text="PASSWORD" type="password"/>
            <LoginFP>Forgot Password?</LoginFP>
            <Button text="LOGIN"/>
        </LoginDiv>
    )
}

export default Login;