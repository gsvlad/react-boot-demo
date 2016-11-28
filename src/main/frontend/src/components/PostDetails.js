import React from 'react';
import Comment from './Comment';
import PostComment from './PostComment';
import {Panel} from 'react-bootstrap';


let PostDetails = (props) => {
    return <div className="container PostDetails">
        <Panel>
            <img src={props.post.url}
                 alt="Can't load"
                 onClick={props.onBack}/>
        </Panel>
        <div className="PostDetails__comments">
            <div>
                {
                    props.post.comments.map((c, i) =>
                        <Comment key={i}
                                 author={c.author}
                                 time={c.time}
                                 text={c.text}/>
                    )
                }
            </div>
            <PostComment onMessage={(author, text) => props.onMessage(props.post.id, author, text)}/>
        </div>
    </div>
};

export default PostDetails;