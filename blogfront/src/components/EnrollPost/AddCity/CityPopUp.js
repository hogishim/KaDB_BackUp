import styled from 'styled-components';
import SelectionBox from './SelectionBox';
import SearchBar from './SearchBar';
import CityInfo from './CityInfo';
import { useState } from 'react';
import c_info from './TempCity';
import Button from './Button'
import img from './Source/search.png'
import HeaderContainer from '../HeaderContainer';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 20;
`;

const CityBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 70vh;
    text-align: center;
    background-color: lavenderblush;
    border: 0;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px grey;
`;

const CityContainer = styled.div`

height: 45vh;
overflow-y: auto;
background-color: 	#F9FFFF;
`

const HR = styled.div`

border-bottom: 1px solid black;

`

const SelectionContainer = styled.div`

padding-left: 15px;
padding-bottom: 15px;
display: flex;


`

const Img = styled.img`

height: 30px;

`
const SearchContainer = styled.div`

width: 250px;
display: flex;
background-color: white;
justify-content: center;
align-items: center;

`
const ButtonContainer = styled.div`

height: 10vh
width: 50vw;
display: flex;
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
                <HeaderContainer text="도시 추가하기"closeWindow={props.closeWindow}/>
                <SelectionContainer>
                    <SelectionBox onNationChange={handleNationChange} />
                    <SearchContainer>
                        <SearchBar onSearchChange={handleSearchBar} search={searchC} />
                        <Img src={img} />
                    </SearchContainer>
                </SelectionContainer>
                <HR />
                <CityContainer>
                    <CityInfo info={info} nation={nation} setCity = {props.setCity} />
                </CityContainer>
                <HR />
                <ButtonContainer>
                <Button colour="#ffa0af" text="제출하기" closeWindow={props.closeWindow} addContainer={props.addContainer}/>
                </ButtonContainer>
            </CityBox>
        </Container>
    );
}

export default CityPopUp;