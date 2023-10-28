import styled from "styled-components"

import InputBox from "../Login/InputBox";
import Button from "../Login/Button";

import IDIcon from "./IDIcon.png";
import passwordIcon from "./passwordIcon.png";
import logoIcon from "./logoIcon.png";

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
function SignUp(){
    return(
        <PWResetLDiv>
            <Logo src={logoIcon}/>
            <InputBox src={IDIcon} text="USER NAME" type="text"/>
            <InputBox src={passwordIcon} text="PASSWORD" type="password"/>
            <InputBox src={passwordIcon} text="CHECK PASSWORD" type="password"/>
            <InputBox src={IDIcon} text="PHONE NUMBER" type="text"/>
            <InputBox src={IDIcon} text="YYYY/MM/DD" type="text"/>
            <InputBox src={IDIcon} text="FAVORITE PLACE(OPTION)" type=""/>
            <Button text="회원가입"/>
        </PWResetLDiv>
    )
}

export default SignUp;