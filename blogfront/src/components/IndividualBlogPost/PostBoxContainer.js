import styled from 'styled-components'
import data from './TempData'

const PostBox = styled.div`
  margin-top: 20px;
  background-color: #F2F2F2;
  margin-left: 20px;
  border-radius: 10px;
  margin: 20px 20px;
  padding: 10px 10px;
`;

const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  margin: 20px 22px;
`;

const PostItemBox = styled.div`
  background-color: #FFFFFF;
  margin-left: 20px;
  margin-top: 20px;
  margin: 20px 20px;
  border-radius: 10px;
  padding: 10px 10px;
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

const PostItemImage = styled.img`
  width: 200px;
  height: 150px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin: 20px auto;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  margin: 10px 20px;
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



function PostBoxContainer() {

  return (

    data.map(function(a){

      return(
      <PostBox>
      <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
      <PostItemBox>
        <PostItemTitle>{a.place}</PostItemTitle>
        <PostItem>{a.text}</PostItem>
        <PostItemImage src="Incheon.jpg" alt="Incheon" />
      </PostItemBox>
      <SummaryItem>대한항공 / 13시간 소요 / 비용 1,400,000원</SummaryItem>
      <Tags>
        <TagBox>#런던</TagBox>
        <TagBox>#공항</TagBox>
      </Tags>
    </PostBox>


      )

    })







  )



}
export default PostBoxContainer;
