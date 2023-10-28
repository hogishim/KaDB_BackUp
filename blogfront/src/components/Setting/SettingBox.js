import ClickSetting from './ClickSetting';
import styled from 'styled-components'
import img1 from './Source/bgimg.png'

let Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${img1});
    background-size: cover; 


`
let ContainerBox = styled.div`


    width: 50vw;
    height: 60vh;
    width: 70vh;
    text-align: center;
    background-color: #FFDB31;
    border : 1px solid rgb(233, 243, 40);
    border-radius : 20px;

`


function SettingBox() {



    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <ContainerBox>
                    <ClickSetting id={0}/>
                    <ClickSetting id={1}/>
                    <ClickSetting id={2}/>


                </ContainerBox>

            </Container>
        </>
    )



}
export default SettingBox;