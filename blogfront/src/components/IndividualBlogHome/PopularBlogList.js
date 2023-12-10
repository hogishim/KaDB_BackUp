import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import data from './TempPopularPost'

const PopularPost = styled.div`
  width: 15vw;
  height: 20vh;
  background-color: #cbcbcb;
  padding: 10px;
  border-radius: 3px;
  margin: 2vw;
  align-items: center;
  display:flex;
  flex-direction: column;
`;

const PostImage = styled.img`
margin-top: 10%;
  width: auto;
  height: 10vh;
  margin-bottom: 14px;
  margin-left: 10px;
`;

const PostTags = styled.div`
height: 8vh;
width: 15vw;
padding-top: 6%;
  font-size: 9pt;
  font-family: KakaoRegular;
  color: #000000;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ImageBox = styled.div`

height: 10vh;
width: 15vw;
display: flex;
align-items: center;
justify-content: center;



`

function PopularBlogList() {
  const navi = useNavigate();
  console.log(data)
  return (



    data.map(function (a) {

      return (


        <PopularPost
          onClick={() => {
            navi("/blogpost");
          }}>
            <ImageBox>
          <PostImage src={a.img} alt="Europe" />
          </ImageBox>
          <PostTags>{a.title}</PostTags>
        </PopularPost>


      )



    })


  );

}
export default PopularBlogList;
