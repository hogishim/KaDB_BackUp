import img1 from './Source/ads.png'
import img2 from './Source/inf.png'
import styled from 'styled-components'
import img from './Source/bgimg.png'
import MappingContainer from '../Setting/MappingContainer'
import BadgeBox from './BadgeBox'
import BackToSet from '../Setting/BackToSet'

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


let ImgBox2 = styled.div`

flex-grow: 3;
display: flex;
align-items: center;
justify-content: center;

`

let H = styled.div`

flex-grow: 7;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;


`


function BadgeBar() {



    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}


                <SettingBox>
                <MappingContainer />
                <HeaderContainer>
                  
                        <H>Badge 신청</H>
                        <ImgBox2>
                       <BackToSet />
                        </ImgBox2>
                    </HeaderContainer>
                    <RequestBadge>
                      <BadgeBox img={img1}/>
                      <BadgeBox img={img2}/>
                    </RequestBadge>
                </SettingBox>

            </Container>
        </>
    )



}
export default BadgeBar;