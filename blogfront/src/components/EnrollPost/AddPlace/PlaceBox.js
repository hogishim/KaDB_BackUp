import React, { useState } from 'react';
import styled from 'styled-components';

let ContainerBox = styled.div`
    border-bottom: 1px solid black;
    padding: 5px;
    cursor: pointer;
    height: 8rem;
    display: flex;    
   
    align-items: center;


    ${(props) =>
        props.isSelected &&
        `
        background-color: #add8e6;
    `}
`;
let Img = styled.img`

height: 7rem;

`
let ImageContainer = styled.div`

margin-left: 20px;

`

let TextContainer = styled.div`

margin-left: 20px;
display: flex;
flex-direction: column;
text-align: left;

`

function PlaceBox(props) {
    const [selectedIdx, setSelectedIdx] = useState("");

    const handleBoxClick = (idx) => {

        if (selectedIdx === idx) {
            setSelectedIdx(null);
        } else {
            setSelectedIdx(idx);
        }

    };

    return (
        <>
            {props.place.map(function (a, idx) {
                if (props.city === a.c) {
                    return (
                        <ContainerBox
                            isSelected={idx === selectedIdx}
                            onClick={() => {handleBoxClick(idx); props.setPlace(a.place)}}
                            key={idx}>
                            <ImageContainer>
                                <Img src={a.img}></Img>
                            </ImageContainer>
                            <TextContainer>
                                <h3>{a.place}</h3>
                                <h6>{a.address}</h6>
                            </TextContainer>
                        </ContainerBox>
                    );
                }
            })}
        </>
    );
}

export default PlaceBox;
