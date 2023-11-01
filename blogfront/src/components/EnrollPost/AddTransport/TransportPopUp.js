import styled from 'styled-components'
import ImageButton from './ImageButton'
import { useState } from 'react';
import HeaderContainer from '../HeaderContainer';
import InputContainer from './InputContainer';

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

function PlacePopUp(props) {



    return (
        <Container>
            <CityBox>

                <HeaderContainer text="교통수단 추가하기" 
                closeWindow={props.closeWindow} />

                <ContentBox>
                    <ButtonBox>
                        <ImageButton />
                    </ButtonBox>
                </ContentBox>

                <InputContainer />

                <Button onClick={() => 
                    { props.closeWindow(false) }}>제출하기</Button>
            </CityBox>

        </Container>

    );


}
export default PlacePopUp;