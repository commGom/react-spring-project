package com.ksa.project.service;

import com.ksa.project.model.User;
import com.ksa.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl {
    @Autowired
    UserRepository userRepository;

    public User emailCheck(String email) throws Exception {
        //이메일 정보
        User result = userRepository.findByEmail(email);
        return result;
    }
};

