package com.ksa.project.service;

import com.ksa.project.dto.PageDTO;
import com.ksa.project.model.Book;
import com.ksa.project.model.BookDiary;
import com.ksa.project.model.User;
import com.ksa.project.repository.BookDiaryRepository;
import com.ksa.project.repository.BookRepository;
import com.ksa.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookDiaryServiceImpl implements BookDiaryService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private BookDiaryRepository bookDiaryRepository;

    //독서노트 작성하기
    @Override
    public BookDiary writeDiary(Long user_id, Long book_id, BookDiary bookDiary) {
        User findUser = userRepository.findById(user_id).get();
        Book book = bookRepository.findById(book_id).get();
        bookDiary.setBook(book);
        bookDiary.setUser(findUser);

        BookDiary saveDiary = bookDiaryRepository.save(bookDiary);
        return saveDiary;
    }

    //독서 노트 리스트
    @Override
    public List<BookDiary> diaryList(Long userId) {
        User findUser = userRepository.findById(userId).get();
//        findAll(Sort.by(Sort.Direction.DESC, "id"));
        List<BookDiary> diaryList = bookDiaryRepository.findByUser(findUser);
        return diaryList;
    }

    //독서 노트 상세 내용
    @Override
    public BookDiary diaryDetail(Long id) {
        BookDiary bookDiary = bookDiaryRepository.findById(id).get();
        return bookDiary;
    }

    //독서 노트 삭제
    @Override
    public List<BookDiary> deleteDiary(Long id,Long userId) {
        bookDiaryRepository.deleteById(id);
        //삭제 후 BookDiary의 리스트를 반환
        User findUser = userRepository.findById(userId).get();
        return bookDiaryRepository.findByUser(findUser);

    }

    //독서 노트 수정
    @Override
    public BookDiary updateDiary(BookDiary bookDiary) {
        BookDiary findDiary = bookDiaryRepository.findById(bookDiary.getId()).get();
        findDiary.setContent(bookDiary.getContent());
        findDiary.setThought(bookDiary.getThought());
        findDiary.setTitle(bookDiary.getTitle());
        BookDiary save = bookDiaryRepository.save(findDiary);
        return save;
    }

    @Override
    public Map<String,Object> diaryListWithPaging(Long userId, int page, int pageSize) {
        User findUser = userRepository.findById(userId).get();
        List<BookDiary> totalBookListByUser = bookDiaryRepository.findByUser(findUser);
        PageDTO pageDTO=PageDTO.createPageDTOwithPageSize(page,pageSize,totalBookListByUser.size());
        PageRequest pageRequest = pageDTO.createPageRequest();

        //페이징 처리한 페이지 리스트
        List<BookDiary> diaryList = bookDiaryRepository.findByUser(findUser, pageRequest).getContent();

        Map<String,Object> map=new HashMap<>();
        map.put("diaryList",diaryList);
        map.put("pageInfo",pageDTO);
        return map;
    }

    @Override
    public Map<String,Object> diaryListOrderByLastUpdateWithPaging(Long userId, int page, int pageSize) {
        User findUser = userRepository.findById(userId).get();
        List<BookDiary> totalBookListByUser = bookDiaryRepository.findByUser(findUser);
        PageDTO pageDTO=PageDTO.createPageDTOwithPageSize(page,pageSize,totalBookListByUser.size());
        PageRequest pageRequest = pageDTO.createPageRequest();

        //페이징 처리한 페이지 리스트
        List<BookDiary> diaryList = bookDiaryRepository.findByUserOrderByLastUpdatedDateDesc(findUser, pageRequest).getContent();

        Map<String,Object> map=new HashMap<>();
        map.put("diaryList",diaryList);
        map.put("pageInfo",pageDTO);
        return map;
    }
}
