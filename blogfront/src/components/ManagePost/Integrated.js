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

const CategoryHeader = styled.div`
font-size: 12pt;
font-family: KakaoBold;
color: #FFFFFF;
font-weight: bold;
margin-left: 20px;
margin-top: 10px;
`;

const CategorySelect = styled.select`
  width: 100%;
  color: #000000;
  background-color: #FFFFFF;
  padding: 5px;
  border: none;
  border-radius: 50px;
  margin: 10px 0;
  margin-left: 20px;
  margin-top: 10px;
`;

const SectionHeader = styled.div`
font-size: 12pt;
font-family: KakaoBold;
color: #FFFFFF;
font-weight: bold;
text-decoration: 2px yellow underline;
margin-left: 20px;
margin-top: 10px;
`;

const SectionBox = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  margin: 10px 0;
  border-radius: 50px;
`;

const Posts = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  background-color: #FFFFFF;
  margin-left: 20px;
  border-radius: 10px;
  align-items: center;
`;

const PostBox = styled.div`
  margin-top: 10px;
  background-color: #F2F2F2;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
`;

const SaveButton = styled.button`
background-color: #FBFB49;
color: #000000;
font-family: KakaoRegular;
font-size: 10pt;
padding: 10px 20px;
border-radius: 50px;
margin-left: 1000px;
`;

const PostItemBox = styled.div`
background-color: #FFFFFF;
padiing: 20px;
`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  margin-left: 20px;
`;

const AddImageBox = styled.div`
  border: 1px dashed #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
`;

const TagBox = styled.div`
  background-color: #1EFFF1;
  color: #000000;
  font-family: KakaoRegular;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: 10px;
`;

const Manages  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
`;

const ManageButton = styled.div`
  background-color: #FBFB49;
  color: #000000;
  font-family: KakaoRegular;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: 10px;
`;

const AddButton = styled.button`
  background-color: #F9B507;
  color: black;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
`;
let PostItemTitle = styled.div`

`

function ManagePost() {
  return (
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
            <Posts>
                <PostBox>
                  <Titles>
                    <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
                    <SaveButton>저장</SaveButton>
                    </Titles>
                    <PostItemBox>
                      <PostItemTitle>인천 국제 공항 - 비용 12,000원</PostItemTitle>
                        <PostItem>
                            공항으로 가는 길은 언제나 설레요... 저는 항상 출국하는 날에는 설레서 잠을 못이룹니다.
                            비행 3시간 전에 도착을 해야 하기 때문에, 8시에 출발하는 막차를 타고 9시쯤 도착해 체크인을 마쳤습니다.
                            마침내 0시 20분 비행기에 탑승하였고, 0시 55분 비행기는 이륙했습니다!
                        </PostItem>
                        <AddImageBox>
                          <AddImage src="AddImg.jpg" alt = "AddImg" />
                        </AddImageBox>
                    </PostItemBox>
                <Manages>
                <TagBox>#태그 추가</TagBox>
                <ManageButton>이동수단 추가</ManageButton>
                <ManageButton>장소 추가</ManageButton>
                </Manages>
                </PostBox>
                <AddButton>일정 추가하기</AddButton>
              </Posts>
    </Container>
  );
}

export default ManagePost;
