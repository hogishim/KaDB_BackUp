import styled from 'styled-components'
import PlaceBox from './PlaceBox';
let Container = styled.div`

background-color: snow;
width: 100%;
height: 40vh;
overflow-y: auto;


`

function PlaceContainer(props){

    return(

        <Container>
            <PlaceBox city={props.city} place={props.place} setPlace={props.setPlace}/>


        </Container>


    )



}
export default PlaceContainer;