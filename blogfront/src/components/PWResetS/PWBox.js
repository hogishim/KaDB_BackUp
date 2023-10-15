
import ChgBtn from './ChgBtn';
import PutPW from './PutPW';
import './Styles/Styles.css'

function PWBox() {


    return (

        <>
            <div className="container-box">
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <div className="pw-box">
  
                    <h3>비밀번호 재설정</h3>

            
                    <PutPW id={0}/>
                    <PutPW id={1}/>
                    <PutPW id={2}/>

                    <ChgBtn />
                </div>

            </div>
        </>
    )



}
export default PWBox;