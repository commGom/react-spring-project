package com.ksa.project.controller;

import com.ksa.project.model.BookDiary;
import com.ksa.project.model.Orders;
import com.ksa.project.model.User;
import com.ksa.project.repository.BookRepository;
import com.ksa.project.repository.UserRepository;
import com.ksa.project.service.BookDiaryService;
import com.ksa.project.service.OrderService;
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
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;


    //UserInfo update
    @PostMapping({"/userProfile"})
    public User editUser(String userId, String userPassword){
        System.out.println(userId+userPassword);
        User findUser = userRepository.findByEmailAndPassword(userId, userPassword);
        return findUser;
    }
    //UserInfo update
    @PutMapping("/userUpdate")
    public Map<String,Object> editUser(String userId, String userPassword, User user){
        System.out.println(userId+","+userPassword+":"+user);
        User findUser = userRepository.findByEmailAndPassword(userId, userPassword);
        HashMap<String,Object> map=new HashMap<>();
        if (findUser!=null){
            findUser.setPassword(user.getPassword());
            findUser.setAddress1(user.getAddress1());
            findUser.setAddress2(user.getAddress2());
            findUser.setPostcode(user.getPostcode());
            findUser.setPhone(user.getPhone());
            map.put("result","success");
            map.put("code",200);
            map.put("user",findUser);
            userRepository.save(findUser);
        }else{
            map.put("result","fail to update user's information");
            map.put("code",400);
        }
        return map;
    }


    @PostMapping("/diary/write")
    public Map<String,Object> writeDiary(Long bookId, Long userId, BookDiary bookDiary){
        HashMap<String,Object> map=new HashMap<>();
        System.out.println(bookId+":"+userId+""+bookDiary.getTitle());
        BookDiary saveBookDiary = bookDiaryService.writeDiary(userId, bookId, bookDiary);
        if (saveBookDiary!=null){
            map.put("code",200);
            map.put("msg","작성 성공");
            map.put("saveInfo",saveBookDiary);
        }else{
            map.put("code",400);
            map.put("msg","작성 실패");
        }
        return map;
    }

    @PutMapping("/diary/update")
    public Map<String,Object> updateDiary(BookDiary bookDiary){
        HashMap<String,Object> map=new HashMap<>();
        BookDiary changeBookDiary = bookDiaryService.updateDiary(bookDiary);
        if (changeBookDiary!=null){
            map.put("code",200);
            map.put("msg","수정 성공");
            map.put("saveInfo",changeBookDiary);
        }else{
            map.put("code",400);
            map.put("msg","작성 실패");
        }
        return map;
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
        Map<String, Object> map = new HashMap<>();
        List<BookDiary> bookDiaries = bookDiaryService.deleteDiary(id, userId);
        //삭제 후 BookDiary의 리스트를 반환
        map.put("bookDiary",bookDiaries);
        map.put("code",200);
        map.put("msg",id+"번 글이 삭제되었습니다.");
        return map;
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
