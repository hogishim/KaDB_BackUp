import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './components/NavBar/Integrated';

const AppDiv = styled.div`
  display: flex;
  background-color: #f2f2f2;
`
const OutletDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
`
function App() {
  return (
    <AppDiv>
      <NavBar/>
      <OutletDiv>
        <Outlet/>
      </OutletDiv>
    </AppDiv>
  );
}

export default App;