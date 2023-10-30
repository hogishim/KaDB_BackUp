import styled from "styled-components"

const InputBoxDiv = styled.div`
    position : relative;
    display : inline-block;
    background-color : rgba(255,255,255,0.3);
    border-radius : 5px;
    padding-left : 0.3rem;
    margin-bottom : 1rem;
`
const InputBoxImg = styled.img`
    transform : translate(0,25%);
    opacity : 0.7;
    width : 1.5rem;
    height : 1.5rem;
`
const InputBoxLabel = styled.label`
    color : rgba(255,255,255,0.7);
    position : absolute;
    left : 10%;
    top : 0.2rem;
    font-size : 0.8rem;
    transform : none;
    transition : all 0.3s;
    pointer-events:none;
`
const InputBoxInput = styled.input`
    margin-left : 0.5rem;
    color : white;
    outline : none;
    width : 24.5rem;
    height : 3.5rem;
    background : none;
    border : none;
    &:placeholder-shown ~ ${InputBoxLabel} {
        top : 50%;
        transform : translate(0,-50%);
        font-size : 1.2rem;
    }
`
function InputBox(props){
    const inputChange = (e)=>{
        props.setValue(e.target.value)
    }
    return(
        <InputBoxDiv>
            <InputBoxImg src={props.src}/>
            <InputBoxInput placeholder=" " type={props.type} onChange={(e)=>inputChange(e)}/>
            <InputBoxLabel>{props.text}</InputBoxLabel>
        </InputBoxDiv>
    )
}

export default InputBox;