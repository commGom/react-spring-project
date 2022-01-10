package com.ksa.project.repository;

import com.ksa.project.model.Orders;
import com.ksa.project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders,Long> {
    List<Orders> findByUser(User user);

}
