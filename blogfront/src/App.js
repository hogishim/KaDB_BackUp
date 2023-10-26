import styled from 'styled-components'
import './App.css';
import PopUpTest from './components/PopUpTest'
import AddCity from './components/EnrollPost/AddCity/Integrated'
import Following from './components/Following/Integrated'
import Follower from './components/Follower/Integrated'
import Setting from './components/Setting/Integrated'
import PWResetS from './components/PWResetS/Integrated'
import BadgeRq from './components/BadgeRq/Integrated'
import EditTag from './components/EditTag/Integrated'
import { Routes, Route, Link } from 'react-router-dom'
import AddPlace from './components/EnrollPost/AddPlace/Integrated'
import EnrollPlace from './components/EnrollPost/EnrollPlace/Integrated'


let A = styled.a`
  text-decoration: none; 
  color: inherit; 
  cursor: pointer;


`
function App() {
  return (

    <>

      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/popup" element={<PopUpTest />} />
        <Route path="/setting/pw" element={<PWResetS />} />
        <Route path="/setting/bg" element={<BadgeRq />} />
        <Route path="/setting/tag" element={<EditTag />} />
        <Route path="follower" element={<Follower />} />
        <Route path="following" element={<Following />} />

      </Routes>


      <A href="/setting">Setting으로 이동</A>
      <br />
      <A href="/popup">팝업창으로 이동</A>
      <br />
      <A href="/follower">팔로어 확인으로 이동</A>
      <br />
      <A href="/following">팔로잉 확인으로 이동</A>

    </>

  );


}

export default App;
