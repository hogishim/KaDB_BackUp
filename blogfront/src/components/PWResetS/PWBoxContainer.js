import styled from 'styled-components'
import { useState } from 'react'
import InputBox from './InputBox'

let CurPWBox = styled.div`

display: ${(props) => (props.boxVisiblity ? 'none' : 'flex')};
flex-direction: column;
transition: all 1s;

`

let NewPWBox = styled.div`

display: ${(props) => (props.boxVisiblity ? 'flex' : 'none')};
flex-direction: column;
transition: all 1s;

`

let BoxContainer = styled.div`

justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
flex-grow: 50;


`

function PWBoxContainer(props) {

    let [boxVisiblity, setBoxVisibility] = useState(false);
    let [msg1, setMsg1] = useState("");
    let [msg2, setMsg2] = useState();
    let [msg3, setMsg3] = useState();

    const curPW = "1q2w3e4r!";

    let [pw1, setPW1] = useState();
    let [pw2, setPW2] = useState();
    let [pw3, setPW3] = useState();

    let [btnVisibility, setBtnVisbility] = useState(false);


    const handleChange1 = (pw) => {

        if (curPW != pw) {

            setMsg1("기존 비밀번호와 일치하지 않습니다")


        }
        else if (curPW == pw) {

            setMsg1("")
            setBoxVisibility(true)

        }


    }

    const handleChange2 = (pw) => {

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
        setMsg3("")

        if (regex.test(pw)) {
            setMsg2("조건을 만족합니다")
            setPW2(pw)


            setTimeout(() => {
                setMsg2("")
            }, 5000);


        }
        if (!regex.test(pw)) {
            setMsg2("8글자 이상, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.");
            setBtnVisbility(false);
            props.onVisibilityChange(false)
        }


    }

    const handleChange3 = (pw) => {

        if (pw == pw2) {

            setMsg3("비밀번호가 일치합니다")
            setBtnVisbility(true);
            props.onVisibilityChange(true)
        }
        else {

            setMsg3("비밀번호가 일치하지 않습니다")
            setBtnVisbility(false)
            props.onVisibilityChange(false)

        }

    }


    return (


        <BoxContainer>

            <CurPWBox boxVisiblity={boxVisiblity}>
                <InputBox handleChange={handleChange1} msg={msg1} />
            </CurPWBox>

            <NewPWBox boxVisiblity={boxVisiblity}>
                <InputBox handleChange={handleChange2} msg={msg2} />
                <InputBox handleChange={handleChange3} msg={msg3} />
            </NewPWBox>

        </BoxContainer>

    )


}
export default PWBoxContainer;