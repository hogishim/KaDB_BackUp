
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

let Btn = styled.button`

    width: 10vw;
  height: 5vh;
  padding: 5px;
  border: 0;
  background-color: snow;
  border-radius: 6px;

  &:hover{

    background-color: #FFF978;
    font-size: 16px;
    transition: all 1s;

  }


`


function Button(){

    let nv = useNavigate();

    return <Btn 
    onClick={()=>{nv('/setting')}}>제출하기</Btn>


}
export default Button;