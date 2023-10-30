import styled from 'styled-components'
import BackToSet from './BackToSet'

let HeaderContainer = styled.div`

flex-grow: 10;
justify-content: center;
width: 100%;
height: 10vh;
display: flex;
flex-direction: row;


`
let H = styled.div`

flex-grow: 7;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;


`

let ImgBox2 = styled.div`

flex-grow: 3;
display: flex;
align-items: center;
justify-content: center;

`

function HeaderBox(props) {

    return (

        <HeaderContainer>

            <H>{props.headerText}</H>
            <ImgBox2>
                <BackToSet />
            </ImgBox2>
            
        </HeaderContainer>


    )



}
export default HeaderBox;