import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CF6E36;
`;

const SiteName = styled.h1`
 font-family: KakaoBold;
 font-size: 50pt;
 color: #FAF4C0;
 margin-top: 10px;
 margin-left: 20px;
`;

const BlogDescription = styled.div`
  font-size: 12pt;
  font-family: KakaoRegular;
  color: #FFFFFF;
  margin-left: 20px;
  margin-top: 5px;
`;


const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const ScheduleTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 20px;
  margin-top: 30px;
`;


const ScheduleBox = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  padding: 20px;
  border-radius: 50px;
  margin: 20px 10px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
`;

const Copybutton = styled.button`
  background-color: #FFFFFF;
  color: #000000;
  font-family: KakaoBold;
  font-size: 12pt;
  border-radius: 50px;
  padding: 2opx;
  margin: 20px 10px;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
`;

const Posttitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 20px;
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

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
`;

const PostItemBox = styled.div`
  background-color: #FFFFFF;
  margin-left: 20px;
  border-radius: 10px;
`;

const PostItemTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  margin-left: 20px;
`;

const PostItemImage = styled.img`
  width: 150px;
  height: 100px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
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


function IndividualBlogPost() {
  return (

    <Container>
      <div>
        <div>
          <SiteName>Trip Again</SiteName>
          <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>
        </div>
        <div>

        <ScheduleTitle>SCHEDULE</ScheduleTitle>
        <Schedule>
        <ScheduleBox>Europe 2019.07.07 ~ 2019.08.13 영국 아일랜드 프랑스 스위스 오스트리아 체코</ScheduleBox>
        <Copybutton>일정 복사하기</Copybutton>
        </Schedule>
        </div>
        <div>
        <Posttitle>POST</Posttitle>
        <Posts>
          <PostBox>
            <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
            <PostItemBox>
              <PostItemTitle>인천 국제 공항 - 비용 12,000원</PostItemTitle>
              <PostItem>
              공항으로 가는 길은 언제나 설레요... 저는 항상 출국하는 날에는 설레서 잠을 못이룹니다.
              비행 3시간 전에 도착을 해야 하기 때문에, 8시에 출발하는 막차를 타고 9시쯤 도착해 체크인을 마쳤습니다.
              마침내 0시 20분 비행기에 탑승하였고, 0시 55분 비행기는 이륙했습니다!
              </PostItem>
            <PostItemImage src = "Incheon.jpg" alt = "Incheon" />
            </PostItemBox>
            <SummaryItem>대한항공 / 13시간 소요 / 비용 1,400,000원</SummaryItem>
            <PostItemBox>
              <PostItemTitle>런던 히스로 공항 - 비용 14,000원</PostItemTitle>
              <PostItem>
              우리 비행기는 12시간의 긴 비행 끝에 영국 런던 히스로 국제 공항에 도착했습니다. 우리나라 사람은 자동출입국 심사가 가능해서 바로 들어갈 수 있었어요!
              </PostItem>
            </PostItemBox>
            <Tags>
              <TagBox>#런던</TagBox>
              <TagBox>#공항</TagBox>
            </Tags>
          </PostBox>
        </Posts>
      </div>
      </div>
    </Container>
  );
};

export default IndividualBlogPost;