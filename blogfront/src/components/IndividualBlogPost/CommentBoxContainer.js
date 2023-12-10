import styled from "styled-components";
import comments from "./TempComment";

const Comments = styled.div`
  height: 10vh;
  background-color: #ffffff;
  border-radius: 20px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  align-items: center;
  justify-content: center;
`;

const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;
`;

const Profile = styled.img`
  weight: 5vh;
  height: 5vh;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

const Nickname = styled.div`
  margin-top: 1vh;
  font-family: KakaoRegular;
  font-size: 8pt;
  margin-bottom: 10px;
`;

const CommentBox = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  height: 10vh;
  width: 55vw;
`;

const CommentItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-family: KakaoRegular;
  font-size: 10pt;
  height: 10vh;
  width: 55vw;
`;

const HeartItem = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5vw;
`;

const HeartIcon = styled.div`

`;

const HeartCount = styled.div`

  font-family: KakaoRegular;
  font-size: 9pt;
`;

function CommentBoxContainer() {
  return (
    <>
      {comments.map(function (a) {
        return (
          <Comments>
            <Profiles>
              <Profile src={a.profile} />
              <Nickname>{a.nickname}</Nickname>
            </Profiles>
            <CommentBox>
              <CommentItem>{a.text}</CommentItem>
            </CommentBox>
            <HeartItem>
              <HeartIcon>❤️</HeartIcon>
              <HeartCount>{a.like}</HeartCount>
            </HeartItem>
          </Comments>
        );
      })}
    </>
  );
}
export default CommentBoxContainer;
