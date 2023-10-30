import styled from 'styled-components'
import ImageButton from './ImageButton'
import { useState } from 'react';
import InputBox from './InputBox';
import HeaderContainer from '../HeaderContainer';

let Container = styled.div`

    position: absolute;
    top: 0;
    left: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

let CityBox = styled.div`

    box-shadow: 5px 5px 5px 5px grey;
    width: 45rem;
    height: 60vh;
    text-align: center;
    background-color: lavenderblush;
    border-radius: 20px;
   
`;

let HeaderBox = styled.div`
    display: flex;
    height: 5vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;


`
let Button = styled.button`

padding: 10px;
border-radius: 10px;
background-color: 	#5ABEF5;
border: 0;
flex-grow: 2;
margin: 10px;
width: 10rem;
height: 4vh;

`

let ButtonBox = styled.div`

width: 35rem;
height: 20vh;


`
let ContentBox = styled.div`
width: 45rem;
height: 25vh;
display: flex;
justify-content: center;
align-items: center;


`
let InputContainer = styled.div`

width: 45rem;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
let OuterInputBox = styled.div`

width: 25rem;
height: 5vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


`
let H = styled.div`

width: 5rem;
height: 5vh;
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;


`

let XBox = styled.div`

flex-grow: 1;

`
let HeaderText = styled.div`

flex-grow: 10;
`

function PlacePopUp(props) {



    return (
        <Container>
            <CityBox>

                <HeaderContainer text="교통수단 추가하기" closeWindow={props.closeWindow} />
                <ContentBox>
                    <ButtonBox>
                        <ImageButton></ImageButton>
                    </ButtonBox>
                </ContentBox>
                <InputContainer>
                    <OuterInputBox>
                        <H>교통수단명</H>

                        <InputBox text="교통수단명 / 노선 번호등을 입력해주세요" />

                    </OuterInputBox>
                    <OuterInputBox>
                        <H>출발시간</H>

                        <InputBox text="출발시간을 입력해주세요" />

                    </OuterInputBox>
                    <OuterInputBox>
                        <H>도착시간</H>

                        <InputBox text="도착시간을 입력해주세요" />

                    </OuterInputBox>
                    <OuterInputBox>
                        <H>비용</H>

                        <InputBox text="소요 비용을 입력해 주세요" />
                    </OuterInputBox>
                </InputContainer>

                <Button onClick={() => { props.closeWindow(false) }}>제출하기</Button>
            </CityBox>

        </Container>
    );


}
export default PlacePopUp;