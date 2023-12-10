import styled from 'styled-components';
import { useState } from 'react';

let CityIfBox = styled.div`
    width: 45%;
    height: 200px;
    border: 0;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
    background: #F1F5FF;

    ${(props) =>
        props.isSelected &&
        `
        background-color: #E8F5FF;
    `}

`;

let InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;
let Detail = styled.div`

border-top: 1px solid black;
text-align: left;

`

function CityInfo(props) {

    let c_info = props.info;
    const [selectedIdx, setSelectedIdx] = useState("");

    const handleBoxClick = (idx) => {
        if (selectedIdx === idx) {
            setSelectedIdx(null);
        } else {
            setSelectedIdx(idx); 
        }

        

    };

    return (
        <InfoContainer>
            {c_info.map(function (a, idx) {
                if (props.nation === a.nat) {
                    return (
                        <CityIfBox isSelected={idx === selectedIdx}
                        onClick={() => {handleBoxClick(idx); props.setCity(a.city)}}
                        key={idx}>
                            <h3>{a.city}</h3>
                            <Detail>
                                <h5>{a.place1}</h5>
                                <h5>{a.place2}</h5>
                                <h5>{a.place3}</h5>
                            </Detail>
                        </CityIfBox>
                    );
                }
                return null;
            })}
        </InfoContainer>
    );
}

export default CityInfo;
