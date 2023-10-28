import styled from 'styled-components';
import Button from './Button';
import PutPW from './PutPW';
import pwImg from './Source/lock.png'
import settingImg from '../Setting/Source/settings.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`



let PWContainer = styled.div`

    width: 30vw;
    height: 45vh;
    text-align: center;
    background-color: #5AD2FF;
    border : 1x solid rgb(233, 243, 40);
    border-radius : 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



`
let HeaderContainer = styled.div`

flex-grow: 10;
justify-content: center;
width: 100%;
display: flex;
flex-direction: row;


`

let PWBoxContainer = styled.div`

justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
flex-grow: 50;


`

let ButtonContainer = styled.div`

flex-grow: 10;
width: 100%;

`
let InputBar = styled.div`

background-color: #F2F2F2;
width: 15vw;
display: flex;
align-items: center;
flex-direction: row;
margin: 10px;
height: 3rem;
border-radius: 4px;

`

let Img = styled.img`

height: 1.5rem;
width: 1.5rem;
margin-left: 10px;

`
let P1 = styled.div`

font-size: 10px;
text-align: start;
width: 15vw;
color: red;
`

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

let ButtonBox= styled.div`

display: ${(props) => (props.btnVisibility ? 'flex' : 'none')};

transition: all 1s; 
align-items: center;
justify-content: center;

`
let ImgBox = styled.div`

flex-grow: 3;
display: flex;
align-items: center;
justify-content: center;

`

let BackImg = styled.img`

width: 50px;
height: 50px;



`
let H = styled.div`

flex-grow: 7;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;


`

function PWBox() {

    const curPW = "1q2w3e4r!";

    let [pw1, setPW1] = useState();
    let [pw2, setPW2] = useState();
    let [pw3, setPW3] = useState();

    let [msg1, setMsg1] = useState("");
    let [msg2, setMsg2] = useState();
    let [msg3, setMsg3] = useState();

    let [boxVisiblity, setBoxVisibility] = useState(false);
    let [btnVisibility, setBtnVisbility] = useState(false);

    const navi = useNavigate();


    const handleChange1 = (pw) => {

        if(curPW != pw){

            setMsg1("기존 비밀번호와 일치하지 않습니다")
            

        }
        else if(curPW == pw){

            setMsg1("")
            setBoxVisibility(true)

        }


    }

    const handleChange2 =(pw) =>{

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
        setMsg3("")
    
        if (regex.test(pw)) {
            setMsg2("조건을 만족합니다")
            setPW2(pw)


            setTimeout(() => {
                setMsg2("")
            }, 5000);
            

        }
        if (!regex.test(pw)){
            setMsg2("8글자 이상, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.");
            setBtnVisbility(false);
        }


    }

    const handleChange3 = (pw) =>{

        if(pw == pw2){

            setMsg3("비밀번호가 일치합니다")
            setBtnVisbility(true);
        }
        else{

            setMsg3("비밀번호가 일치하지 않습니다")
            setBtnVisbility(false)

        }



    }


    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <PWContainer>


                    <HeaderContainer>
                        <H>비밀번호 재설정</H>
                        <ImgBox>
                        <BackImg src={settingImg} onClick={()=>{navi("/setting")}}/>
                        </ImgBox>
                    </HeaderContainer>

                    <PWBoxContainer>

                        <CurPWBox boxVisiblity={boxVisiblity}>
                        <InputBar>
                            <Img src={pwImg}/>
                            <PutPW id={0} onPWChange={handleChange1}/>
                            
                        </InputBar>
                        <P1>{msg1}</P1>
                        </CurPWBox>
                        <NewPWBox boxVisiblity = {boxVisiblity}>
                        <InputBar>
                            <Img src={pwImg} />
                            <PutPW id={1} onPWChange={handleChange2}/>
                        </InputBar>
                        <P1>{msg2}</P1>
                        <InputBar>
                            <Img src={pwImg} />
                            <PutPW id={2} onPWChange={handleChange3}/>
                        </InputBar>
                        <P1>{msg3}</P1>
                        </NewPWBox>
                    </PWBoxContainer>

                    <ButtonContainer>
                        <ButtonBox btnVisibility = {btnVisibility}>
                        <Button/>
                        </ButtonBox>
                    </ButtonContainer>
                </PWContainer>

            </Container>
        </>
    )



}
export default PWBox;