package com.ksa.project.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BookDiaryRepositoryTest {
    @Autowired
    BookDiaryRepository bookDiaryRepository;

    @Test
    public void saveOneDiary(){
        bookDiaryRepository.findAll();
    }


}