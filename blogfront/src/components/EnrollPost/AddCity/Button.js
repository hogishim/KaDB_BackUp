import styled from 'styled-components'

let Btn = styled.button`

padding: 10px;
border-radius: 10px;
width: 150px;
background-color: ${(props) => props.colour};
border: 0;
margin: 10px;

`


function Button(props){

return <Btn colour={props.colour}>{props.text}</Btn>


}
export default Button;