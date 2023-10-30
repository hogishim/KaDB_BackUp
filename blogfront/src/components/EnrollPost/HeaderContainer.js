import styled from 'styled-components'

let HeaderBox = styled.div`
    display: flex;
    height: 5vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;


`


let XBox = styled.div`

flex-grow: 1;

`
let HeaderText = styled.div`

flex-grow: 10;
`


function HeaderContainer(props) {

    return (
        <HeaderBox>
            <HeaderText>{props.text}</HeaderText>
            <XBox onClick={() => { props.closeWindow(false) }}>&#10060;</XBox>
        </HeaderBox>



    )


}
export default HeaderContainer;