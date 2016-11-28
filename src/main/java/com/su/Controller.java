package com.su;

import com.su.model.Comment;
import com.su.model.Post;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

@RestController
public class Controller {

    private List<Post> posts = new CopyOnWriteArrayList<>();

    @PostConstruct
    public void generate() {
        posts.add(new Post("http://wfiles.brothersoft.com/m/mac-os-x-lake_88093-800x600.jpg"));
        posts.add(new Post("https://tl.5ko.fr/uploads/T/Fractal_Broccoli.jpg"));
        posts.add(new Post("http://iipix.com/wallpaper/pics/katasunsethor800.jpg", "This one is nice!"));
    }

    @RequestMapping("/posts")
    public List<Post> getPosts() {
        return posts;
    }

    @RequestMapping("/post/{id}")
    public Post getPost(@PathVariable long id) {
        return posts.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST, consumes = "text/plain")
    public void post(@RequestBody String url) throws UnsupportedEncodingException {
        posts.add(new Post(url));
    }

    @RequestMapping(value = "/post/delete/{id}", method = RequestMethod.POST)
    public void deletePost(@PathVariable long id) {
        posts = posts.stream().filter(p -> p.getId() != id).collect(Collectors.toList());
    }

    @RequestMapping(value = "/post/like/{id}", method = RequestMethod.POST)
    public void like(@PathVariable long id) {
        posts.stream().filter(p -> p.getId() == id).findFirst().ifPresent(p -> p.setLikes(p.getLikes() + 1));
    }

    @RequestMapping(value = "/post/message", method = RequestMethod.POST)
    public void message(@RequestBody CommentReq c) {
        Comment comment = new Comment(c.getAuthor(), c.getText());
        posts.stream().filter(p -> p.getId() == c.getId()).findFirst().ifPresent(p -> p.getComments().add(comment));
    }
}

@Data
class CommentReq {
    private long id;
    private String author;
    private String text;
}