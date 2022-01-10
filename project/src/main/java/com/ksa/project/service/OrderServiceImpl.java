package com.ksa.project.service;

import com.ksa.project.model.Book;
import com.ksa.project.model.Orders;
import com.ksa.project.model.User;
import com.ksa.project.repository.BookRepository;
import com.ksa.project.repository.OrdersRepository;
import com.ksa.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private OrdersRepository ordersRepository;


    @Override
    public Map<String,Object> order(String userId, String userPassword, Long bookId, int count) {
        //엔티티 조회 (회원확인 후 회원엔티티, 책번호로 책엔티티 조회)
        User findUser = userRepository.findByEmailAndPassword(userId, userPassword);
        Book orderedBook = bookRepository.findById(bookId).get();
        Map<String, Object> map = new HashMap<>();
        if (orderedBook.getStock()<count){
            //주문 실패
            map.put("msg", "fail");
        }else{
            //주문 생성
            Orders orders = Orders.createOrders(findUser,orderedBook, count);
            Orders save = ordersRepository.save(orders);
            orderedBook.setStock(orderedBook.getStock()-count);
            map.put("msg", "success");
            map.put("order",save);
        }
        return map;
    }

    @Override
    public List<Orders> showOrderList(String userId, String userPassword) {
        User findUser = userRepository.findByEmailAndPassword(userId, userPassword);
        List<Orders> OrderedBookList = ordersRepository.findByUser(findUser);
        return OrderedBookList;
    }
}
