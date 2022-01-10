import axios from 'axios';
import React, { useEffect, useState } from 'react';



const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const formData = new FormData();
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    formData.append("userId", email);
    formData.append("userPassword", password)
    const result = axios({
      url: 'http://localhost:8080/mypage/userProfile',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setUser(res.data);
    });//deps
  }, []);
  return (
          <div class="col-7 mx-5">
              <div class="card mb-3">
                <div class="card-body">
                <h5 id="profile_title"><b>회원 정보</b></h5>
                <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">아이디</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user.email}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">생년월일</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.birth}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">전화번호</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.phone}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">주소</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.address1} {user.address2}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">가입일</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user.createdDate}
                    </div>
                  </div>
                </div>
              </div>
              </div>
  );
};

export default UserProfile;