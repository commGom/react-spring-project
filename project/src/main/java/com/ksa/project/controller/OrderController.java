package com.ksa.project.controller;

import com.ksa.project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/view")
    public void orderView(String userId, String userPassword, Long bookId, int count){
        System.out.println(userId + userPassword);
        orderService.order(userId, userPassword, bookId, count);
    }

}
