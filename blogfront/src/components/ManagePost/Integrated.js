import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/Integrated';

const MainContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #CF6E36;
`;

const Navbar = styled.div`
    background-color : #66B0FF;
    width : 7%;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    align-items : center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;
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

const SectionBox = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px 0;
`;

const PostBoxTitle = styled.div`
  font-size: 15pt;
  font-family: KakaoBold;
  text-decoration: yellow underline;
`;

const PostBackBox = styled.div`
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
`;

const PostBox = styled.div`
  background-color: #CBCBCB;
  display: flex;
  flex-direction: column;
`;

const PostItemTitle = styled.div`
  color: #000000;
  font-size: 12pt;
  font-family: KakaoBold;
`;

const SaveButton = styled.button`
background-color: #FFF500;
color: #000000;
padding: 10px 20px;
`;

const PostItemBox = styled.div`
background-color: #FFFFFF;
padiing: 20px;
`;

const PostItem = styled.div`
  color: #000000;
  font-size: 10pt;
  font-family: KakaoRegular;
`;

const Addphoto = styled.div`
  color: #000000;

  `

const TagButton = styled.button`
  background-color: #1EFFF1;
  color: #000000;
  padding: 10px 20px;
`;

const DetailButton = styled.button`
  background-color: #FFF500;
  color: #000000;
  padding: 10px 20px;
`;

const AddButton = styled.button`
  background-color: #F9B507;
  color: #000000;
  padding: 10px 20px;
`;

function ManagePost() {
  return (
    <MainContainer>
        <NavBar></NavBar>
        <Container>
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
        <SectionHeader>SCHEDULE</SectionHeader>
        <SectionBox>Europe 2019.07.07 ~ 2019.08.13 영국 아일랜드 프랑스 스위스 오스트리아 체코</SectionBox>
        <PostBoxTitle>POST</PostBoxTitle>
            <PostBackBox>
                <PostBox>
                    <PostItemTitle>1일차 인천 - 런던</PostItemTitle>
                    <SaveButton>저장</SaveButton>
                    <PostItemBox>
                        <PostItem>
                            인천 국제 공항 - 비용 12,000원
                            공항으로 가는 길은 언제나 설레요... 저는 항상 출국하는 날에는 설레서 잠을 못이룹니다.
                            비행 3시간 전에 도착을 해야 하기 때문에, 8시에 출발하는 막차를 타고 9시쯤 도착해 체크인을 마쳤습니다.
                            마침내 0시 20분 비행기에 탑승하였고, 0시 55분 비행기는 이륙했습니다!
                        </PostItem>
                        <AddPhoto src = "addphoto.jpg"/>
                    </PostItemBox>
                <TagButton>#태그 추가</TagButton>
                <DetailButton>이동수단 추가</DetailButton>
                <DetailButton>장소 추가</DetailButton>
                </PostBox>
                <AddButton>일정 추가하기</AddButton>
            </PostBackBox>
        </Container>
    </MainContainer>
  );
}

export default ManagePost;
