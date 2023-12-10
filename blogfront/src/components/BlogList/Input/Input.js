import styled from "styled-components";

import searchIcon from "./searchIcon.png";
import deleteIcon from "./deleteIcon.png";
import { useEffect, useState } from "react";

const InputBarDiv = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    border-radius : 5px;
    height : 3rem;
    width : 30rem;
    background-color:white;
`

const InputBar = styled.input`
    flex-grow:1;
    outline : none;
    border : none;
    caret-color:#66B0FF;
    caret-shape : block;
    width : 70%;
`

const Icons = styled.img`
    width : 1rem;
    height : 1rem;
`
const SearchIcon = styled(Icons)`
    margin-left : 1rem;
    margin-right : 0.5rem;
`
const DeleteIcon = styled(Icons)`
    margin-right : 1rem;
`

function Input(props){
    const [inputData,setInputData] = useState(props.searchValue)
    const delHandler = ()=>{
        console.log(inputData)
        setInputData('')
    }
    useEffect(()=>{
        setInputData(props.searchValue)
    },[props.searchValue])
    return(
        <InputBarDiv>
            <SearchIcon src={searchIcon}/>
            <InputBar 
                type="text" 
                value={inputData} 
                placeholder="가고 싶은 여행지를 검색해보세요! ex) 서울, 뉴욕, 도쿄"
                onChange={(e)=>setInputData(e.target.value)}
            />
            <DeleteIcon src={deleteIcon} onClick={()=>delHandler()}/>
        </InputBarDiv>
    )
}

export default Input;