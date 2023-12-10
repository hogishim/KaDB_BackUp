import React from 'react';
import styled from 'styled-components';
import CategoryBlog from './CategoryBlog';
import PopularBlog from './PopularBlog';
import Header from './Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;

  overflow-x: hidden;
  width: calc(100vw - 8.1rem);
`;







function IndividualBlogHome() {



  return (

    <Container>


      <Header />

      <CategoryBlog />
  
      <PopularBlog />


    </Container>

  );
};

export default IndividualBlogHome;