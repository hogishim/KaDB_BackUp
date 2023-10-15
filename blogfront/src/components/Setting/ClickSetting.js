import img0 from "./Source/pw.png"
import img1 from "./Source/bg.png"
import img2 from "./Source/tag.png"
import { useNavigate } from 'react-router-dom';

function ClickSetting(props) {

    let str = ["비밀번호 변경", "사용자 뱃지 신청", "선호태그 변경"]
    let images = [img0, img1, img2];
    let nav = useNavigate();

    return (

        <div className="click-setting" onClick={() => {
 
            if (Number(props.id) === 0)
                nav(`/setting/pw`); // 비밀번호 변경 페이지로 이동
            else if (Number(props.id) === 1)
                nav(`/setting/bg`); // 배경 변경 페이지로 이동
            else
                nav(`/setting/tag`); // 태그 변경 페이지로 이동
        }}>

            {/* 이미지는 왼쪽에 불러오고, text는 오른쪽에 배치시킴*/}
            <div className="left-icon">
                <img src={images[Number(props.id)]} style={{ width: "60%" }} />
            </div>

            <div className="right-text">
                <b>{str[Number(props.id)]}</b>
            </div>


        </div>


    )



}
export default ClickSetting;