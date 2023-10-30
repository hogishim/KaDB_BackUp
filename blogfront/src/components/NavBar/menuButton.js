import React from 'react'
import styled from 'styled-components'

const MenuDiv = styled.div`
    text-align : center;
    color : white;
    margin-top : 1rem;
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
        <MenuDiv onClick={(e)=>{
                props.onClick()
            }}>
            <MenuImg src={props.src}/>
            <MenuText>{props.text}</MenuText>
        </MenuDiv>
    )
}
export default MenuButton;