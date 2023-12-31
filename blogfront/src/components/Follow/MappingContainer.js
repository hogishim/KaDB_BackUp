import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


let Container = styled.div`

width: 40vw;
height: 5vh;
display: flex;

`
let Container1 = styled.div`

width: 20vw;
height: 5vh;
background-color: #FBF1DF;
border-top-left-radius: 20px;
justify-content: center;
align-items: center;
display: flex;



`
let Container2 = styled.div`

width: 20vw;
height: 5vh;
background-color: #DCEBFF;
border-top-right-radius: 20px;
justify-content: center;
align-items: center;
display: flex;


`

function MappingContainer() {

    //navigator for moving to another page
    const navi = useNavigate();

    return (

        //For each box, it will be mapped to follower or following when pressed
        <Container>
            {/* when clicked, it will be moved to page that will show follower */}
            <Container1 onClick={() => { navi("/follower") }}>팔로워 확인</Container1>
            {/* when clicked, it will be moved to page that will show the following */}
            <Container2 onClick={() => { navi("/following") }}>팔로잉 확인</Container2>

        </Container>

    )
}
export default MappingContainer;