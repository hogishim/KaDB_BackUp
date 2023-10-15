
import './Styles/Styles.css'
import img1 from './Source/ads.png'
import img2 from './Source/inf.png'
import { useNavigate } from 'react-router-dom'

function BadgeBar() {

    let navi = useNavigate();

    return (

        <>
            <div className="container">
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <div className="setting-box">

                    <h3>Badge 요청하기</h3>
                    <div className="rq-bg">
                        <div className="ad-badge">
                            <div className="image-box">
                                <img src={img1} onClick={() => { navi('/setting') }} />
                            </div>
                        </div>
                        <div className="in-badge">
                            <div className='image-box'>
                                <img src={img2} onClick={() => { navi('/setting') }} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )



}
export default BadgeBar;