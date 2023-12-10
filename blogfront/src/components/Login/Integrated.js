import styled from "styled-components"
import axios from "axios"
import { url } from "../../App"
import qs from 'qs'

import InputBox from "./InputBox";
import Button from "./Button";

import IDIcon from "./IDIcon.png";
import passwordIcon from "./passwordIcon.png";
import logoIcon from "./logoIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 100%;
    height: 100vh;
    background-color : #09006B;
`
const LoginLogo = styled.img`
    width : 15rem;
    height : 15rem;
    margin-bottom : 3rem;
`
const LoginFP = styled.a`
    width: 28rem;
    color : white;
    margin-bottom:1rem;
`

function Login(){
    const navigator = useNavigate()
    const [id,setId] = useState('')
    const [password,setPassword] = useState('')

    async function postlogin(id, password){
        const data = {
            username : id,
            password : password
        }
        await axios.post(url+'login',qs.stringify(data),
        {headers:{
            'Content-Type' : 'application/x-www-form-urlencoded'
        }}
        )
        .then((response)=>{
            console.log('login axios post 응답 : ' + response)
            navigator('/main')
        })
        .catch((error)=>{
            console.log('login axios post 에러 : ' + error)
            alert("로그인 실패")
        })
    }
    return(
        <LoginDiv>
            <LoginLogo src={logoIcon}/>
            <InputBox src={IDIcon} text="ID" type="text" setValue={setId}/>
            <InputBox src={passwordIcon} text="PASSWORD" type="password" setValue={setPassword}/>
            <LoginFP>Forgot Password?</LoginFP>
            <Button text="LOGIN" onClick={()=>{postlogin(id, password)}}/>
        </LoginDiv>
    )
}

export default Login;