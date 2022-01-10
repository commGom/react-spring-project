package com.ksa.project.service;

import com.ksa.project.model.Book;
import com.ksa.project.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BookServiceImpl implements BookService{
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> showBookList() {

        return bookRepository.findAll();
    }

    @Override
    public List<Book> showBookListByCategory(String category) {

        return bookRepository.findByCategory(category);
    }
}
