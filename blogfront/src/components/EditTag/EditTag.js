
import InputBox from './InputBox';
import SubBtn from './SubBtn';
import styled from 'styled-components'


import img from './Source/bgimg.png'
import MappingContainer from '../Setting/MappingContainer';
import BackToSet from '../Setting/BackToSet';

let Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${img});
    background-size: cover; 


`
let SettingBox = styled.div`


    width: 30vw;
    height:50vh;
    text-align: center;
    background-color: #F28ECA;
    border-radius : 20px;


`

let ImgBox = styled.div`

flex-grow: 3;
display: flex;
align-items: center;
justify-content: center;

`

let H = styled.div`

flex-grow: 7;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;


`
let HeaderContainer = styled.div`

height: 10vh;
justify-content: center;
width: 100%;
display: flex;
flex-direction: row;


`




function EditTag() {




    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}


                <SettingBox>
                    <MappingContainer />
                    <HeaderContainer>
                        <H>선호 태그 재설정</H>
                        <ImgBox>
                            <BackToSet />
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