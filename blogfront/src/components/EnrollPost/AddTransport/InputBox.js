import styled from 'styled-components'

let Input = styled.input`

width: 20rem;
height: 3.5vh;
margin-bottom: 1rem;
border: 0px;
border-radius: 10px;
padding-left: 10px;
display: flex;
align-items: center;
justify-content: center;

`


function InputBox(props){

return <Input placeholder={props.text} />

}

export default InputBox;
