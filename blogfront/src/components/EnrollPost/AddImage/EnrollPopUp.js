import React, { useState } from "react";
import styled from "styled-components";
import InputImg from "./InputImg";
import HeaderContainer from "../HeaderContainer";
import { Button } from "antd";

const Container = styled.div`
  position: absolute;
  top: 20;
  left: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CityBox = styled.div`
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 35vh;
  text-align: center;
  background-color: lavenderblush;
  border: 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px grey;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
const ImageInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 13vh;
  padding: 10px;
`;
const ImageViewBox = styled.div`
  height: 100px;
`;
const ButtonContainer = styled.div``;

function EnrollPlace(props) {
  const [image, setImage] = useState(null);
  const [state, setState] = useState(false);

  const handleImageChange = (imgData) => {
    setImage(imgData);
  };

  return (
    <Container>
      <CityBox>
        <HeaderContainer
          text="이미지 등록하기"
          closeWindow={props.closeWindow}
        />
        <ImageInput>
          <ImageViewBox>
            {image && <ImagePreview src={image} alt="미리보기 이미지" />}
          </ImageViewBox>
          <InputImg onImageChange={handleImageChange} />
        </ImageInput>
        <ButtonContainer>
          <Button type="primary" onClick={() => props.closeWindow(state)}>
            등록하기
          </Button>
        </ButtonContainer>
      </CityBox>
    </Container>
  );
}

export default EnrollPlace;
