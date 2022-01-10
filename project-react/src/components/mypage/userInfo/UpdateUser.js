import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


const UpdateUser = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const formData = new FormData();
    formData.append("userId", email);
    formData.append("userPassword", password)
    const result = axios({
      url: 'http://localhost:8080/mypage/userProfile',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      setUser(res.data);
    });
  }, []);//deps
  return (
    <div class="col-7 mx-5">
      <form class="n" novalidate="" onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("userId", sessionStorage.getItem("email"));
        formData.append("userPassword", sessionStorage.getItem("password"));
        formData.append("password", document.getElementById("password").value);
        formData.append("phone", document.getElementById("phone").value);
        formData.append("address1", document.getElementById("address1").value);
        formData.append("address2", document.getElementById("address2").value);
        formData.append("postcode", document.getElementById("postcode").value);
        const result = axios({
          url: 'http://localhost:8080/mypage/userUpdate',
          method: 'post',
          data: formData
        });
        result.then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.code == 200) {
            alert('회원정보가 성공적으로 변경되었습니다.');
            sessionStorage.setItem("password", document.getElementById("password").value);
            navigate('/mypage');
          } else if (res.data.code == 400) {
            alert('올바른 정보를 입력하여 주십시오.');
            document.getElementById("password").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("address1").value = "";
            document.getElementById("address2").value = "";
            document.getElementById("postcode").value = "";
          }

        });
      }}>
        <div className="row">

          <div className="col-lg-4">
            <h5 class="mb-3" id="profile_title"><b>회원 정보 수정</b></h5>
          </div>
          <div className="col-lg-6"></div>
          <div className="col-lg-2">
            <button type="submit" className="btn btn-dark">변경하기</button>
          </div>
        </div>


        <div class="row">
          <div className="mb-3">
            <label for="name">이름</label>
            <input type="text" class="form-control" id="name" placeholder="" value={user.name} required
              onChange={(e) => { setUser({ ...user, name: e.target.value }); }} />
            <div class="invalid-feedback"> Valid first name is required. </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(User ID)</span></label>
          <input type="email" class="form-control" id="email" value={user.email} readOnly />
          <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
        </div>
        <div class="mb-1">
          <label for="password">Password <span class="text-muted"></span></label>
          <input type="password" class="form-control" id="password" required onChange={(e) => { setUser({ ...user, password: e.target.value }); }} />
          <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
        </div>
        <div class="mb-3">
          <label for="password_check">Password <span class="text-muted">(Check)</span></label>
          <input type="password" class="form-control" id="password_check" />
          <div class="invalid-feedback"> Please enter a valid password. </div>
        </div>

        <div class="mb-3">
          <label for="birth">Birth <span class="text-muted"></span></label>
          <input type="date" class="form-control" id="birth" readOnly value={user.birth} />
          <div class="invalid-feedback"> Please enter a valid birth </div>
        </div>
        <div class="mb-3">
          <label for="phone">Phone <span class="text-muted"></span></label>
          <input type="tel" class="form-control" id="phone" value={user.phone} required
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }} />
          <div class="invalid-feedback"> Please enter a valid phone number for shipping updates. </div>
        </div>

        <div class="mb-1">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address1" value={user.address1} required onChange={(e) => { setUser({ ...user, address1: e.target.value }); }} />
          <div class="invalid-feedback"> Please enter your shipping address. </div>
        </div>
        <div class="mb-1">
          <label for="address2">Address 2 <span class="text-muted">(상세주소)</span></label>
          <input type="text" class="form-control" id="address2" value={user.address2} required onChange={(e) => { setUser({ ...user, address2: e.target.value }); }} />
        </div>
        <div class="col-md-3 mb-5">
          <label for="post_code">Post Code</label>
          <input type="text" class="form-control" id="postcode" value={user.postcode} required onChange={(e) => { setUser({ ...user, postcode: e.target.value }); }} />
          <div class="invalid-feedback"> Post Code required. </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;