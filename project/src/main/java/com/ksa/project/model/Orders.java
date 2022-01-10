package com.ksa.project.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

//주문 클래스(회원은 여러번 주문할 수 있다) Orders를 통해 주문한 여러 책을 주문한다
@Entity
@Getter @Setter
public class Orders {
    @Id @GeneratedValue
    private long id;
    @CreationTimestamp
    private LocalDateTime orderDate;
    private String orderState;
    private String orderAddress;
    private int orderCount;
    private int orderPrice;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;


    public static Orders createOrders(User user,Book book, int count){
        Orders orders=new Orders();
        orders.setUser(user);
        orders.setOrderAddress(user.getAddress1()+" "+user.getAddress2());
        orders.setOrderCount(count);
        orders.setBook(book);
        orders.setOrderPrice(count*book.getPrice());
        return orders;
    }
}
