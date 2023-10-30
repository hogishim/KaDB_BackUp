import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 30vw;
    height: 4.5vh;
    border-radius: 6px;
    border: 0;
    outline: none;
`;

function SearchBar({ value, onChange }) {
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        onChange(searchTerm);
    };

    return <Input type="text" placeholder="팔로잉중인 사용자를 검색하세요"
    value={value} onChange={handleSearch} />;
}

export default SearchBar;
