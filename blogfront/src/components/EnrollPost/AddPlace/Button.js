import { useState } from 'react';
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

    const [click, setClick] = useState(true);

return <Btn color={props.color} onClick={()=>{
    
    setClick(true)
    props.onClickChange(click)


}}>{props.text}</Btn>


}
export default Button;