import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import InputImg from './InputImg'
import HeaderContainer from '../HeaderContainer';


let Container = styled.div`
    position: absolute;
    top: 20;
    left: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

let CityBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 40vh;
    text-align: center;
    background-color: lavenderblush;
    border: 0;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px grey;
`;

let HeaderBox = styled.div`
    display: flex;
    height: 7vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

let NameInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    flex-direction: column;
`;

let ImagePreview = styled.img`
    width: 100px;  
    height: 100px;
    object-fit: cover;
`;
let ImageInput = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 13vh;
padding: 10px;

`
let ImageViewBox = styled.div`

height: 100px;

`

let Btn = styled.button`

padding: 10px;
border-radius: 10px;
background-color: #567ace;
border: 0;
flex-grow: 2;
margin: 10px;

`


function EnrollPlace(props) {
    const [image, setImage] = useState(null);
    const [state, setState] = useState(false);
  
    const handleImageChange = (imgData) => {
      setImage(imgData);
    };
  
    return (
      <Container>
        <CityBox>
          <HeaderContainer text="신규장소 등록하기" closeWindow={props.closeWindow} />
          <ImageInput>
            <ImageViewBox>
              {image && <ImagePreview src={image} alt="미리보기 이미지" />}
            </ImageViewBox>
            <InputImg onImageChange={handleImageChange} />
          </ImageInput>
          <NameInput>
            <InputBox hintText="장소 이름을 입력해주세요" />
            <InputBox hintText="장소 주소를 입력해주세요" />
          </NameInput>
          <Btn onClick={() => props.closeWindow(state)}>등록하기</Btn>
        </CityBox>
      </Container>
    );
  }
  
  export default EnrollPlace;
  
