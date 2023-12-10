import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const InputDiv = styled.div`
    position: absolute;
    width: 14rem;
    height: 3rem;
    background-color: white;
    left : 4.5rem;
    top : 2rem;
    border-radius: 0 3rem 3rem 3rem;
    border: 1px solid black;
    &::after{
        border-color: white transparent;
        border-style: solid;
        border-width: 2.7rem 0 0 1.4rem;
        border-radius: 0 0 0.8rem 0;
        content: '';
        display: block;
        left:-0.955rem;
        position: absolute;
        top:0;
        z-index: 10;
    }
    &::before{
        border-color : black transparent;
        border-style: solid;
        border-width: 2.8rem 0 0 1.45rem;
        border-radius: 0 0 3rem 0;
        content: '';
        display: block;
        left: -1.07rem;
        position: absolute;
        top:-0.06rem;
        width: 0;
        z-index:9;
    }
`
const InputInput = styled.input`
    position: absolute;
    left : 5%;
    top : 50%;
    width: 80%;
    transform: translate(0,-50%);
    outline: none;
    border: none;
`
function Input (props){
    const navigator = useNavigate()
    const [searchInput,setSearchInput] = useState('')
    const searchHandler=()=>{
        navigator('/bloglist?search='+searchInput)
    }
    const onKeyUpHandler=(e)=>{
        if(e.key === 'Enter'){
            searchHandler();
            props.onKeyDown()
        }
    }

    return(
        <InputDiv>
            <InputInput onKeyDown={(e)=>onKeyUpHandler(e)} onChange={(e)=>setSearchInput(e.target.value)}/>
        </InputDiv>
    )
}

export default Input;