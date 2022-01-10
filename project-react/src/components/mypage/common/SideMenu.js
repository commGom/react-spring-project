import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {
  return (
    <div class="col-2">
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="collapse navbar-collapse" id="sidebar">
          <div class="container-fluid">
            <div class="row">
              <div class="sidebar">
                <Link class="nav-link navbar-brand text-dark text-center d-block mx-auto py-2 mb-2 fs-6" to="/mypage/userProfile">
                  회원정보조회
                </Link>
                <Link class="nav-link navbar-brand text-dark text-center d-block mx-auto py-2 mb-2 fs-6" to="/mypage/userUpdate">
                  회원정보수정
                </Link>
                <Link class="nav-link navbar-brand text-dark text-center d-block mx-auto py-2 mb-2 fs-6" to="/mypage/quitUserCheck">
                  회원탈퇴
                </Link>
                <Link class="nav-link navbar-brand text-dark text-center d-block mx-auto py-2 mb-2 fs-6" to="/mypage/order/list">
                  주문내역
                </Link>
                <Link class="nav-link navbar-brand text-dark text-center d-block mx-auto py-2 mb-2 fs-6" to="/mypage/diary">
                  독서노트

                  <Link class="nav-link navbar-brand text-dark text-center d-block mx-auto py-3 fs-6" to="/mypage/diary/write" id='diary'>
                    독서노트 작성하기
                  </Link>
                </Link>

              </div>
              <div class="col-lg-9">

              </div>
            </div>
          </div>
        </div>
      </nav>


      {/* <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">Panel Title</h3>
        </div>
        <ul class="list-group">
          <li class="list-group-item"><a href="#">HTML</a></li>
          <li class="list-group-item"><a href="#">CSS</a></li>
          <li class="list-group-item"><a href="#">ECMAScript5</a></li>
        </ul>
      </div> */}





      {/* <nav class="text-center">
        <ul class="list-unstyled ">
          <li class="pt-4">
            <NavLink to="/mypage/userProfile">
              <button class="btn btn-light">
                <span class="h3">회원정보조회&nbsp;&nbsp;<i class="fas fa-address-book"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-4">
            <NavLink to="/mypage/userUpdate">
              <button class="btn btn-light">
                <span class="h3">회원정보수정&nbsp;&nbsp;<i class="far fa-address-book"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-3 border-bottom-0">
            <NavLink to="/mypage/userQuit">
              <button class="btn btn-light">
                <span class="h3">회원탈퇴&nbsp;&nbsp;<i class="fas fa-user-times"></i></span>
              </button>
            </NavLink>
          </li>


          <li class="pt-5">
            <NavLink to="/mypage/cart/list">
              <button class="btn btn-light">
                <span class="h3">장바구니 목록&nbsp;&nbsp;<i class="fas fa-shopping-cart"></i></span>
              </button>
            </NavLink>
          </li>
          <li class="pt-3">
            <NavLink to="/mypage/order/list">
              <button class="btn btn-light">
                <span class="h3">주문 내역&nbsp;&nbsp;<i class="fas fa-shopping-basket"></i></span>
              </button>
            </NavLink>
          </li>


          <li class="pt-5 pb-5">
            <NavLink to="/mypage/diary">
              <button class="btn btn-light">
                <span class="h3">독서노트&nbsp;&nbsp;<i class="far fa-clipboard"></i></span>
              </button>
            </NavLink>
            <br />
            <div class="btn-group mt-3" role="group" aria-label="Basic outlined example">
              <NavLink to="/mypage/diary/list"><button type="button" class="btn btn-outline-dark">목록 보기</button></NavLink>
              <NavLink to="/mypage/diary/write"><button type="button" class="btn btn-outline-dark">작성 하기</button></NavLink>
            </div>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default SideMenu;