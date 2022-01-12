package com.ksa.project.controller;

import com.ksa.project.model.Book;
import com.ksa.project.repository.BookRepository;
import com.ksa.project.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin
public class MainController {
  @Autowired
  BookRepository bookRepository;
  @Autowired
  private MainService mainService;

  @GetMapping("/mainList")
  public List<Book> showAllBookList(){
      int count = 10;
      return mainService.chooseRandomBooks(count);
  }
  @GetMapping("/mainList/{search}")
    public List<Book> searchBook(@PathVariable("search") String search){

      return mainService.searchBooks(search);
  }
}
