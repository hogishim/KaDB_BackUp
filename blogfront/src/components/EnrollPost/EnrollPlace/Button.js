import { useState } from 'react';
import styled from 'styled-components'

let Btn = styled.button`

padding: 10px;
border-radius: 10px;
background-color: #567ace;
border: 0;
flex-grow: 2;
margin: 10px;

`


function Button(props){

    const val = false;

    

return <Btn onClick = {()=>{props.onClickChange = val}}>등록하기</Btn>


}
export default Button;