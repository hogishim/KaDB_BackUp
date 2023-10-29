import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/Integrated';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const CategoryHeader = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  color: #FFFFFF;
`;

const CategorySelect = styled.select`
  width: 100%;
  color: #000000;
  background-color: #FFFFFF;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
`;

const SectionHeader = styled.div`
  font-size: 15pt;
  font-family: KakaoBold;
  text-decoration: yellow underline;
`;

const Box = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px 0;
`;

const AddButton = styled.button`
  background-color: #F9B507;
  color: black;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
`;

function EnrollPost() {
  return (
  
  <Container>
        <div>
        <Categories>
        <CategoryHeader>CATEGORY</CategoryHeader>
        <CategorySelect>
          <option>국내여행</option>
          <option>유럽여행</option>
          <option>아시아여행</option>
          <option>아메리카여행</option>
          <option>아프리카여행</option>
          <option>오스트리아여행</option>
          <option>남/북극여행</option>
        </CategorySelect>
        </Categories>
        </div>
        <div>
        <SectionHeader>SCHEDULE</SectionHeader>
        <Box>제목을 입력하세요</Box>
        </div>
        <div>
        <SectionHeader>POST</SectionHeader>
        <Box>
          <AddButton>일정 추가하기</AddButton>
        </Box>
        </div>
    </Container>
  );
}

export default EnrollPost;
