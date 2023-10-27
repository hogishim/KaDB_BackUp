
import styled from 'styled-components'

let Input = styled.input`

    width: 60%;
    height: 60%;
    border: 0;
    border-radius: 10px;
    padding: 10px;

`


function InputBox(){


    return <Input type="text"
    placeHolder="직접 나의 태그를 작성해보세요 !!!#힐링 #온천 #맛집"/>



}
export default InputBox;