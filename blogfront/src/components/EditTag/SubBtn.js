import {useNavigate} from 'react-router-dom'

function SubBtn(){

    let navi = useNavigate();

    return <button className="submit-btn" onClick={()=>{navi("/setting  ")}}>제출하기</button>


}

export default SubBtn;