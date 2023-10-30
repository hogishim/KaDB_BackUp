import React, { useState } from 'react';
import styled from 'styled-components';
import air from './Source/plane.png';
import bot from './Source/boat.png';
import cbl from './Source/cablecar.png';
import trn from './Source/train.png';
import ebs from './Source/ebus.png';
import und from './Source/underground.png';
import bus from './Source/bus.png';
import trm from './Source/tram.png';
import cab from './Source/taxi.png';
import wlk from './Source/walk.png';

let TransportBox = styled.div`
  width: 7rem;
  height: 10vh;
  background-color: ${(props) => (props.selected ? '#F4B6D9' : 'snow')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

let Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

let Container = styled.div`
  display: flex;
  flex-wrap: wrap;  
  justify-content: center;  
`;

function ImageButton() {
  const t_list = [
    { name: "비행기", img: air },
    { name: "배", img: bot },
    { name: "케이블카", img: cbl },
    { name: "기차", img: trn },
    { name: "고속버스", img: ebs },
    { name: "지하철", img: und },
    { name: "시내버스", img: bus },
    { name: "트램", img: trm },
    { name: "택시", img: cab },
    { name: "도보", img: wlk },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <Container>
      {t_list.map(function (a, index) {
        return (
          <TransportBox
            key={index}
            selected={index === selectedItem}
            onClick={() => handleItemClick(index)}
          >
            <Image src={a.img} />
            {a.name}
          </TransportBox>
        );
      })}
    </Container>
  );
}

export default ImageButton;
