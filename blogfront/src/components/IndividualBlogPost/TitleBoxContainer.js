import styled from "styled-components";

const Container = styled.div`




`



const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const ScheduleTitle = styled.div`
text-align: start;
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 5vw;
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

const Copybutton = styled.button`
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
  right: 90px;
`;

function TitleBoxContainer() {
  return (
    <Container>
      <ScheduleTitle>SCHEDULE</ScheduleTitle>
      <Schedule>
        <ScheduleBox>
          Europe 2019.07.07 ~ 2019.08.13 영국 아일랜드 프랑스 스위스 오스트리아 체코
        </ScheduleBox>
        <Copybutton>일정 복사하기</Copybutton>
      </Schedule>
    </Container>
  );
}

export default TitleBoxContainer;
