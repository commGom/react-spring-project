package com.ksa.project.service;

import com.ksa.project.model.User;

import java.util.Map;

public interface UserService {
    User emailCheck(String email);
    Map<String,Object> updateUser(String userId, String userPassword, User user);
    User checkUserInfo(String userId, String userPassword);
};
