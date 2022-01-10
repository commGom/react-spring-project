import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


const WriteDiary = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [data, setData] = useState({ orderDate: new Date().toISOString().slice(0, 10), book: { imageurl: "/image/book/grey.jpg", author: '작가', } });
  console.log("dataList", dataList);
  console.log("책정보", data);
  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const formData = new FormData();
    formData.append("userId", email);
    formData.append("userPassword", password)
    const result = axios({
      url: 'http://localhost:8080/mypage/orders/list',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      console.log(res);
      console.log("WriteDiary 비동기통신 결과:")
      console.log(res.data);
      const responseData = res.data;
      // const books = dataList.map((data) => data.book);
      setDataList(responseData);
    });
  }, []);//deps
  return (

    <div class="col-9 mb-3 mx-5">
      <div class="row">
        <div class="col-md-5">
          <h5 id="profile_title" class="mb-3"><b>독서노트 작성</b></h5>
          <div class="card" style={{ height: "530px" }}>
            <div class="card-body" >
              <div style={{ width: "100%" }}>
                <img src={data.book.imageurl} onerror="this.src='/image/book/default-book.jpg'" class="rounded float-start img-fluid w-100" style={{ height: "500px" }} alt="책" />

              </div>
            </div>
          </div>
          <div class="card mt-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <th scope="row">책제목</th>
                <select name="bookId" id="bookId"
                  onChange={(e) => {
                    const bookId = e.target.value;
                    const bookInfo = dataList.find((data) => data.book.id == bookId);
                    console.log(bookInfo);
                    if (bookId == "") {
                      bookInfo = { orderDate: new Date().toISOString().slice(0, 10), book: { imageurl: "/image/book/grey.jpg", author: '작가', } };
                    }
                    setData(bookInfo);
                  }}>
                  <option value="" >선택</option>
                  {dataList.map((data) => {
                    return (
                      <option key={data.book.id} value={data.book.id}>{data.book.name}</option>
                    )
                  })}
                </select>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <th scope="row">작가</th>
                <span>{data.book.author}</span>

              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <th scope="row">구매일</th>
                <span>{data.orderDate}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <th scope="row">오늘 날짜</th>
                <span>{new Date().toISOString().slice(0, 10)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <h5 id="profile_title">느낀점</h5>
          <textarea name="thought" id="thought" style={{ width: "100%" }} rows="5" class="form-control">
          </textarea>
          <h5 class="text mt-3" id="profile_title">감상문</h5>
          <input type="text" name="title" id="title" class="form-control bg-warning bg-opacity-10 mb-1" placeholder="한 줄 평"></input>
          <textarea name="content" id="content" class="form-control" rows="17" placeholder="줄거리 입력">
          </textarea>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <button type="button" class="btn btn-dark"
              onClick={() => {
                const id = sessionStorage.getItem("userId");
                const email = sessionStorage.getItem("email");
                const password = sessionStorage.getItem("password");
                const formData = new FormData();
                formData.append("userId", id);
                formData.append("bookId", data.book.id)
                console.log("Book ID", data.id);
                const title = document.getElementById("title").value;
                const content = document.getElementById("content").value;
                const thought = document.getElementById("thought").value;
                formData.append("title", title);
                formData.append("content", content);
                formData.append("thought", thought);
                const result = axios({
                  url: 'http://localhost:8080/mypage/diary/write',
                  method: 'post',
                  data: formData
                });
                result.then((res) => {
                  console.log(res);
                  console.log("WriteDiary 작성 후 비동기통신 결과:")
                  console.log(res.data);
                  window.location.href = "/mypage/diary";
                  const result = res.data;
                  if (result.code == 200) {
                    navigate("/mypage");
                  } else if (result.code == 400) {
                    alert(result.msg);
                    window.location.href = "/mypage/diary/write";
                  }
                });
              }}>작성하기</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default WriteDiary;