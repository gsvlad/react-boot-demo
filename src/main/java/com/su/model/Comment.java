package com.su.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class Comment {
    private long time;
    private String author;
    private String text;

    public Comment(String author, String text) {
        this.time = new Date().getTime();
        this.author = author;
        this.text = text;
    }
}
