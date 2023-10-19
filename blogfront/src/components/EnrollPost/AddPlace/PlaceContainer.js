import styled from 'styled-components'
import PlaceBox from './PlaceBox';
let Container = styled.div`

background-color: snow;
width: 100%;
height: 65%;
overflow-y: auto;
`

function PlaceContainer(){

    return(

        <Container>
            <PlaceBox />


        </Container>


    )



}
export default PlaceContainer;