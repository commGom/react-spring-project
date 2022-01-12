package com.ksa.project.controller;

import com.ksa.project.model.Book;
import com.ksa.project.repository.BookRepository;
import com.ksa.project.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {
    @Autowired
    BookRepository bookRepository;
    @Autowired
    private BookService bookService;

    @GetMapping("/category/{category}")
    public List<Book> showAllBookList(@PathVariable("category") String category){
        return bookService.showBookListByCategory(category);
    }
    @GetMapping("/detail/{bookid}")
    public Book showBook(@PathVariable("bookid") Long bookid){
        return bookService.bookDetail(bookid);
    }

    
}
