import styled from "styled-components"

const ButtonBTN = styled.button`
    background-color : white;
    border : none;
    border-radius : 6px;
    font-size : 1.3rem;
    width : 27rem;
    height : 3.5rem;
`

function Button (props){
    return(
        <>
            <ButtonBTN>
                {props.text}
            </ButtonBTN>
        </>
    )
}

export default Button;