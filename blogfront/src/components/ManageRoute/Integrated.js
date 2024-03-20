
import styled from 'styled-components'
import Header from './Header'
import InfoContainer from './InfoContainer';
import img from '../RouteView/Source/backimg.png'

const Container = styled.div`

  display: flex;
  width: calc(100vw - 8.1rem);
  min-height: 100vh;
  flex-direction: column;
  background-image: url(${img});
  background-size: cover;
  background-position: center center; 
  background-attachment: fixed;
  

`;

function ManageRoute() {


    return (

        <Container>
            <Header />
            <InfoContainer />
        </Container>

    )

}
export default ManageRoute;