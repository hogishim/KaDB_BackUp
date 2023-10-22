import styled from 'styled-components'
import SelectCity from './SelectCity';
import SelectNation from './SelectNation';
import SearchBar from './SearchBar';
import nation from './TempNation'
import city from './TempCity'
import { useState } from 'react';
import PlaceContainer from './PlaceContainer';

let Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

let CityBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 60vh;
    text-align: center;
    background-color: #567ace;
    border: 0;
    border-radius: 20px;
   
`;


function PlacePopUp(){

    let [nat, setNat] = useState('영국')
    let [ct, setCt] = useState('리버풀')
    let [sr, setSr] = useState('')

    const handleNation = (nation)=>{

        setNat(nation)
        setCt("")
        

    }

    const handleCity = (city) =>{

        setCt(city)

    }

    const handleSearch = (searched) => {

        setSr(searched)
        console.log(searched)

    }


    return (
        <Container>
            <CityBox>
                <h3>장소 추가하기</h3>
                <SelectNation nation={nation} onNationChange={handleNation}/>
                <SelectCity nation={nat} city={city} onCityChange={handleCity}/>
                <SearchBar onSearchChange={handleSearch}/>
                <PlaceContainer city={ct}/>
            </CityBox>
        </Container>
    );


}
export default PlacePopUp;