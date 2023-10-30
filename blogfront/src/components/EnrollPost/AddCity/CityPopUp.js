import styled from 'styled-components';
import SelectionBox from './SelectionBox';
import SearchBar from './SearchBar';
import CityInfo from './CityInfo';
import { useState } from 'react';
import c_info from './TempCity';
import Button from './Button'
import img from './Source/search.png'

let Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    position: absolute;
    top: 0;
    left: 20;
`;

let CityBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 45rem;
    height: 60vh;
    text-align: center;
    background-color: lavenderblush;
    border: 0;
    border-radius: 20px;
    
    box-shadow: 5px 5px 5px 5px grey;
`;

let CityContainer = styled.div`

height: 40vh;
overflow-y: auto;
background-color: 	#F9FFFF;
`

let HR = styled.div`

border-bottom: 1px solid black;

`

let HeaderBox = styled.div`
    display: flex;
    height: 2.5rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;

`
let SelectionContainer = styled.div`

padding-left: 15px;
padding-bottom: 15px;
display: flex;


`

let Img = styled.img`

height: 30px;

`
let SearchContainer = styled.div`

width: 250px;
display: flex;
background-color: white;
justify-content: center;
align-items: center;

`

function CityPopUp(props) {
    const [nation, setNation] = useState('영국');
    const [searchC, setSearchC] = useState('');
    const [info, setInfo] = useState([...c_info]);

    const handleNationChange = (nat) => {
        setNation(nat);
    };

    const handleSearchBar = (search) => {
        setSearchC(search);

        const filteredData = c_info.filter(item => item.city.includes(search));

        setInfo(filteredData);
    };

    return (
        <Container>
            <CityBox>
                <HeaderBox>도시 추가하기</HeaderBox>
                <SelectionContainer>
                    <SelectionBox onNationChange={handleNationChange} />
                    <SearchContainer>
                        <SearchBar onSearchChange={handleSearchBar} search={searchC} />
                        <Img src={img} />
                    </SearchContainer>
                </SelectionContainer>
                <HR />
                <CityContainer>
                    <CityInfo info={info} nation={nation} />
                </CityContainer>
                <HR />
                <Button colour="#ffa0af" text="제출하기" closeWindow={props.closeWindow}/>
            </CityBox>
        </Container>
    );
}

export default CityPopUp;