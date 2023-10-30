import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import MappingContainer from '../Setting/MappingContainer';
import bgimg1 from '../Setting/Source/bgimg1.png'
import PWBoxContainer from './PWBoxContainer';
import HeaderBox from '../Setting/HeaderBox';

let Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100vw - 7rem);
    background-image: url(${bgimg1});
    background-size: cover; 


`

let PWContainer = styled.div`

    width: 30vw;
    height: 50vh;
    text-align: center;
    background-color: #5AD2FF;
    border : 1x solid rgb(233, 243, 40);
    border-radius : 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



`

let ButtonContainer = styled.div`

flex-grow: 10;
width: 100%;

`

let ButtonBox = styled.div`

display: ${(props) => (props.btnVisibility ? 'flex' : 'none')};
transition: all 1s; 
align-items: center;
justify-content: center;

`

function PWBox() {

    let [btnVisibility, setBtnVisbility] = useState(false);

    const onVisibilityChange = (visibility) =>{

        setBtnVisbility(visibility)
        console.log(visibility)

    }


    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <PWContainer>


                    <MappingContainer />
                    <HeaderBox headerText="비밀번호 재설정"/>

                    <PWBoxContainer onVisibilityChange={onVisibilityChange} />

                    <ButtonContainer>
                        <ButtonBox btnVisibility={btnVisibility}>
                            <Button />
                        </ButtonBox>
                    </ButtonContainer>
                </PWContainer>

            </Container>
        </>
    )

}
export default PWBox;