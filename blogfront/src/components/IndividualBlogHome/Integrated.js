import React from "react";
import styled from "styled-components";
import CategoryBlog from "./CategoryBlog";
import PopularBlog from "./PopularBlog";
import Header from "./Header";
import img from "../RouteView/Source/backimg.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  overflow-x: hidden;
  width: calc(100vw - 8.3rem);
`;

function IndividualBlogHome() {
  return (
    <Container>
      <Header />
      <CategoryBlog />
      <PopularBlog />
    </Container>
  );
}

export default IndividualBlogHome;
