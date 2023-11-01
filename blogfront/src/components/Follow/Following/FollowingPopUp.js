import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from './TempData';
import { updateTempData } from './TempData';
import bg from '../Source/bgimg2.png'

import HeaderBox from '../HeaderBox'
import MappingBox from '../MappingContainer';
import SearchBox from '../SearchBox';
import FollowComponent from '../FollowComponent';

const Container = styled.div`

    background-image: url(${bg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100vw - 7rem);
`;

const FollowingBox = styled.div`
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

function FollowingPopUp() {

    //following user data
    const [userData, setUserData] = useState([...data]);
    //state for storing search input from the user
    const [search, setSearch] = useState('');

    //to store the searched data right away, use useEffect function
    useEffect(() => {

        //select all data that includes the term "search" in the list. As it shell not
        //affect the original data, make another data string
        const filteredData = data.filter(item => item.name.includes(search));
        //set userData as the ones that contains the letter, filtered from the code above
        setUserData(filteredData);
        
        //on change of the data search
    }, [search]);

    //handleSearch will be called when search data is changed from searchbar
    const handleSearchChange = (searchTerm) => {
        //set search as data recieved from the search bar
        //after this code, useEffect will be ran
        setSearch(searchTerm);
    };

    //function for handling when user blocks anther user
    const handleBlockUser = (updatedData) => {
        //set user data as users except for the one that the user pressed button
        setUserData(updatedData);
        //update data without the user
        updateTempData(updatedData);
    };

    //on clear search, search data will be called, and useEffect will be ran
    const handleClearSearch = () => {
        setSearch('');
    };

    return (
        <>
            {/*the container will take the whole size of the browswer. 
            But, for the width, it will take width except for the width that
            navigation bar would take*/}
            <Container>
                {/* FollowingBox is box that will show the contents of the page */}
                <FollowingBox>
                    {/* Quick menu that user can move from following to follower
                    or follower to following */}
                    <MappingBox />
                    {/* It will show the title of the component and contains search bar */}
                    <HeaderContainer>
                        <HeaderBox text="팔로잉중인 사용자 리스트"/>
                        {/*Gets the container element implemented with the search function.
                         At this time, the prop creates two props to get the value 
                         from the corresponding component. 
                         HandSearch receives the user's search, and onclear explodes 
                         all the existing search contents when the user presses X 
                         to erase the content */}
                        <SearchBox onChange={handleSearchChange} onClear={handleClearSearch} />
                    </HeaderContainer>
                    {/* Will show the list of users that the user is following.*/}
                    <FollowerComponentContainer>
                        {/* As it uses same components as follower component,
                        props for following data, colour of the button, 
                        function for handling block user, and text for the button*/}
                        <FollowComponent data={userData} colour="#23C9BF"
                            onButtonClick={handleBlockUser} text="언팔로우" />
                    </FollowerComponentContainer>
                </FollowingBox>
            </Container>
        </>
    );
}

export default FollowingPopUp;