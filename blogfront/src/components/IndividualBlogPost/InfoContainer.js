import styled from "styled-components";
import { useState } from "react";

const HeartButton = styled.button`  

  background-color: #ffd9fa;
  font-family: KakaoRegular;
  font-size: 10pt;
  border-radius: 50px;
  color: #000000;
  border: none;
  width: 10vw;
  height: 3vh;
`;

const HideButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-size: 10pt;
  border-radius: 50px;
  border: none;
  width: 10vw;
  height: 3vh;
`;

const Container = styled.div`

width: 75vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 7vh;


`;

const EmptyBox = styled.div`

width: 60vw;
height: 7vh

`
const HeartContainer = styled.div`

width: 8vw
height: 7vh

`

const HideContainer = styled.div`

width: 8vw
height: 7vh

`

function InfoContainer(props) {

  let [like, setLike] = useState(10)
  const [cnt, setCnt] = useState(0);
  const [text, setText] = useState("댓글 숨기기");
  const [clickState, setClickState] = useState(true)

  const handleClick = () => {

    console.log("ededed")

    setCnt(cnt + 1);

    if (cnt % 2 === 0) {
      setText("댓글 표시");
      const state = "hidden"
      props.changeVisbility(state)
    }
    else {
      setText("댓글 숨기기");
      const state = "visibile"
      props.changeVisbility(state)
    }


  };

  const updateLike = () => {

    console.log("ededed")

    const newState = !clickState;
    setClickState(newState)


    if (clickState) {

      const i = like + 1;
      setLike(i)

    }
    else {

      const i = like - 1;
      setLike(i)


    }


  }
  

  return (
    <Container>
      <HeartContainer>
        <HeartButton onClick={updateLike}>❤️ {like} </HeartButton>
      </HeartContainer>
      <EmptyBox />
      <HideContainer>
        <HideButton onClick={handleClick}>{text}</HideButton>
      </HideContainer>
    </Container>
  );
}

export default InfoContainer;