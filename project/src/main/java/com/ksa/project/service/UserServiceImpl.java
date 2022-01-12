package com.ksa.project.service;

import com.ksa.project.model.User;
import com.ksa.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    public User emailCheck(String email){
        //이메일 정보
        User result = userRepository.findByEmail(email);
        return result;
    }

    public Map<String,Object> updateUser(String userId, String userPassword, User user){
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

    @Override
    public User checkUserInfo(String userId, String userPassword) {
        return userRepository.findByEmailAndPassword(userId, userPassword);
    }
};

