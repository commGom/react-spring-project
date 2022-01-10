package com.ksa.project.repository;

import com.ksa.project.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {
    List<Book> findByCategory(String Category);
    List<Book> findByNameContaining(String name);
}
