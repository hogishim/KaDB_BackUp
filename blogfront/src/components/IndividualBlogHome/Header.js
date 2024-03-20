import styled from "styled-components";
import profimg from '../RouteView/temp.jpg'
import { useState } from "react";
import GlobalStyle from '../Fonts/GlobalStyle'

const Container = styled.div`

height: 33vh;
width: 100%;
display: flex;

`;


const TitleBox = styled.div`

height: 33vh;
width: 70%;


`;

const InfoContainer = styled.div`

height: 33vh;
width: 30vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`

const InfoBox = styled.div`

height: 25vh;
width: 17vw;
background-color: #FFDB31;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`

const SiteName = styled.h1`
  font-family: KakaoBold;
  font-size: 50pt;
  color: #faf4c0;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: bold;
  width: calc(100vw - 8rem);
`;

const BlogDescription = styled.div`
  font-size: 12pt;
  font-family: KakaoRegular;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 5px;
  width: calc(100vw - 7rem);
`;

const ProfileBox = styled.div`

width: 17vw;
height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const IntroBox = styled.div`

width: 15vw;
height: 8vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 2vh;

`
const FollowBox = styled.div`

width: 17vw;
height: 7vh;
display: flex;
flex-direction: column;
align-items: center;

`
const ProfileImg = styled.img`

height: 6vh;
width: auto;
border-radius: 50%;

`
const ProfileName = styled.div`

font-size: 2vh;
height: 3vh;

`
const FollowerBox = styled.div`

font-size: 1.5vh;
width: 17vw;
height: 50%;
display: flex;
align-items: center;
justify-content: center;

`
const FollowingBox = styled.div`

font-size: 1.5vh;
width: 17vw;
display: flex;
height: 50%;
align-items: center;
justify-content: center;

`

const ButtonContainer = styled.div`

height: 6vh;
width: 17vw;
display: flex;
justify-content: center;
align-items: center;

`

const FollowButton = styled.button`

background-color: #FFF2B6;
width: 16vw;
height: 4vh;
border: none;
border-radius: 10px;
font-family: "kakao";


`


function Header() {

  const [name, setName] = useState("무당이")
  const [desc, setDesc] = useState("안녕하세요!세계 곳곳을 다니며 글을 쓰고 있는 무한이 입니다!!")
  const [flwing, setFlwing] = useState(1994)
  const [flwer, setFlwer] = useState(2023)

  return (

    <Container>
      <GlobalStyle />
      <TitleBox>
        <SiteName>Trip Again</SiteName>
        <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>
      </TitleBox>
      <InfoContainer>
        <InfoBox>
          <ProfileBox>
            <ProfileImg src={profimg} />
            <ProfileName>
              {name}
            </ProfileName>

          </ProfileBox>

          <IntroBox>
            {desc}
          </IntroBox>

          <FollowBox>
            <FollowingBox>
              팔로잉: {flwing}
            </FollowingBox>
            <FollowerBox>
              팔로워: {flwer}
            </FollowerBox>

          </FollowBox>

        </InfoBox>

        <ButtonContainer>
          <FollowButton>
            팔로우하기
          </FollowButton>
        </ButtonContainer>
        

      </InfoContainer>
    </Container>
  );
}
export default Header;