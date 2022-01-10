package com.ksa.project.repository;

import com.ksa.project.model.Book;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
class BookRepositoryTest {

    @Autowired
    BookRepository bookRepository;

    @Test
    public void bookList(){
        List<Book> all = bookRepository.findAll();
        log.info(all.toString());
    }

    @Test
    public void BookListByCategory(){
        List<Book> books=bookRepository.findByCategory("소설");
        log.info(books.toString());
    }

}