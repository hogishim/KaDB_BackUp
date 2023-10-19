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

    const handleNation = (nation)=>{

        setNat(nation)
        

    }

    return (
        <Container>
            <CityBox>
                <h3>장소 추가하기</h3>
                <SelectNation nation={nation} onNationChange={handleNation}/>
                <SelectCity nation={nat} city={city}/>
                <SearchBar />
                <PlaceContainer />
            </CityBox>
        </Container>
    );


}
export default PlacePopUp;