
import './App.css';
import Follower from './components/Follower/Integrated'
import Setting from './components/Setting/Integrated'
import PWResetS from './components/PWResetS/Integrated'
import BadgeRq from './components/BadgeRq/Integrated'
import EditTag from './components/EditTag/Integrated'
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (

<>

<Follower />



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
