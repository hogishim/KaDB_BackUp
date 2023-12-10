import styled from 'styled-components'

const Container = styled.div`

width: 100%;
height: 20vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`


const ScheduleTitle = styled.div`
width: 75vw;
  font-size: 12pt;
  font-family: KakaoBold;
  color: #ffffff;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 7vh;
 
  
`;

const ScheduleBox = styled.div`
  background-color: #ffffff;
  color: #000000;
  height: 7vh;
  border-radius: 50px;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostItem = styled.textarea`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  width: 55vw;
  border: none;
  height: 5vh;
  outline: none;
  resize: none;
`;


function TitleBox(){

  const title = "2019.07.12 ~ 2019.08.13 유럽 5주 여행기"

    return(
    <Container>
    <ScheduleTitle>Title</ScheduleTitle>
    <ScheduleBox>
      <PostItem>{title}</PostItem>
    </ScheduleBox>
    </Container>
    )

}
export default TitleBox;