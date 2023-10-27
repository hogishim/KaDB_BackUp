
import img1 from './Source/ads.png'
import img2 from './Source/inf.png'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

let Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;


`
let SettingBox = styled.div`

    width: 40vw;
  height: 50vh;
  text-align: center;
  background-color: #FFDB31;
  border: 1px solid rgb(233, 243, 40);
  border-radius: 20px;

`
let RequestBadge = styled.div`

display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;



`
let AddBadge = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 15vw;
  background-color: snow;
  border-radius: 50%;
  margin: 3px;


`
let InBadge = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 15vw;
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

width: 30%;
  height: auto;
  margin: 10px;

&:hover{

    width: 45%;
  height: auto;
  margin: 10px;
  transition: all 1s;

}


`

function BadgeBar() {

    let navi = useNavigate();

    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <SettingBox>

                    <h3>Badge 요청하기</h3>
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