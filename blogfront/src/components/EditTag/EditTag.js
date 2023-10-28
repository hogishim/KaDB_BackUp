
import InputBox from './InputBox';


import settingImg from '../Setting/Source/settings.png'
import SubBtn from './SubBtn';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

let Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;


`
let SettingBox = styled.div`

    width: 40vw;
    height:50vh;
    text-align: center;
    background-color: #FFDB31;
    border : 1px solid rgb(233, 243, 40);
    border-radius : 20px;


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
let HeaderContainer = styled.div`

flex-grow: 10;
justify-content: center;
width: 100%;
display: flex;
flex-direction: row;


`


function EditTag() {

    const navi = useNavigate();


    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <SettingBox>

                <HeaderContainer>
                        <H>비밀번호 재설정</H>
                        <ImgBox>
                        <BackImg src={settingImg} onClick={()=>{navi("/setting")}}/>
                        </ImgBox>
                    </HeaderContainer>
                    <InputBox />
                    
                    <SubBtn />

                </SettingBox>

            </Container>
        </>
    )



}
export default EditTag;