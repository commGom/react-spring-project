package com.ksa.project.controller;

import com.ksa.project.model.BookDiary;
import com.ksa.project.model.Orders;
import com.ksa.project.model.User;
import com.ksa.project.repository.BookRepository;
import com.ksa.project.repository.UserRepository;
import com.ksa.project.service.BookDiaryService;
import com.ksa.project.service.OrderService;
import com.ksa.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/mypage")
@CrossOrigin
public class MyPageController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private BookDiaryService bookDiaryService;
    @Autowired
    private UserService userService;


    //UserInfo update
    @PostMapping({"/userProfile"})
    public User editUser(String userId, String userPassword){

        return userService.checkUserInfo(userId, userPassword);
    }
    //UserInfo update
    @PutMapping("/userUpdate")
    public Map<String,Object> editUser(String userId, String userPassword, User user){
        return userService.updateUser(userId,userPassword,user);
    }


    @PostMapping("/diary/write")
    public Map<String,Object> writeDiary(Long bookId, Long userId, BookDiary bookDiary){
        return bookDiaryService.writeDiary(userId, bookId, bookDiary);
    }

    @PutMapping("/diary/update")
    public Map<String,Object> updateDiary(BookDiary bookDiary){
        return bookDiaryService.updateDiary(bookDiary);
    }

    @PostMapping("/diary/list")
    public List<BookDiary> bookDiaryList(Long userId){
        return bookDiaryService.diaryList(userId);
    }

    @GetMapping("/diary/{id}")
    public BookDiary bookDiaryDetail(@PathVariable Long id){
        return bookDiaryService.diaryDetail(id);
    }

    @DeleteMapping("/diary/delete")
    public Map<String,Object> deleteBookDiary(Long id,@RequestParam Long userId){
        return bookDiaryService.deleteDiary(id, userId);
    }


    @PostMapping("/orders/list")
    public List<Orders> showOrderList(String userId, String userPassword){
        return orderService.showOrderList(userId,userPassword);
    }

    @GetMapping("/diary/list")
    public Map<String, Object> bookDiaryList(Long userId, int page, @RequestParam(name="pageSize",defaultValue = "5") int pageSize){
        return bookDiaryService.diaryListOrderByLastUpdateWithPaging(userId,page,pageSize);
    }

    @PostMapping("/diary/list/sort")
    public Map<String, Object> bookDiaryListSorted(Long userId, int page, @RequestParam(name="pageSize",defaultValue = "5") int pageSize){
        return bookDiaryService.diaryListOrderByLastUpdateWithPaging(userId,page,pageSize);
    }


}
