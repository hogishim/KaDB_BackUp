import styled from "styled-components";

import user from "./user.png"

import HotBlogger from "./HotBlogger";
import HotPost from "./HotPost";
import Map from "./Map";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
    width: 50rem;
`
const ContentsDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    padding: 1rem;
`
function Main() {

    const navi = useNavigate();

    const hotbloggers = [
        {
            img : user,
            name : 'Lion_Trip',
            followers : 33000,
        },
        {
            img : user,
            name : 'choonsigi',
            followers : 28000,
        },
        {
            img : user,
            name : 'tough_Cookie',
            followers : 18000,
        },
    ]
    const hotposts = [
        {
        }
    ]
    return (
        <MainDiv>
            <Head/>
            <ContentsDiv>
                <HotBlogger hotbloggers={hotbloggers} onClick={()=>{navi('/bloghome')}}/>
                <Map />
                <HotPost />
            </ContentsDiv>
        </MainDiv>
    )
}
export default Main;