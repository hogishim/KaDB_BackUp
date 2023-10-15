import './Styles/Styles.css'
import {useNavigate} from 'react-router-dom'

function ChgBtn(){

    let nv = useNavigate();

    return <button className="pwrs-btn" onClick={()=>{nv('/setting')}}>제출하기</button>



}
export default ChgBtn;