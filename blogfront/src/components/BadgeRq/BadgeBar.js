import img1 from './Source/ads.png'
import img2 from './Source/inf.png'
import styled from 'styled-components'
import img from './Source/bgimg.png'
import MappingContainer from '../Setting/MappingContainer'
import BadgeBox from './BadgeBox'
import HeaderBox from '../Setting/HeaderBox'

let Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100vw - 7rem);
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


let RequestBadge = styled.div`

display: flex;
  width: 100%;
  height: 30vh;
  justify-content: center;
  align-items: center;


`

function BadgeBar() {



    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}

                <SettingBox>
                <MappingContainer />
                    <HeaderBox headerText="뱃지 신청" />
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