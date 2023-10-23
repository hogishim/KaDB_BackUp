import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import InputImg from './InputImg'
import Button from '../AddCity/Button';

let Container = styled.div`
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


function EnrollPlace() {
    const [image, setImage] = useState(null);

    const handleImageChange = (imgData) => {
        setImage(imgData);
    };

    return (
        <Container>
            <CityBox>

                <HeaderBox>신규 장소 등록하기</HeaderBox>

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
                <Button text="등록하기" colour="#32A4FF"/>

            </CityBox>
        </Container>
    );
}

export default EnrollPlace;
