import { isDisabled } from '@testing-library/user-event/dist/utils';
import { List } from 'antd/lib/form/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BookDetailView.css';

const BookDetailView = () => {
    const { bookid } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const result = axios({
            url: `http://localhost:8080/book/detail/${bookid}`,
            method: 'get'
        });
        result.then((res) => {
            console.log(res);
            console.log(res.data);
            setBook(res.data);
        });
    }, []);//deps

    return (
        <section>
            <div id="bookstyle">
                <div class="row">
                    <div class="col-md-2 mr-5"></div>
                    <div class="col-md-3 mx-5"><img class="card-img-top mb-5 mt-3" src={book.imageurl} alt="..." /></div>
                    <div class="col-md-5 mx-3">
                        <hr></hr>
                        <h3 class="mt-lg-5 fw-bolder" style={{'fontSize': '30px'}}>{book.name}</h3>
                        <div class="mb-1"  id="point"><b>{book.author}</b> 지음 | {book.publisher}</div>
                        <div class="fs-5 mb-5 mt-2">
                            <span><small>판매가 : </small><b><font color="red">{book.price}원</font></b></span>
                        </div>
                        <p class="text-dark mb-5" id="point">[추가적립] 5만원 이상 구매 시 2,000원 추가적립 안내<br></br>
                            [회원혜택] 회원 등급 별, 3만원 이상 구매 시 2~4% 추가적립 안내<br></br>
                            [리뷰적립] 리뷰 작성 시 e교환권 최대 300원 추가적립 안내</p>
                    
                        <div class="d-flex">
                            <button type='button' id="btn_minus" class="btn btn-outline-dark" datatype='minus' onClick={ (e) => {
                                e.preventDefault();
                                if(document.getElementById("inputQuantity").value == 1){
                                    document.getElementById("inputQuantity").value=1;
                                } else{
                                document.getElementById("inputQuantity").value--;
                                }
                            }}> <span>-</span></button>
                            <input class="form-control text-center border-dark" id="inputQuantity" type="num" value="1"/>
                            <button type='button' class="btn btn-outline-dark" datatype='plus' onClick={ (e) => {
                                e.preventDefault();
                                if(document.getElementById("inputQuantity").value == 100){
                                    document.getElementById("inputQuantity").value=100;
                                } else{
                                    document.getElementById("inputQuantity").value++;
                                }
                            }}><span>+</span></button>
                           
                        </div>
                        <br></br>
                        <button class="btn btn-outline-dark flex-shrink-0 me-2" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                            <button class="btn btn-outline-dark flex-shrink-0" type="button"
                                onClick={(e)=>{
                                    e.preventDefault();

                                    const formData = new FormData();
                                    const userid = sessionStorage.getItem("email");
                                    const userpw = sessionStorage.getItem("password");
                                    formData.append("userId", userid);
                                    formData.append("userPassword", userpw);
                                    formData.append("bookId", bookid);
                                    formData.append("count",document.getElementById("inputQuantity").value);

                                    const result = axios({
                                        url : 'http://localhost:8080/order/view',
                                        method: 'post',
                                        data : formData
                                    });
                                    

                                    if(sessionStorage.getItem("userId")){
                                        alert("주문 완료");
                                    }else {
                                        window.location.href="/user/signin"
                                    }
                                }}>
                                <i class="bi-cart-fill me-1"></i>
                                주문하기
                            </button>
                    </div>
                </div>

                <div class="row"></div>
                <div class="col-md-9 mx-auto">
                    <hr></hr>

                </div>

                <div class="col-md-6  mx-auto">
                    <img class="border card-img-top mt-5 mb-md-0" src={book.description} alt="..." /></div>
            </div>


        </section>

    )
};

export default BookDetailView;