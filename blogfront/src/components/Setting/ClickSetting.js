import img0 from "./Source/pw.png"
import img1 from "./Source/bg.png"
import img2 from "./Source/tag.png"
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'


const anim1 = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    75% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

let LeftIcon = styled.div`

    float: left;
    width: 20%;
    height: 100%;   
    display: flex;
    align-items: center;
    justify-content: center;

`
let RightText = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    width: 78%;
    height: 100%;


`
let ClickSettings = styled.div`

    margin-top: 1%;
    width: 100%;
    height: 30%;

    &:hover img {
    animation-name: ${anim1};
    animation-duration: 1s;
  }


`

function ClickSetting(props) {

    let str = ["비밀번호 변경", "사용자 뱃지 신청", "선호태그 변경"]
    let images = [img0, img1, img2];
    let nav = useNavigate();

    return (

        <ClickSettings onClick={() => {

            if (Number(props.id) === 0)
                nav(`/setting/pw`); // 비밀번호 변경 페이지로 이동
            else if (Number(props.id) === 1)
                nav(`/setting/bg`); // 배경 변경 페이지로 이동
            else
                nav(`/setting/tag`); // 태그 변경 페이지로 이동
        }}>

            {/* 이미지는 왼쪽에 불러오고, text는 오른쪽에 배치시킴*/}
            <LeftIcon>
                <img src={images[Number(props.id)]} style={{ width: "60%" }} />
            </LeftIcon>

            <RightText>
                <b>{str[Number(props.id)]}</b>
            </RightText>


        </ClickSettings>


    )



}
export default ClickSetting;