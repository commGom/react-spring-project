package com.ksa.project.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@Data
public class User {
    @Id @GeneratedValue
    private long id;
    private String email;
    private String password;
    private String name;
    
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birth;
    
    private String phone;
    private String address1;
    private String address2;
    private int postcode;
    @CreationTimestamp
    private LocalDateTime createdDate;


};
