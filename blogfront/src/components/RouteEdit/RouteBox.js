import styled from 'styled-components'
import data from '../RouteView/TempData'
import GlobalStyle from '../Fonts/GlobalStyle';
import deleteimg from './Source/bin.png'
import upimg from './Source/up.png'
import dwimg from './Source/down.png'

const PostBox = styled.div`
  width: 61vw;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 10px;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`

width: 55vw;
font-family: "kakao";


`

const PostItemBox = styled.div`

  width: 55vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  background-color: #B4BFFF;
  border-radius: 10px;
  

`;

const ImgBox = styled.div`

width: 15vw;
height: 20vh;
display: flex;
align-items: center;
justify-content: center;


`

const PostItemimage = styled.img`
  
  height: 15vh;
  width: auto;

`;

const PostItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 32vw;
  height: 20vh;
  justify-content: center;
  align-items: start;
  font-family: "kakao"
`;

const PostItemTitle = styled.div`
  font-family: "kakaobold";
  font-size: 3vh;
  font-weight: bold;

`;

const PostItem = styled.div`
  font-family: "kakao";
  font-size: 2vh;
  color: #000000;
  
`;

const SummaryItem = styled.div`
width:55vw;
display: flex;
align-items: center;
justify-content: center;
height: 3vh;
  font-family: KakaoBold;
  font-size: 10pt;
  color: #000000;
  font-weight: bold;

  `;

  const ButtonItems = styled.div`
  
  width: 7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `

  const Button = styled.button `
  
  height: 6vh;
  width: 7vw;
  margin: 0;
  background-color: #B4BFFF;
  border: none;

  `
  
  const Imagebox = styled.img`
  
  height: 5vh;
  width: auto;
  
  
  `




function RouteBox() {

  const group = data.reduce((a, i) => {

    const key = i.date;

    if (!a[key]) {

      a[key] = []


    }

    a[key].push(i)

    return a;


  }, {})

  const render = Object.entries(group).map(([a, i]) => (
    <>
      <GlobalStyle />
      <PostBox key={a}>

        <TitleBox>
          {a}일차
        </TitleBox>
        {i.map((a) => (

          <>
            <SummaryItem>{a.transport}</SummaryItem>
            <PostItemBox>
              <ImgBox>
                <PostItemimage src={a.img} alt="Incheon" />
              </ImgBox>
              <PostItems>
                <PostItemTitle>{a.title}</PostItemTitle>
                <PostItem>{a.desc}</PostItem>
              </PostItems>
              <ButtonItems>
                <Button><Imagebox src={upimg}/></Button>
                <Button><Imagebox src={deleteimg}/></Button>
                <Button><Imagebox src={dwimg}/></Button>
              </ButtonItems>
            </PostItemBox>

          </>
        ))}


      </PostBox>

    </>

  ))


  return <>{render}</>;

}
export default RouteBox;
