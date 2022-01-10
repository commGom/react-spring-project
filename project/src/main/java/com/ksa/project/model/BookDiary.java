package com.ksa.project.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
public class BookDiary {
    @Id @GeneratedValue
    private long id;
    @CreationTimestamp
    private LocalDateTime writtenDate;
    @UpdateTimestamp
    private LocalDateTime lastUpdatedDate;
    private String content;
    private String thought;
    private String title;
    @OneToOne
    private Book book;
    @ManyToOne
    private User user;
    @OneToOne(mappedBy = "bookDiary")
    FileAttach fileAttach;

    @Builder
    public BookDiary(String content, String thought, String title, Book book, User user) {
        this.content = content;
        this.thought = thought;
        this.title = title;
        this.book = book;
        this.user = user;
    }
}
