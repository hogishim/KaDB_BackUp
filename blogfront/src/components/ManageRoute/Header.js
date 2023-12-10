import { useState } from 'react';
import styled from 'styled-components'
import GlobalStyle from '../Fonts/GlobalStyle';
import { useNavigate } from 'react-router-dom';

const Head = styled.div`

display: flex;
flex-direction: column;
height: 35vh;
justify-content: center;
align-items: center;
width: 100%;


`

const SiteName = styled.div`
height: 15vh;
width: 90%;
align-items: center;
display: flex;
 font-family: "kakaobold";
 font-size: 11vh;
 color: #FAF4C0;
 margin-left: 2vw;
 font-weight: bold;
`;

const BlogDescription = styled.div`
height: 5vh;
width: 90%;
display: flex;
align-items: center;
  font-size: 2.3vh;
  font-family: "kakao";
  color: #FFFFFF;
  margin-left: 3vw;
`;


const ScheduleTitle = styled.div`
display: flex;
height: 7vh;
width: 20vw;
  font-size: 3vh;
  font-family: "Kakaobold";
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;  
  align-items: center;
  justify-content: start;
`;

const Blank = styled.div`

height: 10vh;
width: 100%;


`

const Copybutton = styled.button`
  width: 8rem;
  height: 5vh;
  background-color: #FFFFFF;
  color: #000000;
  font-family: KakaoBold;
  font-size: 10pt;
  border-radius: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;

`;

const DescriptionBox = styled.div`

display: flex;
width: 70vw;
height: 7vh;
align-items: center;
justify-content: center;
margin-bottom: 7vh;

`

const Space = styled.div`

width: 35vw;



`
const ButtonBox = styled.div`

width: 15vw;
height: 7vh;
display: flex;
justify-content: end;
align-items: center;


`




function Header() {

  const navi = useNavigate();

  const [title, setTitle] = useState("Trip Again")
  const [subtitle, setSubTitle] = useState("좌충우돌 세계일주 여행기")


  return (

    <Head>
      <GlobalStyle />
      <SiteName>{title}</SiteName>
      <BlogDescription>{subtitle}</BlogDescription>
      <Blank></Blank>
      <DescriptionBox>

        <ScheduleTitle>나의 여행 일정</ScheduleTitle>
        <Space></Space>
        <ButtonBox>
          <Copybutton onClick={() => { navi(`/individual`) }}>프로필 페이지로</Copybutton>
        </ButtonBox>
      </DescriptionBox>

    </Head>


  )




}
export default Header;