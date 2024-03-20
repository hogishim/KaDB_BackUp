import React from "react";
import styled from "styled-components";
import Header from "./Header";
import RouteBox from "./RouteBox";
import img from "../RouteView/Source/backimg.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 8.1rem);
  background-color: #cf6e36;
  align-items: center;
  min-height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center center; 
  background-attachment: fixed;
`;

const Posts = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding-top: 3vh;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
`;


function RouteEdit() {
  return (
    <Container>
      <Header />
      <Posts>
          <RouteBox />
      </Posts>
    </Container>
  );
}

export default RouteEdit;
