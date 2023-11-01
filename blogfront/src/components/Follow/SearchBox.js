import styled from 'styled-components'
import img1 from './Source/search.png';
import img2 from './Source/close.png';
import SearchBar from './SearchBar';
import { useState } from 'react';

const SearchContainer = styled.div`
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


function SearchBox(props) {

    // state to store searched data
    const [search, setSearch] = useState('');

    // when clear button is pressed, input search data will be cleared
    //it will be sent to component that called this componenet
    const handleClearSearch = () => {

        //clear searched data
        setSearch("");
        props.onClear();

    };

    //handle search change. Get input data that user input
    //it will be sent to component that called this component
    const handleSearchChange = (val) => {

        //set search value as data that user input
        setSearch(val)
        props.onChange(val)
        

    }

    return (

        //search bar container
        <SearchContainer>
            {/* image are icons that will be shown inside search bar */}
            <Img src={img1} />
            {/* area that user will actually put data */}
            <SearchBar value={search} onChange={handleSearchChange} />
            <Img2 src={img2} onClick={handleClearSearch} />
            
        </SearchContainer>

    )

}

export default SearchBox;