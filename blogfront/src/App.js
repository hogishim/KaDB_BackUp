
import './App.css';
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

function App() {
  return (

<>

<EnrollPlace />
{/* <AddPlace /> */}
{/* <AddCity /> */}
{/* 
<Following /> */}
{/* <Follower /> */}


{/* <Link to ="/setting">Setting으로 이동</Link>

    

    <Routes>
      <Route path="/setting" element={<Setting />} />
      <Route path="/setting/pw" element={<PWResetS />} />
      <Route path="/setting/bg" element={<BadgeRq />} />
      <Route path="/setting/tag" element={<EditTag />} />
    </Routes> */}

    </>

  );


}

export default App;
