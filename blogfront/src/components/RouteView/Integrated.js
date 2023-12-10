import React from "react";
import styled from "styled-components";
import Header from "./Header";
import RouteBox from "./RouteBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 8.1rem);
  background-color: #cf6e36;
  align-items: center;
  min-height: 100vh;
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


function RouteView() {
  return (
    <Container>
      <Header />
      <Posts>
          <RouteBox />
      </Posts>
    </Container>
  );
}

export default RouteView;
