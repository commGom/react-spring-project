import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const UpdateDiary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("Update Diary ID:", id);
  const [data, setData] = useState({ book: { name: "책제목", imageurl: "/image/book/default-book.jpg", author: '작가', } });
  useEffect(() => {

    const result = axios({
      url: `http://localhost:8080/mypage/diary/${id}`,
      method: 'get',
    });
    result.then((res) => {
      const responseData = res.data;
      console.log(responseData);
      setData(responseData);
    });
  }, []);//deps


  return (
    <div class="col-9 mb-3 mx-5">
      <div class="row">
        <div class="col-md-5">
          <h5 id="profile_title" class="mb-3"><b>독서노트 수정</b></h5>
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
                <span>{data.book.name}</span>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <th scope="row">작가</th>
                <span>{data.book.author}</span>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <th scope="row">최초작성일</th>
                <span>{data.writtenDate}</span>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <th scope="row">최종작성일</th>
                <span>{data.lastUpdatedDate}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData();
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            const thought = document.getElementById("thought").value;
            formData.append("id", id);
            formData.append("title", title);
            formData.append("content", content);
            formData.append("thought", thought);
            const result = axios({
              url: 'http://localhost:8080/mypage/diary/update',
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
                window.location.href = `/mypage/diary/update/${id}`;
              }
            });
          }}>
            <h5 id="profile_title">느낀점</h5>

            <textarea name="thought" id="thought" style={{ width: "100%" }} rows="5" class="form-control" value={data.thought} required
              onChange={(e) => {
                setData({ ...data, thought: e.target.value })
              }}>

            </textarea>
            <h5 class="text mt-3" id="profile_title">감상문</h5>
            <input type="text" name="title" id="title" class="form-control bg-warning bg-opacity-10 mb-1" placeholder="한 줄 평" value={data.title} required
              onChange={(e) => {
                setData({ ...data, title: e.target.value })
              }}></input>
            <textarea name="content" id="content" class="form-control" rows="17" placeholder="줄거리 입력" value={data.content} required
              onChange={(e) => {
                setData({ ...data, content: e.target.value })
              }}>
            </textarea>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
              <button type="submit" class="btn btn-dark">수정완료</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDiary;