import styled from 'styled-components'
import PlaceBox from './PlaceBox';
let Container = styled.div`

background-color: snow;
width: 100%;
height: 22rem;
overflow-y: auto;


`

function PlaceContainer(props){

    return(

        <Container>
            <PlaceBox city={props.city} place={props.place}/>


        </Container>


    )



}
export default PlaceContainer;