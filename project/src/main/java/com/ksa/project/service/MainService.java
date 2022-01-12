package com.ksa.project.service;

import com.ksa.project.model.Book;

import java.util.List;

public interface MainService {
    List<Book> searchBooks(String search);
    List<Book> chooseRandomBooks(int count);
}
