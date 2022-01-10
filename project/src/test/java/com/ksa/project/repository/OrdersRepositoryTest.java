package com.ksa.project.repository;

import com.ksa.project.model.Book;
import com.ksa.project.model.Orders;
import com.ksa.project.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class OrdersRepositoryTest {
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;

    @Test
    public void addOrders(){
        //엔티티 조회 (회원확인 후 회원엔티티, 책번호로 책엔티티 조회)
        User findUser = userRepository.findByEmailAndPassword("vkdnjehdwls@naver.com", "1234");
        Long num=30L;
        for (int i = 0; i < 10; i++) {
            num=num+1L;
            Book orderingBook = bookRepository.findById(num).get();
            //주문 생성
            Orders orders=Orders.createOrders(findUser,orderingBook,1);
            ordersRepository.save(orders);
        }

    }
}