import styled from 'styled-components'
import pwImg from './Source/lock.png'
import PutPW from './PutPW'

let Img = styled.img`

height: 1.5rem;
width: 1.5rem;
margin-left: 10px;

`


let InputBar = styled.div`

background-color: #F2F2F2;
width: 15vw;
display: flex;
align-items: center;
flex-direction: row;
margin: 10px;
height: 3rem;
border-radius: 4px;

`

const PWBox = styled.div`

height: 8vh;


`

let P1 = styled.div`

font-size: 10px;
text-align: start;
width: 15vw;
color: red;
padding-left: 13px;

`



function InputBox(props) {

    return (

        <PWBox>
            <InputBar>
                <Img src={pwImg} />
                <PutPW id={0} onPWChange={props.handleChange} />
            </InputBar>
            <P1>{props.msg}</P1>
        </PWBox>

    )

}

export default InputBox;