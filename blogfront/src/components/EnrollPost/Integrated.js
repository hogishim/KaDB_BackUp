import React from 'react';
import styled from 'styled-components';


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

const SectionHeader = styled.div`
font-size: 12pt;
font-family: KakaoBold;
color: #FFFFFF;
font-weight: bold;
margin-left: 60px;
margin-top: 25px;
`;

const CategorySelect = styled.select`
  color: #000000;
  background-color: #FFFFFF;
  padding: 5px 10px;
  border: none;
  border-radius: 50px;
  margin: 10px 0;
  margin-left: 20px;
  margin-top: 20px;
  font-family: KakaoRegular;
  font-size: 10pt;
`;

const ScheduleTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 120px;
  margin-top: 30px;
`;

const ScheduleBox = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  padding: 20px 30px;
  border-radius: 50px;
  margin: 20px 10px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  margin-left: 100px;
  margin-right: 100px;
`;

const PostTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 120px;
  margin-top: 20px;
`;

const Posts = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  background-color: #FFFFFF;
  margin: 20px 20px;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 10px;
  align-items: center;
`;

const AddButton = styled.button`
  background-color: #F9B507;
  color: black;
  padding: 20px 30px;
  justify-content: center;
  border-radius: 50px;
  border: none;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
`;

function EnrollPost() {
  return (
      <Container>
        <div>
        <Categories>
        <SectionHeader>CATEGORY</SectionHeader>
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
        <ScheduleTitle>SCHEDULE</ScheduleTitle>
        <ScheduleBox>제목을 입력하세요</ScheduleBox>
        </div>
        <div>
        <PostTitle>POST</PostTitle>
        <Posts>
          <AddButton>일정 추가하기</AddButton>
        </Posts>
        </div>
        </Container>
  );
}

export default EnrollPost;
