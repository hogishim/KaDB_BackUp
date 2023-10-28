import styled from "styled-components";

import HotBlogger from "./HotBlogger";
import HotPost from "./HotPost";
import Map from "./Map";
import Head from "./Head";

const MainDiv = styled.div`
`
const ContentsDiv = styled.div`
    background-color: white;
    border: 1px solid black;
`
function Main() {
    return (
        <MainDiv>
            <Head />
            <ContentsDiv>
                <HotBlogger />
                <Map />
                <HotPost />
            </ContentsDiv>
        </MainDiv>
    )
}
export default Main;