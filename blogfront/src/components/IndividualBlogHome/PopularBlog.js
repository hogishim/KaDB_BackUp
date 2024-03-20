import styled from "styled-components";
import PopularBlogList from "./PopularBlogList";

const Container = styled.div`
  width: calc(100vw - 7rem);
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopularPostTitle = styled.div`
  width: 70vw;
  text-align: start;
  font-size: 12pt;
  font-family: KakaoBold;
  color: #ffffff;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const PopularPostsBox = styled.div`
  width: 70vw;
  height: 40vh;
  background-color: #ffffff;
  border-radius: 5px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;

const BlogListBox = styled.div`
  height: 50vh;
  width: 70vw;
`;

function PopularBlog() {
  return (
    <Container>
      <PopularPostTitle>Popular Post</PopularPostTitle>
      <BlogListBox>
        <PopularPostsBox>
          <PopularBlogList />
        </PopularPostsBox>
      </BlogListBox>
    </Container>
  );
}
export default PopularBlog;
