import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

let Button = styled.button`

width: 500px;
height: 500px;

`

function ManageRoute(){

const navi = useNavigate();


return <Button onClick={()=>{navi('/routeview')}}>루트 확인으로 이동하기</Button>



}
export default ManageRoute;