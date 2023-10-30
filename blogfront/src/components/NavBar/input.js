import styled from "styled-components"

const InputDiv = styled.div`
    position: absolute;
    width: 15rem;
    height: 3rem;
    background-color: white;
    left : 3.5rem;
    top : 2rem;
    clip-path: polygon(100% 0, 100% 100%, 15% 100%, 15% 50%, 0 0);
    border-radius: 30px;
    border: 1px solid black;
`
const InputInput = styled.input`
    position: absolute;
    left : 15%;
    outline: none;
`

function Input (){
    return(
        <InputDiv>
            <InputInput/>
        </InputDiv>
    )
}

export default Input;