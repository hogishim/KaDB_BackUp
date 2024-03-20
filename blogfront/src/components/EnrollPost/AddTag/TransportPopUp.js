import styled from 'styled-components'
import InputBox from './InputBox'
import { useState } from 'react';
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
    height: 40vh;
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

let ContentBox = styled.div`
width: 45rem;
height: 25vh;
display: flex;
justify-content: center;
align-items: center;

`

function PlacePopUp(props) {

    const [tag, setTag] = useState('')
    
    const onchange = (val) =>{

        setTag(val)

    }


    return (
        <Container>
            <CityBox>

                <HeaderContainer text="태그 추가하기" 
                closeWindow={props.closeWindow} />

                <ContentBox>

                <InputBox text="게시글에 대한 태그를 입력해주세요!" onchange = {onchange}/>

                </ContentBox>


                <Button onClick={() =>{ props.closeWindow(false);  props.addTag(tag)}}>제출하기</Button>
            </CityBox>

        </Container>

    );


}
export default PlacePopUp;