import React from 'react';
import { Button, Col, Input, Row } from 'antd'
import "antd/dist/antd.css";
import styles from "./Signin.module.css";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Signin = () => {
  const navigate = useNavigate();
  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          {/* Col 하나는 이미지, 하나는 로그인 폼 */}
          <Col span={12}>
            <img src="/image/user/bg_signin01.jpg" alt="First Book" className={styles.signin_bg}></img>
            <img src="/image/user/bg_signin02.jpg" alt="Second Book" className={styles.signin_bg}></img>
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}><Link to="/">HANBOOK</Link></div>
            <div className={styles.signin_subtitle}>Please Input Your Information</div>
            <div className={styles.signin_underline}></div>
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="email" autoComplete="email" name="email" id="email"></Input>
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="password" autoComplete="current" name="password" id="password"></Input>
            </div>
            <div className={styles.button_area}>
              <Button className={styles.button} size="large" onClick={(e) => {

                const formData = new FormData();
                //OOO님 안녕하세요!,로그인 성공이면 main페이지
                //잘못된 정보를 입력하셨습니다. 로그인 실패하면 signin페이지
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                formData.append("email", email);
                formData.append("password", password);
                const result = axios({
                  url: 'http://localhost:8080/user/api/signin',
                  method: 'post',
                  data: formData
                });
                result.then((res) => {
                  const result = res.data;
                  if (result.code == 200) {
                    //로그인 성공하였을 때, SessionStorage에 값 넣고 
                    sessionStorage.setItem("userId", result.user.id);
                    sessionStorage.setItem("email", result.user.email);
                    sessionStorage.setItem("password", result.user.password);
                    console.log(sessionStorage.getItem("userId"), sessionStorage.getItem("email"), sessionStorage.getItem("password"));
                    alert(result.msg);
                    navigate("/");
                  } else if (result.code == 400) {
                    alert(result.msg);
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                  }
                });
              }}>로그인</Button>
            </div>
            <div className={styles.button_area}>
              <Button className={styles.button} size="large"><Link to="/user/signup">회원가입</Link></Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>



    
  );
};

export default Signin;