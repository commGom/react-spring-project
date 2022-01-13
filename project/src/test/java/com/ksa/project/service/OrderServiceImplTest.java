package com.ksa.project.service;

import com.ksa.project.model.Orders;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class OrderServiceImplTest {
    @Autowired
    private OrderService orderService;
    @Test
    void order() {
        //RED->GREEN->Refactoring

        //given : 무언가가 주어졌을 때,
        String userId="phyw1129@naver.com";
        String userPassword="1234";
        Long bookId=2L;
        int count=2;
        //when : 이 상황에
        Map<String, Object> order = orderService.order(userId, userPassword, bookId, count);
        //then : 이 결과가 나와야한다.
        assertEquals("success",order.get("msg"));
    }

    @Test
    void showOrderList() {
        //RED->GREEN->Refactoring

        //given : 무언가가 주어졌을 때,
        String userId="phyw1129@naver.com";
        String userPassword="1234";
        //when : 이 상황에
        List<Orders> orders = orderService.showOrderList(userId, userPassword);
        //then : 이 결과가 나와야한다.
    }
}