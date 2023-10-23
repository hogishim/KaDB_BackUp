import n_data from './TempNation'
import { useState } from 'react'
import styled from "styled-components"

let Select = styled.select`

height: 50px;
padding: 5px;
width: 200px;
border-radius: 5px;
margin-right: 10px; 
border: 0;

`


function SelectionBox(props) {

    const [selectedNation, setSelectedNation] = useState('');

    const handleNation = (e) => {
        const selectedValue = e.target.value;
        setSelectedNation(selectedValue);
        props.onNationChange(selectedValue); // 선택한 값 전달
    };

    return (
        <>


            <Select onChange={handleNation}>
                {n_data.map(function (a) {

                    return <option>{a}</option>


                })}

            </Select>


        </>

    )

}
export default SelectionBox;