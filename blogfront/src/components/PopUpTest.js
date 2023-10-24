import AddCity from './EnrollPost/AddCity/Integrated'
import AddPlace from './EnrollPost/AddPlace/Integrated'

import React, { useState } from 'react';

function PopUpTest() {

    const [popUp1, setPopUp1] = useState(false);
    const [popUp2, setPopUp2] = useState(false);

    const toggle1 = () => {

        setPopUp2(false)
        setPopUp1(!popUp1);


    }
    const toggle2 = () => {


        setPopUp1(false)
        setPopUp2(!popUp2);

    }

    return (
        <div>
            <button onClick={toggle1}>도시 추가 팝업 열기</button>
            {popUp1 && <AddCity />}
            <button onClick={toggle2}>장소 추가 팝업 열기</button>
            {popUp2 && <AddPlace />}
        </div>
    )




}
export default PopUpTest;