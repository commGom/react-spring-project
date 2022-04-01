import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ pageSize, currentPage, onPageChange }) => {
  console.log("Props로 받아온 값들", pageSize, currentPage, onPageChange);
  const [pageCount, setPageCount] = useState(0);
  const [pages, setPages] = useState([]);

  console.log("Pagination.js에서::::");
  console.log(pageCount);
  console.log(pages);
  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const formData = new FormData();
    formData.append("userId", id);
    formData.append("page", currentPage);
    formData.append("pageSize", pageSize);
    const result = axios({
      url: 'http://3.138.243.7/mypage/diary/list/sort',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      console.log(res);
      console.log("Pagination 비동기통신 결과:")
      console.log(res.data);
      const pageInfo = res.data.pageInfo;
      const totalPageCount = pageInfo.totalPageCount;
      console.log("totalPageCount:::", totalPageCount);
      setPageCount(totalPageCount);
      const length = pageInfo.page + pageInfo.pageListSize > totalPageCount ? totalPageCount - pageInfo.page + 1 : pageInfo.pageListSize;
      console.log(`전체 페이지 수 : ${totalPageCount}, 페이지 length : ${length}`);
      const tmpPages = Array.from({ length: length }, (v, i) => {
        console.log(`v값은 ${v}, i값은 ${i}`);
        return i + (pageInfo.page);
      });
      setPages(tmpPages);
    });
  }, [currentPage]);//deps
  if (pageCount == 1) return null;
  return (
    <nav aria-label="Page navigation" class="mx-4">

      <ul class="pagination dark">
        <li class={currentPage == 1 ? "page-item disabled" : "page-item"}
          onClick={() => { if (currentPage > 1) onPageChange(currentPage - 1) }}>
          <Link class="page-link" to="#" tabindex="-1">Previous</Link>
        </li>
        {pages.map(page => {
          if (pages.length > 0) {
            return (
              <li className={currentPage == page ? `page-item active` : `page-item`}
                key={page}
                onClick={() => { onPageChange(page) }}>
                <Link class="page-link" to="#" tabindex="-1">{page}</Link>
              </li>
            )
          }
        })}
        <li class={currentPage == 1 ? "page-item disabled" : "page-item"}
          onClick={() => { onPageChange(currentPage + 1) }}>
          <Link class="page-link" to="#" tabindex="-1">Next</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;