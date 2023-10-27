
import InputBox from './InputBox';

import SubBtn from './SubBtn';
import styled from 'styled-components'

let Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;


`
let SettingBox = styled.div`

    width: 40vw;
    height:50vh;
    text-align: center;
    background-color: #FFDB31;
    border : 1px solid rgb(233, 243, 40);
    border-radius : 20px;


`


function EditTag() {


    return (

        <>
            <Container>
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <SettingBox>

                    <h3>선호태그를 수정하세요!!</h3>
                    <InputBox />
                    
                    <SubBtn />

                </SettingBox>

            </Container>
        </>
    )



}
export default EditTag;