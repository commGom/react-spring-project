package com.ksa.project.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Book {
    @Id @GeneratedValue
    private long id;
    private String name;
    private String category;
    private String author;
    private String publisher;
    private int price;
    private String imageurl;
    private int stock;
    @Column(length = 5000)
    private String description;
}
