import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import FollowingComponent from './FollowingComponent';
import data from './TempData';
import { updateTempData } from './TempData';
import img1 from './Source/search.png';
import img2 from './Source/close.png';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const FollowerBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 60vh;
    text-align: center;
    background-color: #FBF1DF;
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
                    <HeaderContainer>
                        <h3>팔로잉중 사용자 리스트</h3>
                        <SearchBox>
                            <Img src={img1} />
                            <SearchBar value={search} onChange={handleSearchChange} />
                            <Img2 src={img2} onClick={handleClearSearch} />
                        </SearchBox>
                    </HeaderContainer>
                    <FollowerComponentContainer>
                        <FollowingComponent data={userData} onButtonClick={handleBlockUser} />
                    </FollowerComponentContainer>
                </FollowerBox>
            </Container>
        </>
    );
}

export default FollowingPopUp;