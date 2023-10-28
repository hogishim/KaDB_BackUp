import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './components/NavBar/Integrated';
import BlogList from './components/BlogList/Integrated';
import Login from './components/Login/Integrated';
import PWResetL from './components/PWResetL/Integrated';
import SignUp from './components/SignUp/Integrated';
import Individual from './components/Individual/Integrated';
import PlaceInfo from './components/PlaceInfo/Integrated';
import IndividualBlogHome from './components/IndividualBlogHome/Integrated';
import IndividualBlogPost from './components/IndividualBlogPost/Integrated';
import Main from './components/Main/Integrated';

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