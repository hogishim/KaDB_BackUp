import styled from 'styled-components'
import RouteBox from './RouteBox';


const Container = styled.div`

display: flex;
justify-content: center;

`

const Box = styled.div`

display: flex;
align-items: center;
justify-content: center;
background-color: snow;
width: 70vw;
border-radius: 10px;


`




function InfoContainer(){

    return(

        <Container>

            <Box>
                <RouteBox />
            </Box>

        </Container>



    )


}
export default InfoContainer;