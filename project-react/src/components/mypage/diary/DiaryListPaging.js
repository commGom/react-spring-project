import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DiaryListPaging = () => {
  const navigate = useNavigate();
  let num = 0;
  const [diaryList, setDiaryList] = useState([]);
  // console.log(diaryList);
  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const formData = new FormData();
    formData.append("userId", id);
    const result = axios({
      url: 'http://3.138.243.7:8080/mypage/diary/list',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      // console.log(res);
      // console.log("DiaryList 비동기통신 결과:")
      // console.log(res.data);
      const responseData = res.data;
      setDiaryList(responseData);
    });
  }, []);//deps

  return (
    <div class="col-9 mx-auto">
      <div class="row">

        <div class="col-lg-3 ml-0">
          <h5 id="profile_title"><b>독서노트 목록</b></h5>
        </div>
        <div class="col-lg-5"></div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-12">
              <div class="input-group">
                <div class="form-outline  float-right">
                  <input id="search-focus" type="search" id="form1" class="form-control" style={{ width: "240px" }} placeholder="책 이름으로 검색" />
                </div>
                <button type="button" class="btn btn-dark">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-hover">
        <thead>
          <tr class="large">
            <th scope="col">#</th>
            <th scope="col">책 이름</th>
            <th scope="col">한 줄 평</th>
            <th scope="col">작성일</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {diaryList.map((diary) => {
            num += 1;
            return (
              <tr key={diary.id}>

                <th scope="row">{num}</th>
                <td>  <Link to={`/mypage/diary/detail/${diary.id}`}>{diary.book.name}</Link></td>
                <td>{diary.title}</td>

                <td>{new Date(diary.lastUpdatedDate).toISOString().slice(0, 10)}</td>
                <td>
                  <button class="btn btn-dark mr-2" data-id={diary.id} onClick={(e) => {
                    const id = e.target.dataset.id;
                    console.log(e.target.dataset.id);
                    navigate(`/mypage/diary/update/${id}`)
                  }}>수정</button>&nbsp;
                  <button class="btn btn-dark" data-id={diary.id}
                    onClick={(e) => {
                      const id = e.target.dataset.id;
                      const url = `http://localhost:8080/mypage/diary/delete`;
                      const userId = sessionStorage.getItem("userId");
                      axios({
                        url: url,
                        method: 'get',
                        params: { id, userId }
                      }).then((res) => {
                        const result = res.data;
                        // setDiaryList(result.diaryList);
                        alert(result.msg);

                        window.location.href = "/mypage/diary";
                      })
                    }}>삭제</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div class="row">
        <div class="col-md-3">
          <div class="input-group">
            <select class="form-select form-select-padding-x-sm" aria-label="select what kind sort you wanna watch" id="sort-type-select">
              <option>작성일 (최신순)</option>
              <option>책이름 오름차순</option>
              <option>책이름 내림차순</option>
            </select>
          </div>
        </div>

        <div class="col-md-6">
          <div>
            <nav aria-label="Page navigation" class="mx-4">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item"><a class="page-link" href="#">7</a></li>
                <li class="page-item"><a class="page-link" href="#">8</a></li>
                <li class="page-item"><a class="page-link" href="#">9</a></li>
                <li class="page-item"><a class="page-link" href="#">10</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-md-3">
          <div class="input-group">
            <select class="form-select form-select-padding-x-sm" aria-label="select how many documents are shown" id="pageSize-select">
              <option value="5">5개씩 보기</option>
              <option value="10">10개씩 보기</option>
              <option value="20">20개씩 보기</option>
              <option value="30">30개씩 보기</option>
            </select>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DiaryListPaging;