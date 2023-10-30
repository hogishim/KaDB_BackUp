import React from 'react';
import styled from 'styled-components';
import AddCity from '../EnrollPost/AddCity/Integrated'
import { useState } from 'react';
import AddPlace from '../EnrollPost/AddPlace/Integrated'
import AddTransport from '../EnrollPost/AddTransport/Integrated'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;
  position: relative;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const CategoryHeader = styled.div`
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

const PostBox = styled.div`
  background-color: #F2F2F2;
  margin-left: 20px;
  margin: 20px 20px;
  margin-top: 30px;
  border-radius: 10px;
  position: relative;
  padding: 10px 20px;
`;

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 20px 20px;
`;

const SaveButton = styled.button`
  background-color: #FBFB49;
  color: #000000;
  border-radius: 50px;
  padding: 10px 20px;
  position: absolute;
  top: 22px;
  right: 40px;
  z-index: 1;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  border: none;
`;

const PostItemBox = styled.div`
  background-color: #FFFFFF;
  margin-left: 20px;
  margin-top: 20px;
  margin: 30px 20px;
  border-radius: 10px;
  padding: 20px 20px;
`;

const PostItemTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 10px 20px;
`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  margin-left: 20px;
  margin: 20px 22px;
`;

const AddImageBox = styled.div`
  border: 1px dashed #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px;
`;

const AddImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  display: block;
  margin: 50px 50px;
  margin-left: auto;
  margin-right: auto;
`;

const Manages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

const TagButton = styled.button`
  background-color: #1EFFF1;
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  position: absolute;
  left: 20px;
  margin-left: 20px;
  border: none;
`;

const ManageButton = styled.button`
  background-color: #FBFB49;
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  margin-left: 10px;
`;

const AddButton = styled.button`
  background-color: #F9B507;
  color: black;
  padding: 20px 30px;
  justify-content: center;
  border-radius: 50px;
  border: none;
  align-items: center;
  margin-bottom: 20px;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
`;

function ManagePost() {

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const closeWindow = (val) => {

    setClick(val)


  }

  const closeWindow2 = (val) => {

    setClick2(val)


  }
  const closeWindow3 = (val) => {

    setClick3(val)

  }

  return (
    <Container>
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
      <ScheduleTitle>SCHEDULE</ScheduleTitle>
      <ScheduleBox>Europe 2019.07.07 ~ 2019.08.13 영국 아일랜드 프랑스 스위스 오스트리아 체코</ScheduleBox>
      <PostTitle>POST</PostTitle>
      <Posts>
        <PostBox>
          <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
          <SaveButton>저장</SaveButton>
          <PostItemBox>

            <PostItem>
              공항으로 가는 길은 언제나 설레요... 저는 항상 출국하는 날에는 설레서 잠을 못이룹니다.
              비행 3시간 전에 도착을 해야 하기 때문에, 8시에 출발하는 막차를 타고 9시쯤 도착해 체크인을 마쳤습니다.
              마침내 0시 20분 비행기에 탑승하였고, 0시 55분 비행기는 이륙했습니다!
            </PostItem>
            <AddImageBox>
              <AddImage src="AddImg.jpg" alt="AddImg" />
            </AddImageBox>
          </PostItemBox>
          <Manages>
            <TagButton>#태그 추가</TagButton>
            <ManageButton onClick={() => {

              setClick3(true)
              setClick(false)
              setClick2(false)

            }}>이동수단 추가</ManageButton>
            <ManageButton onClick={() => {
              setClick2(true)
              setClick(false)
              setClick3(false)
            }}>장소 추가</ManageButton>

          </Manages>
        </PostBox>
        <AddButton onClick={() => {

          setClick(true)
          setClick2(false)
          setClick3(false)

        }}>일정 추가하기</AddButton>
        {click && <AddCity closeWindow={closeWindow} />}
        {click2 && <AddPlace closeWindow2={closeWindow2} />}
        {click3 && <AddTransport closeWindow3={closeWindow3}/>}
      </Posts>
    </Container>
  );
}

export default ManagePost;
