package com.ksa.project.controller;

import com.ksa.project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/book")
    public Map<String,Object> orderView(String userId, String userPassword, Long bookId, int count){
        return orderService.order(userId, userPassword, bookId, count);
    }

}
