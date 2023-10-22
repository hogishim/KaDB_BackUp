import styled from 'styled-components'

let Search = styled.input`





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