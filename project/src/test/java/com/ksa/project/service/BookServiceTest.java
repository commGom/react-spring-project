package com.ksa.project.service;

import com.ksa.project.model.Book;
//import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
//@Slf4j
class BookServiceTest {
    @Autowired
    BookService bookService;

    @Test
    public void showAllBooks(){
        List<Book> allBooks=bookService.showBookList();
//        log.info(allBooks.toString());
    }

    @Test
    public void showBooksByCategory(){
        String category="소설";
        List<Book> allBooks=bookService.showBookListByCategory(category);
//        log.info(allBooks.toString());
    }

}