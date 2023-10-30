import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import FollowComponent from '../FollowComponent';
import data from './TempData';
import { updateTempData } from './TempData';
import img1 from '../Source/search.png';
import img2 from '../Source/close.png';
import bg from '../Source/bgimg2.png'
import HeaderBox from '../HeaderBox'
import MappingBox from '../MappingContainer';

const Container = styled.div`

    background-image: url(${bg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100vw - 7rem);
`;

const FollowerBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 65vh;
    text-align: center;
    background-color: #DCEBFF;
    border: 0;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px grey;
`;

const FollowerComponentContainer = styled.div`
    overflow-y: auto;
    height: 44vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
`;

const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
`;

const SearchBox = styled.div`
    height: 10vh;
    width: 34vw;
    border-radius: 10px;
    align-items: center;
    display: flex;
    background-color: white;
`;

const Img = styled.img`
    height: 2vh;
    margin-left: 10px;
    margin-right: 20px;
`;

const Img2 = styled.img`
    height: 1.5vh;
    margin-left: 10px;
    margin-right: 20px;
    cursor: pointer;
`;

function FollowingPopUp() {
    const [userData, setUserData] = useState([...data]);
    const [search, setSearch] = useState('');

    const handleSearchChange = (searchTerm) => {
        setSearch(searchTerm);
        const filteredData = data.filter(item => item.name.includes(searchTerm));
        setUserData(filteredData);
    };

    const handleBlockUser = (updatedData) => {
        setUserData(updatedData);
        updateTempData(updatedData);
    };

    const handleClearSearch = () => {
        setSearch('');
        setUserData([...data])
    };

    return (
        <>
            <Container>
                <FollowerBox>
                    <MappingBox />
                    <HeaderContainer>
                        <HeaderBox text="팔로잉중인 사용자 리스트"/>
                        <SearchBox>
                            <Img src={img1} />
                            <SearchBar value={search} onChange={handleSearchChange} />
                            <Img2 src={img2} onClick={handleClearSearch} />
                        </SearchBox>
                    </HeaderContainer>
                    <FollowerComponentContainer>
                        <FollowComponent data={userData} colour="#23C9BF"
                            onButtonClick={handleBlockUser} text="언팔로우" />
                    </FollowerComponentContainer>
                </FollowerBox>
            </Container>
        </>
    );
}

export default FollowingPopUp;