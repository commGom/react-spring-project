import React from 'react';
import { Button, Col, Input, Row } from 'antd'
import "antd/dist/antd.css";
import styles from "./QuitUserCheck.module.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const QuitUserCheck = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  return (
    <div class="col-9 mx-auto">
      <Row className={styles.signin_row}>
        <Col span={24}>
          <Row className={styles.signin_contents}>
            {/* Col 하나는 이미지, 하나는 로그인 폼 */}
            <Col span={12}>
              <img src="/image/user/bg_signin01.jpg" alt="First Book" className={styles.signin_bg}></img>
              <img src="/image/user/bg_signin02.jpg" alt="Second Book" className={styles.signin_bg}></img>
            </Col>
            <Col span={12}>
              <div className={styles.signin_title}><Link to="/">HANBOOK</Link></div>
              <div className={styles.signin_subtitle}>회원 확인을 위한 로그인 정보를 입력해 주세요</div>
              <div className={styles.signin_underline}></div>
              <div className={styles.email_title}>
                Email
                <span className={styles.required}>*</span>
              </div>
              <div className={styles.input_area}>
                <Input className={styles.input} placeholder="email" autoComplete="email" name="email" id="email" value={email}></Input>
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
                    console.log(result);
                    if (result.code == 200) {
                      //로그인 성공하였을 때, QuitUser 컴포넌트 보여주기
                      sessionStorage.setItem("quitCheck", "ok");
                      navigate("/mypage/quitUser");
                    } else if (result.code == 400) {
                      alert(result.msg);
                      document.getElementById("password").value = "";
                    }
                  });
                }}>로그인</Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default QuitUserCheck;