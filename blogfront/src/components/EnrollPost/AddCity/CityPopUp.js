import styled from 'styled-components';
import SelectionBox from './SelectionBox';
import SearchBar from './SearchBar';
import CityInfo from './CityInfo';
import { useState } from 'react';
import c_info from './TempCity';

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
    overflow-y: auto;
`;

function CityPopUp() {
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
                <h3>방문도시 추가하기</h3>
                <SelectionBox onNationChange={handleNationChange} />
                <SearchBar onSearchChange={handleSearchBar} search={searchC} />
                {/* CityInfo 컴포넌트에 필터링된 도시 데이터 전달 */}
                <CityInfo info={info} nation={nation} />
            </CityBox>
        </Container>
    );
}

export default CityPopUp;
