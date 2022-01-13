package com.ksa.project.service;

import com.ksa.project.model.Book;
//import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
//@Slf4j
class BookServiceTest {
    @Autowired
    BookService bookService;

    //책 리스트 보여주기
    @Test
    public void showAllBooks(){
        List<Book> allBooks=bookService.showBookList();
//        log.info(allBooks.toString());
    }

    //카테고리에 대한 책 리스트
    @Test
    public void showBooksByCategory(){
        String category="소설";
        List<Book> allBooks=bookService.showBookListByCategory(category);
//        log.info(allBooks.toString());
    }

    //책 상세 페이지
    @Test
    public void detailBook(){
        //RED->GREEN->Refactoring
        //given : 무언가가 주어졌을 때,
        Long bookId=1L;     //책 번호가 주어졌을 때,
        //when : 이 상황에
        Book bookDetail = bookService.bookDetail(bookId);
        //then : 이 결과가 나와야한다.
        Assertions.assertEquals(bookId,bookDetail.getId());
    }

}