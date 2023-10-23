import styled from 'styled-components'

let Btn = styled.button`

padding: 10px;
border-radius: 10px;
background-color: ${(props) => props.color};
border: 0;
flex-grow: 2;
margin: 10px;

`


function Button(props){

return <Btn color={props.color}>{props.text}</Btn>


}
export default Button;