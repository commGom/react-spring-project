package com.ksa.project.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Data
@Entity
public class FileAttach {
    @Id
    @GeneratedValue
    private long id;

    private String fileName;

    @OneToOne
    private BookDiary bookDiary;
}
