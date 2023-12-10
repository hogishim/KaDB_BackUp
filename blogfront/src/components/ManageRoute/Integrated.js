
import styled from 'styled-components'
import Header from './Header'
import InfoContainer from './InfoContainer';

const Container = styled.div`

  display: flex;
  width: calc(100vw - 8.1rem);
  min-height: 100vh;
  flex-direction: column;
  background-color: #CF6E36;
  

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