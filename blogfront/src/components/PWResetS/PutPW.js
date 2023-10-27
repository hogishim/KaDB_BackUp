import styled from 'styled-components'

let PWInputBox = styled.div`

width: 100%;
height: 1.5rem;

`
let Input = styled.input`


    background-color: #F2F2F2;
 width: 10vw;
  height: 1.5rem;
  
  border: none;
  outline: none;


`



function PutPW(props) {

    let str = ["기존 비밀번호", "새로운 비밀번호", "새로운 비밀번호 확인"]

    const handleChange = (e)=>{

        const pw = e.target.value;
        props.onPWChange(pw)


    }

    return (


        <PWInputBox>

            <Input type="password" id="pw" onChange={handleChange}placeholder={str[Number(props.id)]}/>

        </PWInputBox>



    )


}
export default PutPW;