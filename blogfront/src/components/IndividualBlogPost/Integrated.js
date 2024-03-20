import React, { useState } from "react";
import styled from "styled-components";
import CommentBoxContainer from "./CommentBoxContainer";
import PostBoxContainer from "./PostBoxContainer";
import TitleBoxContainer from "./TitleBoxContainer";
import InfoContainer from "./InfoContainer";
import img from '../RouteView/Source/backimg.png'
import data from './TempData'

const Container = styled.div`
  width: calc(100vw - 8.1rem);
  display: flex;
  flex-direction: column;
  background-image: url(${img});
  background-size: cover;
  background-position: center center; 
  background-attachment: fixed;
  min-height: 100vh;
`;

const SiteName = styled.h1`
  font-family: KakaoBold;
  font-size: 50pt;
  color: #faf4c0;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: bold;
`;

const BlogDescription = styled.div`
  font-size: 12pt;
  font-family: KakaoRegular;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 5px;
`;

const Posts = styled.div`
  width: 75vw;
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;

`;

const CommentBox = styled.div`
  width: 75vw;
  background-color: #fef0f9;
  border-radius: 10px;
  margin: 10px 20px;
  margin-left: 100px;
  margin-right: 100px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => props.visibility};
`;

const CommentContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;



`



function IndividualBlogPost() {
  const [visbility, setVisibility] = useState("visible");

  const changeVisbility = (value) => {
    setVisibility(value);
  };

  return (
    <Container>
      <SiteName>Trip Again</SiteName>
      <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>


        <TitleBoxContainer title={data.title} category={data.category}/>

        <ContentContainer>
        
        <Posts>
          <PostBoxContainer data = {data.schedule} />
        </Posts>

        <InfoContainer changeVisbility={changeVisbility} />

        <CommentBox visibility={visbility}>
          <CommentContainer>
            <CommentBoxContainer />
          </CommentContainer>
        </CommentBox>
      </ContentContainer>
    </Container>
  );
}

export default IndividualBlogPost;
