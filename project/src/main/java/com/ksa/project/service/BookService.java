package com.ksa.project.service;

import com.ksa.project.model.Book;

import java.util.List;


public interface BookService {
    List<Book> showBookList();
    List<Book> showBookListByCategory(String category);

}
