import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const DiaryList = () => {
  const navigate = useNavigate();

  const [diaryList, setDiaryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  let num = ((currentPage - 1) * pageSize);
  // console.log(diaryList);
  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const formData = new FormData();
    formData.append("userId", id);
    formData.append("page", currentPage);
    formData.append("pageSize", pageSize);
    const result = axios({
      url: 'http://3.138.243.7:8080/mypage/diary/list/sort',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      // console.log(res);
      console.log("DiaryList 비동기통신 결과:")
      console.log(res.data);
      const responseData = res.data;
      setDiaryList(responseData.diaryList);
    });
  }, [pageSize]);//deps
  //현재 페이지 page 를 전해서 List-Page 결과를 받아서 글 목록 데이터 받기
  const handlePageChange = (page) => {
    const id = sessionStorage.getItem("userId");
    const formData = new FormData();
    formData.append("userId", id);
    formData.append("page", page);
    formData.append("pageSize", pageSize);
    const result = axios({
      url: 'http://localhost:8080/mypage/diary/list/sort',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      // console.log(res);
      console.log("handlePageChange에서 DiaryList 비동기통신 결과:")
      console.log(res.data);
      const responseData = res.data;
      setDiaryList(responseData.diaryList);
    });
    setCurrentPage(page);
  }

  return (
    <div class="col-9 mx-auto">
      <div class="row mb-3">

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

      <table class="table table-hover mb-4">
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
                <td>  <Link to={`/mypage/diary/detail/${diary.id}`} style={{ color: 'black' }}>{diary.book.name}</Link></td>
                <td>{diary.title}</td>

                <td>{new Date(diary.lastUpdatedDate).toISOString().slice(0, 10)}</td>
                <td style={{ textAlign: "right" }}>
                  <button class="btn mr-2 btn-sm btn-light" style={{ borderRadius: "12px" }} data-id={diary.id} onClick={(e) => {
                    const id = e.target.dataset.id;
                    console.log(e.target.dataset.id);
                    navigate(`/mypage/diary/update/${id}`)
                  }}>수정</button>&nbsp;
                  <button class="btn btn-light btn-sm" data-id={diary.id} style={{ borderRadius: "12px" }}
                    onClick={(e) => {
                      const id = e.target.dataset.id;
                      const url = `http://localhost:8080/mypage/diary/delete`;
                      const userId = sessionStorage.getItem("userId");
                      axios({
                        url: url,
                        method: 'delete',
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
        <div class="col-md-1">
        </div>

        <div class="col-md-8">
          <div>
            <Pagination pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
          </div>
        </div>
        <div class="col-md-3">
          <div class="input-group">
            <select class="form-select form-select-padding-x-sm" aria-label="select how many documents are shown" id="pageSize-select"
              onChange={(e) => {
                setCurrentPage(1);
                setPageSize(e.target.value);
              }}>
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

export default DiaryList;