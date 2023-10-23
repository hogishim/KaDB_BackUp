import styled from 'styled-components'
import SelectCity from './SelectCity';
import SelectNation from './SelectNation';
import SearchBar from './SearchBar';
import nation from './TempNation'
import city from './TempCity'
import { useState } from 'react';
import PlaceContainer from './PlaceContainer';
import place from './TempPlace'
import Button from './Button';
import searchim from './Source/search.png'

let Container = styled.div`

    
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

let HeaderBox = styled.div`
    display: flex;
    height: 2.5rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;

`

let SelectionBox = styled.div`

margin-left: 20px;
display: flex;
padding: 7px;

`
let SearchBox = styled.div`

margin-left: 20px;
padding: 7px;

justify-content: center;
align-items: center;

`

let SearchBarContainer = styled.div`
display:flex;
flex-direction: row;
background-color: white;
justify-content: center;
align-items: center;
width: 250px;

`
let Img = styled.img`
margin: 5px;
height: 20px;

`

let BtnContainer = styled.div`

height: 4rem;
border-top: 1px solid black;
display:flex;


`
let EmptyBox = styled.div`

flex-grow: 10;

`

let HR = styled.div`

border-bottom: 1px solid black;

`

function PlacePopUp() {

    let [nat, setNat] = useState('영국')
    let [ct, setCt] = useState('리버풀')
    let [sr, setSr] = useState('')
    let [plc, setPlc] = useState([...place])

    const handleNation = (nation) => {

        setNat(nation)

        const selectedCity = city.find(item => item.n === nation);

        const changedCity = selectedCity ? selectedCity.city : "";

        setCt(changedCity);


    }

    const handleCity = (city) => {

        setCt(city)

    }

    const handleSearch = (searched) => {

        setSr(searched)

        const filteredData = place.filter(item => item.place.includes(searched));
        setPlc(filteredData);

    }


    return (
        <Container>
            <CityBox>

                <HeaderBox>장소 추가하기</HeaderBox>
                <SelectionBox>
                    <SelectNation nation={nation} onNationChange={handleNation} />
                    <SelectCity nation={nat} city={city} onCityChange={handleCity} />
                </SelectionBox>
                <SearchBox>
                    <SearchBarContainer>
                    <SearchBar onSearchChange={handleSearch} />
                    <Img src={searchim} />
                    </SearchBarContainer>
                </SearchBox>
                <HR />
                <PlaceContainer city={ct} place={plc} />
                <BtnContainer>
                    <Button color="#ffd700" text="신규 등록" />
                    <EmptyBox />
                    <Button color="#00ffff" text="선택 완료" />
                </BtnContainer>
            </CityBox>
        </Container>
    );


}
export default PlacePopUp;