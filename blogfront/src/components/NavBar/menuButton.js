import React from 'react'
import styled from 'styled-components'

import Input from './input'

const MenuDiv = styled.div`
    text-align : center;
    color : white;
    margin-top : 1rem;
    position: relative;
`
const MenuImg = styled.img`
    width : 2rem;
    height : 2rem;
`
const MenuText = styled.div`
    font-size : 0.7rem;
`
function MenuButton (props){
    return(
        <MenuDiv onClick={()=>props.onClick()}>
            <MenuImg src={props.src}/>
            <MenuText>{props.text}</MenuText>
        </MenuDiv>
    )
}
export default MenuButton;