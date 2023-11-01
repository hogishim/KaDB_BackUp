import React, { useState } from 'react';
import styled from 'styled-components';

import AddSchedule from './AddSchedule';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;
  height: 100%;
`;

const Categories = styled.div`
  display: flex;
  margin-top : 1.5rem;
  margin-left : 4rem;
`;

const SectionHeader = styled.div`
font-size: 12pt;
font-family: KakaoBold;
color: #FFFFFF;
`;

const CategorySelect = styled.select`
  border: none;
  border-radius: 50px;
  font-family: KakaoRegular;
  font-size: 10pt;
  margin-left : 1rem;
`;

const ScheduleTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  text-decoration: 2px yellow underline;
  margin-left: 5rem;
  margin-top: 2rem;
`;

const ScheduleBox = styled.div`
  margin : 1rem 4rem;
  padding: 1rem 1rem;
  background-color: #FFFFFF;
  border-radius: 50px;
  font-family: KakaoBold;
  font-size: 10pt;
`;

const PostTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  text-decoration: 2px yellow underline;
  margin-left: 5rem;
  margin-top : 2rem;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  margin : 1rem 4rem;
  padding : 1rem;
  border-radius: 10px;
`;

const AddButton = styled.button`
  width: 30%;
  height: 3rem;
  background-color: #F9B507;
  border-radius: 50px;
  border: none;
  align-items: center;
  font-family: KakaoBold;
  font-size: 10pt;
`
const SaveButton = styled.button`
  background-color: #FBFB49;
  border-radius: 50px;
  padding: 10px 20px;
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-family: KakaoBold;
  font-size: 10pt;
  border: none;
`;

const categoryList = [
  '국내여행', '유럽여행', '아시아여행', '아메리카여행', '아프리카여행', '오스트리아여행', '남/북극여행'
]
function EnrollPost() {
  const [addlist,setAddlist] = useState([])
  const addFunction = ()=>{
    let tmp = [...addlist]
    tmp.push({
      place : '',
      text : '',
      tag : '',
      img : '',
    })
    setAddlist(tmp)
  }
  const delFunction = (i)=>{
    let tmp = [...addlist]
    tmp.splice(i,1)
    setAddlist(tmp)
  }
  return (
    <Container>
      <SaveButton>저장</SaveButton>
      <div>
        <Categories>
          <SectionHeader>CATEGORY</SectionHeader>
          <CategorySelect>
            {
              categoryList.map((list, id) => <option key={id}>{list}</option>)
            }
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
          {
            addlist&&addlist.map((list,id)=><AddSchedule key={id} id={id} list={list} delete={delFunction}/>)
          }
          <AddButton onClick={()=>addFunction()}>일정 추가하기</AddButton>
        </Posts>
      </div>
    </Container>
  );
}

export default EnrollPost;
