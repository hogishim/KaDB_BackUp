import styled from 'styled-components'

let Search = styled.input`

height: 30px;
padding: 5px;
width: 200px;
border-radius: 5px;
border: 0;
background-color: white;
outline: none;

`



function SearchBar({onSearchChange}){


    const handleSearch = (e) =>{

        const searched = e.target.value;
        onSearchChange(searched)

    }

    return(
    <Search placeholder="장소를 검색하세요" onChange={handleSearch}/>
    )


}
export default SearchBar;