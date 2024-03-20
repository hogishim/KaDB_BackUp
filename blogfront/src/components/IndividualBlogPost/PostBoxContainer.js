import styled from "styled-components";
import GlobalStyle from "../Fonts/GlobalStyle";
import ImageSlide from "./ImageSlide";

const PostBox = styled.div`

  width: 70vw;
  margin-top: 20px;
  background-color: #f2f2f2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostBoxTitle = styled.div`
  display: flex;
  height: 5vh;
  width: 65vw;
  align-items: center;
  font-family: 'kakao';
  font-size: 3vh;
  font-weight: bold;

`;

const PostItemBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 65vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostItemTitle = styled.div`
  font-family: 'kakao';
  font-size: 2.5vh;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 10px 20px;
`;

const PostItem = styled.div`
  font-family: 'kakao';
  font-size: 2vh;
  color: #000000;
  margin-left: 20px;
  margin: 20px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const SummaryItem = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin: 20px auto;
`;

const Tags = styled.div`
  width: 65vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

const TagBox = styled.div`
  background-color: #1efff1;
  color: #000000;
  font-family: KakaoRegular;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: 10px;
`;

function PostBoxContainer(props) {


  return (
    <>
      <GlobalStyle />
      <PostBox>
        {props.data.map((a, i) => {

          return (
            <>
              <PostBoxTitle>{i + 1}일차 - {a.city}</PostBoxTitle>
              {a.paragraph.map((b, k) => {
                return (
                  <>

                    <PostItemBox>
                      <ImageSlide images={b.images}/>
                      <PostItemTitle>{b.place}</PostItemTitle>
                      <PostItem>{b.text}</PostItem>
                    </PostItemBox>
                    <Tags>
                      {b.tags.map((c, l) => {

                        return (

                          <TagBox>{c}</TagBox>

                        )

                      })}
                    </Tags>

                    {b.transports.map((d, m) => {
                      return (
                        <SummaryItem>&#8595;&nbsp;
                          {d.transport} &#8739;&nbsp;
                          {d.transport_name} &#8739;&nbsp;
                          {d.money} &#8739;&nbsp;
                          {d.time}
                        </SummaryItem>
                      )

                    })}


                  </>
                )


              })}

            </>
          )

        })}



      </PostBox>
    </>


  )


}
export default PostBoxContainer;
