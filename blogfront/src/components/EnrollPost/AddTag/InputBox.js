import styled from 'styled-components'

let Input = styled.input`

width: 30vw;
height: 10vh;
margin-bottom: 1rem;
border: 0px;
border-radius: 10px;
padding-left: 10px;
display: flex;
align-items: center;
justify-content: center;
outline: none;

`


function InputBox(props){

    const getValue = (e) =>{

        const val = e.target.value;
        props.onchange(val);

    }

return <Input placeholder={props.text} onChange={getValue}/>

}

export default InputBox;
