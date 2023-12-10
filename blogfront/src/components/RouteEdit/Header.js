import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import GlobalStyle from '../Fonts/GlobalStyle';

const Container = styled.div`

display: flex;
flex-direction: column;
height: 40vh;
width: 90%;
align-items: center;
box-sizing: border-box;

`

const SiteName = styled.div`
  height: 15vh;
  width: 100%;
  align-items: start;
  display: flex;
  font-family: "kakaobold";
  font-size: 11vh;
  color: #FAF4C0;
  margin-left: 2vw;
  font-weight: bold;
  box-sizing: border-box;
`;

const BlogDescription = styled.div`
height: 5vh;
width: 100%;
display: flex; 
align-items: center;
  font-size: 2.3vh;
  font-family: "kakao";
  color: #FFFFFF;
  margin-left: 3vw;
`;


const ScheduleTitle = styled.div`
  height: 5vh;
  width: 70vw;
  font-size: 12pt;
  font-family: "kakaobold";
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;

`;



const Schedule = styled.div`
height: 10vh;
width: 70vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;



const ScheduleBox = styled.div`
  background-color: #FFFFFF;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  color: #000000;
  border-radius: 50px;
  font-family: "kakaobold";
  font-size: 10pt;
  font-weight: bold;
`;

const ChangeTitle = styled.textarea`

resize: none;
border: none;
outline: none;
height: 5vh;
width: 35vw;
display: flex;
text-align: center;
font-family: "kakao";
font-size: 2vh;


`


const Copybutton = styled.button`
  width: 7rem;
  height: 5vh;
  background-color: #FFFFFF;
  color: #000000;
  font-family: "kakaobold";
  font-size: 10pt;
  border-radius: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;

`;

const EmptyBox = styled.div`

width: calc(40vw - 20rem);


`
const BtnBox = styled.div`

display: flex;
align-items: right;
justify-content: end;
align-items: center;
width: 9rem;
height: 7vh


`



function Header() {

  const [date, setDate] = useState('2019.07.07 ~ 2019.08.13');
  const [title, setTitle] = useState('나의 첫 유럽 6개국 여행')

  const navi = useNavigate();

  return (

    <Container>

        <GlobalStyle />
        <SiteName>Trip Again</SiteName>
        <BlogDescription>좌충우돌 세계일주 여행기</BlogDescription>
      
        <ScheduleTitle>{date}</ScheduleTitle>
        <Schedule>
          <ScheduleBox><ChangeTitle>{title}</ChangeTitle></ScheduleBox>
          <EmptyBox></EmptyBox>
          <BtnBox>
            <Copybutton onClick={() => { navi(`/manageroute`) }}>수정 완료</Copybutton>
          </BtnBox>

        </Schedule>
      
    </Container>

  )



}
export default Header; 