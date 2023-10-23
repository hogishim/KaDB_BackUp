import styled from 'styled-components'

let InputBx = styled.input`

    width: 10rem;
    padding: 10px;
    margin-bottom: 15px;
    border: 0;


`

function InputBox(props){


return <InputBx placeholder = {props.hintText}/>



}
export default InputBox;