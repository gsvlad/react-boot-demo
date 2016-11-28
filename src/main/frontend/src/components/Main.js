import React from 'react';
import Content from './Content';
import Navigation from './Navigation';
import PostDetails from './PostDetails';
import $ from 'jquery';
import {Route, Router, browserHistory} from 'react-router';
import InitialData from './InitialData';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: InitialData
        };
        this.onDeletePost = this.onDeletePost.bind(this);
        this.updatePosts = this.updatePosts.bind(this);
        this.onNewPost = this.onNewPost.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onChoose = this.onChoose.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onBack = this.onBack.bind(this);
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        $.get("/posts", (data) => {
            this.setState({posts: data})
        });
    }

    onDeletePost(id) {
        $.post("/post/delete/" + id, null, () => this.updatePosts());
    }

    onNewPost(url) {
        $.ajax({
            type: "POST",
            url: "/post",
            dataType: "text",
            contentType: "text/plain",
            data: url,
            success: () => this.updatePosts()
        });
    }

    onLike(id) {
        $.post("/post/like/" + id, null, () => this.updatePosts());
    }

    onChoose(id) {
        browserHistory.push("/post/" + id);
    }

    onBack() {
        browserHistory.push("/");
    }

    onMessage(id, author, text) {
        $.ajax({
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/post/message",
            data: JSON.stringify({id: id, author: author, text: text}),
            success: () => this.updatePosts(),
            error: () => this.updatePosts()
        });
    }

    render() {
        let ContentWrapper = () => <Content posts={this.state.posts}
                                            onDelete={this.onDeletePost}
                                            onLike={this.onLike}
                                            onChoose={this.onChoose}
                                            onPost={this.onNewPost}/>;

        let PostDetailsWrapper = (props) => {
            let activePostId = props.params.id;
            let post = this.state.posts.find(p => p.id == activePostId);

            return <PostDetails post={post}
                                onMessage={this.onMessage}
                                onBack={this.onBack}/>;
        };
        return <div>
            <Navigation/>
            <Router history={browserHistory}>
                <Route path="/" component={ContentWrapper}/>
                <Route path="/post/:id" component={PostDetailsWrapper}/>
            </Router>
        </div>;
    }
}

export default Main;