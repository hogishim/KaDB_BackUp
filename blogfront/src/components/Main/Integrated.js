import styled from "styled-components";

const HeadDiv = styled.div`
`
const ContentsDiv = styled.div`
    background-color: white;
    border: 1px solid black;
`
const HotBloggerDiv = styled.div`
`
const MapDiv = styled.div`
`
const HotPostDiv = styled.div`
`
function Main(){
    <>
        <HeadDiv/>
        <ContentsDiv>
            <HotBloggerDiv/>
            <MapDiv/>
            <HotPostDiv/>
        </ContentsDiv>
    </>
}
export default Main;