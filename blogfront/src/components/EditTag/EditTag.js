import InputBox from './InputBox';
import SubBtn from './SubBtn';
import styled from 'styled-components'
import img from './Source/bgimg.png'
import MappingContainer from '../Setting/MappingContainer';
import HeaderBox from '../Setting/HeaderBox';

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
    height:50vh;
    text-align: center;
    background-color: #F28ECA;
    border-radius : 20px;


`

function EditTag() {

    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}

                <SettingBox>

                    <MappingContainer />
                    <HeaderBox headerText="선호태그 변경"/>
                    <InputBox />
                    <SubBtn />
                </SettingBox>

            </Container>
        </>

    )

}
export default EditTag;