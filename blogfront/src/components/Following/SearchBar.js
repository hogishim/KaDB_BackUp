import './Styles/Styles.css'
import styled from 'styled-components'

let SearchBar = styled.input`

width: 80%;
padding: 10px;
border-radius: 6px;

`



function searchBar({onSearchChange}){

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        onSearchChange(searchTerm);
    };


return(




    <>
    
    <SearchBar type="text" placeholder="팔로잉중인 사용자 검색" onChange={handleSearch}/>
    
    
    </>


)


}
export default searchBar;