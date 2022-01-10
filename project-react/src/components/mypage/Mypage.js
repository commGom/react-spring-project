import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import SideMenu from './common/SideMenu';
import Diary from './diary/Diary';
import UserProfile from './userInfo/UserProfile';
import UpdateUser from './userInfo/UpdateUser';

import QuitUserCheck from './userInfo/QuitUserCheck';
import QuitUser from './userInfo/QuitUser';
import OrderList from './itemInfo/OrderList';


const Mypage = () => {
  useEffect(() => {
    if (sessionStorage.getItem("userId")) {

    } else {
      alert('로그인 후 이용할 수 있습니다.');
      window.location.href = "/";
    }
  })
  return (
    <div className="container">
      <div className="row">
        <SideMenu></SideMenu>
        <Routes>
          <Route path="/" element={<UserProfile></UserProfile>}></Route>
          <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
          <Route path='/userUpdate' element={<UpdateUser></UpdateUser>}></Route>
          <Route path='/quitUserCheck' element={<QuitUserCheck></QuitUserCheck>}></Route>
          <Route path='/quitUser' element={<QuitUser></QuitUser>}></Route>
          <Route path="/diary/*" element={<Diary></Diary>}></Route>
          <Route path="/order/list" element={<OrderList></OrderList>}/>
        </Routes>
      </div >
    </div>
  );
};

export default Mypage;