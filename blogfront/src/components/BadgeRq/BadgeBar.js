
import img1 from './Source/ads.png'
import img2 from './Source/inf.png'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import settingImg from '../Setting/Source/settings.png'
import img from './Source/bgimg.png'
import MappingContainer from '../Setting/MappingContainer'


let Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
    background-size: cover; 


`
let SettingBox = styled.div`

    width: 30vw;
  height: 50vh;
  text-align: center;
  background-color: #D376F3;
 
  border-radius: 20px;

`
let HeaderContainer = styled.div`

flex-grow: 10;
justify-content: center;
width: 100%;
height: 10vh;
display: flex;
flex-direction: row;


`

let RequestBadge = styled.div`

display: flex;
  width: 100%;
  height: 30vh;
  justify-content: center;
  align-items: center;


`
let AddBadge = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 12vw;
  background-color: snow;
  border-radius: 50%;
  margin: 3px;


`
let InBadge = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 12vw;
  background-color: snow;
  border-radius: 50%;
  margin: 3px;



`


let ImgBox = styled.div`

width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;


`
let Image = styled.img`

width: 40%;
  height: auto;
  margin: 10px;

&:hover{

    width: 50%;
  height: auto;
  margin: 10px;
  transition: all 1s;

}


`

let ImgBox2 = styled.div`

flex-grow: 3;
display: flex;
align-items: center;
justify-content: center;

`

let BackImg = styled.img`

width: 50px;
height: 50px;



`
let H = styled.div`

flex-grow: 7;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;


`


function BadgeBar() {

    let navi = useNavigate();

    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}


                <SettingBox>
                <MappingContainer />
                <HeaderContainer>
                  
                        <H>Badge 신청</H>
                        <ImgBox2>
                        <BackImg src={settingImg} onClick={()=>{navi("/setting")}}/>
                        </ImgBox2>
                    </HeaderContainer>
                    <RequestBadge>
                        <AddBadge>
                            <ImgBox>
                                <Image src={img1} onClick={() => 
                                    { navi('/setting') }} />
                            </ImgBox>
                        </AddBadge>
                        <InBadge>
                            <ImgBox>
                                <Image src={img2} onClick={() => 
                                    { navi('/setting') }} />
                            </ImgBox>
                        </InBadge>
                    </RequestBadge>
                </SettingBox>

            </Container>
        </>
    )



}
export default BadgeBar;