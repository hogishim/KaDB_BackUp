import styled from "styled-components";

const IntroduceDiv = styled.div`
`

function Introduce (props){
    return(
        <IntroduceDiv>
            <h1>{props.name}</h1>
            <p>{props.country}</p>
            <p>{props.type}</p>
        </IntroduceDiv>
    )
}

export default Introduce