import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Integrated';
import SignUp from './components/SignUp/Integrated';
import Main from './components/Main/Integrated';
import BlogList from './components/BlogList/Integrated';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PWResetL from './components/PWResetL/Integrated';
import Individual from './components/Individual/Integrated';
import PlaceInfo from './components/PlaceInfo/Integrated';
import IndividualBlogHome from './components/IndividualBlogHome/Integrated';
import IndividualBlogPost from './components/IndividualBlogPost/Integrated';
import Setting from './components/Setting/Integrated'
import Follower from './components/Follow/Follower/Integrated'
import Following from './components/Follow/Following/Integrated'
import PWResetS from './components/PWResetS/Integrated'
import BadgeRq from './components/BadgeRq/Integrated'
import EditTag from './components/EditTag/Integrated'
import EnrollPost from './components/EnrollPost/Integrated';
import ManagePost from './components/ManagePost/Integrated';
import RouteView from './components/RouteView/Integrated';
import ManageRoute from './components/ManageRoute/Integrated'
import RouteEdit from './components/RouteEdit/Integrated';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* NavBar 필요 있는 것들 */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="main" element={<Main/>}/>
          <Route path="bloglist" element={<BlogList/>}/>
          <Route path="individual" element={<Individual/>}/>
          <Route path="placeinfo" element={<PlaceInfo/>}/>
          <Route path="bloghome" element={<IndividualBlogHome/>}/>
          <Route path="blogpost" element={<IndividualBlogPost/>}/>
          <Route path="setting" element={<Setting />} />
          <Route path="follower" element={<Follower />} />
          <Route path="following" element={<Following />} />
          <Route path="setting/pw" element={<PWResetS />} />
          <Route path="setting/bg" element={<BadgeRq />} />
          <Route path="setting/tag" element={<EditTag />} />
          <Route path="enrollpost" element={<EnrollPost/>}/>
          <Route path="managepost" element={<ManagePost/>}/>
          <Route path="routeview" element={<RouteView />} />
          <Route path="manageroute" element={<ManageRoute />}/>
          <Route path="routeedit" element={<RouteEdit />}/>

        </Route>

        {/* NavBar 필요 없는 것들 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pwresetl" element={<PWResetL />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
