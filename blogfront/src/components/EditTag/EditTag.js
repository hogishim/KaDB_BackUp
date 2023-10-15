
import InputBox from './InputBox';
import './Styles/Styles.css'
import SubBtn from './SubBtn';

function EditTag() {


    return (

        <>
            <div className="container">
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <div className="setting-box">

                    <h3>선호태그를 수정하세요!!</h3>
                    <InputBox />
                    
                    <SubBtn />

                </div>

            </div>
        </>
    )



}
export default EditTag;