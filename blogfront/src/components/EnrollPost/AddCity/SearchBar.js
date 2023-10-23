import styled from 'styled-components'
import { useState } from 'react'

let Input = styled.input`

height: 40px;
padding: 5px;
width: 300px;
border-radius: 5px;
border: 0;
outline: none;

`


function SearchBar(props) {

    let [search, setSearch] = useState();

    const handleInput = (e) => {

        const selectedValue = e.target.value;
        setSearch(selectedValue);
        props.onSearchChange(selectedValue);


    }

    return <Input type="text" onChange={handleInput} placeholder='도시를 검색하세요'/>

}
export default SearchBar