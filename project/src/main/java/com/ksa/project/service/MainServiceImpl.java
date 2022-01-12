package com.ksa.project.service;

import com.ksa.project.model.Book;
import com.ksa.project.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class MainServiceImpl implements MainService{
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> searchBooks(String search) {
        return bookRepository.findByNameContaining(search);
    }

    @Override
    public List<Book> chooseRandomBooks(int count) {
        List<Book> bookList = bookRepository.findAll();
        Collections.shuffle(bookList);
        return bookList.subList(0, count);
    }
}
