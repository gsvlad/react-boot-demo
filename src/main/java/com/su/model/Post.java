package com.su.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class Post {

    private static AtomicLong counter = new AtomicLong();

    private long id = counter.getAndIncrement();
    private String url;
    private int likes;
    private List<Comment> comments = new ArrayList<>();

    public Post(String url, String... comments) {

        this.url = url;
        this.comments = Arrays.stream(comments)
                .map(s -> new Comment("System", s))
                .collect(Collectors.toList());
    }
}