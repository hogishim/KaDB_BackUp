import styled from 'styled-components'
import settingImg from '../Setting/Source/settings.png'
import backimg from './Source/back.png'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

let BackImg = styled.img`

width: 50px;
height: 50px;

&:hover{


transition: all 1s;

}



`

function BackToSet(){

    const navi = useNavigate();
    let [iconimage, setIconImage] = useState(settingImg)

    const mouseOver =()=>{

        setIconImage(backimg)
  
      }
      const mouseOut = () =>{
  
        setIconImage(settingImg)
  
  
      }


    return(
    <BackImg src={iconimage} 
    onClick={()=>{navi("/setting")}}
    onMouseOver={mouseOver} 
    onMouseOut={mouseOut}
    />

    )
}

export default BackToSet;