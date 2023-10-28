import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

let Button = styled.button`

padding: 10px;
  margin-top: 3%;
  width: 15vw;
  border: 0px;
  border-radius: 5px;
  background-color: #0A6EFF;
  color: snow;

`

function SubBtn(){

    let navi = useNavigate();

    return <Button
    onClick={()=>{navi("/setting  ")}}>제출하기</Button>


}

export default SubBtn;