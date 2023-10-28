
import styled from 'styled-components'

let Input = styled.input`

    width: 25vw;
    height: 20vh;
    border: 0;
    border-radius: 10px;
    padding: 10px;
    outline: none;  

`


function InputBox(){


    return <Input type="text"
    placeHolder="직접 나의 태그를 작성해보세요!!!   #힐링 #온천 #맛집"/>



}
export default InputBox;