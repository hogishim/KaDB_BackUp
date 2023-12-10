import styled from "styled-components";

const PostItem = styled.textarea`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  margin: 10px;
  padding: 10px;
  width: 60vw;
  border: 1px solid grey;
  height: 10vh;
  outline: none;
  resize: none;
`;

function PostBox() {
  return <PostItem type="text" />;
}
export default PostBox;
