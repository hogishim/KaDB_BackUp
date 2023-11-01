import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 30vw;
    height: 4.5vh;
    border-radius: 6px;
    border: 0;
    outline: none;
`;

//as props, it will recieve props for storing search data that will be handed in
//to upper component that called this component
//value will be storing data, and onChange will hand in search data to the upper component
function SearchBar({ value, onChange }) {

    // function for storing input. When input is changed, it will store it into state data
    const handleSearch = (event) => {
        //set search term as current value
        const searchTerm = event.target.value;
        //hand it to upper component
        onChange(searchTerm);
    };

    //inputbox. user will put data into the input and on changed, it will call handlesearch
    //value will be stored
    return <Input type="text" placeholder="사용자를 검색하세요"
    value={value} onChange={handleSearch} />;
}

export default SearchBar;