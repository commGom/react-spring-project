import { List } from 'antd/lib/form/Form';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
  const [orderlist, setOrderList] = useState([]);
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const formData = new FormData();
    formData.append("userId", email);
    formData.append("userPassword", password)
    const result = axios({
      url: 'http://3.138.243.7/mypage/orders/list',
      method: 'post',
      data: formData
    });
    result.then((res) => {
      console.log(res.data);
      setOrderList(res.data);
    });
  }, []);//deps

  return (
    <div class="col-9 mx-5 container mt-3">
      <h5 id="profile_title"><b>주문 내역</b></h5>
      <hr></hr>

      <table class="table mx-auto large">
        <thead>
          <tr>
            <th>주문일자</th>
            <th>도서명</th>
            <th>수량</th>
            <th>총 금액</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {orderlist.map( (v) => {
            console.log(v)
            return(
              <tr>
                <td>{v.orderDate}</td>
                <td>{v.book.name}</td>
                <td>{v.orderCount}개</td>
                <td>{v.orderPrice}원</td>
                <td>{v.orderAddress}</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;