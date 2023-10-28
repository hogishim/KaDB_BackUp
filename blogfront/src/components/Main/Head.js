import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeadDiv = styled.div`
    text-align : center;
`
const StartBtn = styled.button`
    background-color: #FFDB31;
    border-radius: 5px;
`

function Head(){
    const navigate = useNavigate();
    return(
        <HeadDiv>
            <h1>TRIPLUS</h1>
            <p>TripPlus와 함께 효율적이고 안정적인 여행 플랜을 계획하세요.</p>
            <p>나만의 여행 경험을 모두에게 공유해보세요.</p>
            <StartBtn onClick={()=>navigate('/login')}>START</StartBtn>
        </HeadDiv>
    )
}

export default Head;