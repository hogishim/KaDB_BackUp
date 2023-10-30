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
 font-weight: bold;
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
  margin-left: 120px;
  margin-top: 30px;
`;


const ScheduleBox = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  padding: 20px 100px;
  border-radius: 50px;
  margin: 20px 10px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  margin-left: 80px;
`;

const Enrollbutton = styled.button`
  background-color: #FFFFFF;
  color: #000000;
  font-family: KakaoBold;
  font-size: 10pt;
  border-radius: 50px;
  padding: 20px 40px;
  margin: 20px 10px;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
  position: absolute;
  right: 100px;
`;

const Posts = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  background-color: #FFFFFF;
  margin-left: 100px;
  margin-right: 100px;
  margin: 20px 100px;
  border-radius: 10px;
`;

const PostBox = styled.div`
  margin-top: 30px;
  background-color: #F2F2F2;
  margin-left: 20px;
  margin: 20px 20px;
  border-radius: 10px;
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

const PostItemBox = styled.div`
  background-color: #FFFFFF;
  margin-left: 20px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 20px 20px;
  margin: 30px 20px;
`;

const ManageButton = styled.button`
  background-color: #FDE8C4;
  color: #000000;
  padding: 5px 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  font-family: KakaoRegular;
  font-size: 9pt;
  border: none;
`;

const PostItemimage = styled.img`
  width: 100px;
  height: 60px;
  margin-top: 20px;
  margin-left: 20px;
`;

const PostItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;

const PostItemTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
`;

const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 9pt;
  color: #000000;
  margin-left: 25px;
  margin-top: 10px;
`;

const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 10pt;
  color: #000000;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 20px;
  `;

const AddButton = styled.button`
  background-color: #C6FF8C;
  color: black;
  padding: 10px 22px;
  align-items: center;
  margin-top: 40px;
  border-radius: 50px;
  margin: 20px auto;
  display: block;
  border: none;
`;

  function RouteEdit() {
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
            <Enrollbutton>일정 등록</Enrollbutton>
          </Schedule>
          </div>

          <Posts>
            <PostBox>
                <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
                <PostItemBox>
                    <PostItemimage src="Incheon.jpg" alt = "Incheon"/>
                    <PostItems>
                        <PostItemTitle>인천 국제 공항</PostItemTitle>
                        <PostItem>여행 가기 전, 필수로 거쳐야 하는 관문</PostItem>
                        <SummaryItem>대한항공 / 13시간 소요 / 예상비용: 1,400,000원</SummaryItem>
                        <ManageButton>수정</ManageButton>
                    </PostItems>
                </PostItemBox>
                <PostItemBox>
                    <PostItemimage src="Hisro.jpg" alt = "Hisro"/>
                    <PostItems>
                        <PostItemTitle>런던 히스로 공항</PostItemTitle>
                        <PostItem>런던의 관문 공항. 시내까지 약 50분 소요</PostItem>
                        <SummaryItem>히스로 익스프레스 / 20분 소요 / 예상비용: 14,000원</SummaryItem>
                        <ManageButton>수정</ManageButton>                    
                    </PostItems>
                </PostItemBox>
                <PostItemBox>
                    <PostItemimage src="Hotel.jpg" alt = "Hotel"/>
                    <PostItems>
                        <PostItemTitle>그랜드 하얏트 호텔</PostItemTitle>
                        <PostItem>런던에서 가장 비싸고 유명한 호텔</PostItem>
                        <SummaryItem>예상비용: 14,000원</SummaryItem>
                        <ManageButton>수정</ManageButton>
                    </PostItems>
                </PostItemBox>
                <PostBoxTitle>2일차 런던</PostBoxTitle>
                <AddButton>일정 추가하기</AddButton>
            </PostBox>
          </Posts>
        </div>
    </Container>
      );
    }
    
    export default RouteEdit;

