import ClickSetting from './ClickSetting';
import './Styles/Styles.css'


function SettingBox() {



    return (

        <>
            <div className="container">
                {/* setting할 수 있는 메뉴를 불러오는데 props를 이용하여 설정 */}
                <div className="setting-box">
                    <ClickSetting id={0}/>
                    <ClickSetting id={1}/>
                    <ClickSetting id={2}/>


                </div>

            </div>
        </>
    )



}
export default SettingBox;