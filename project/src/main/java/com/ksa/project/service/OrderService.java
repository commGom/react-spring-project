package com.ksa.project.service;

import com.ksa.project.model.Orders;

import java.util.List;

public interface OrderService {

    void order(String userId, String userPassword, Long bookId, int count);    //책 주문하기(수량 결정가능)
    List<Orders> showOrderList(String userId, String userPassword);             //결제한 책 목록
}
