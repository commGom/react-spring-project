package com.ksa.project.controller;

import com.ksa.project.model.Book;
import com.ksa.project.repository.BookRepository;
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

    @GetMapping("/category/{category}")
    public List<Book> showAllBookList(Model model, @PathVariable("category") String category){
        List<Book> booklist = bookRepository.findByCategory(category);
        return booklist;
    }
    @GetMapping("/detail/{bookid}")
    public Book showBook(Model model, @PathVariable("bookid") Long bookid){
        Optional<Book> book = bookRepository.findById(bookid);
        return book.get();
    }

    
}
