import React from 'react';
import PostPanel from './PostPanel';
import HlamGrid from './HlamGrid';

let Content = (props) => {
    return <div className="container">
        <PostPanel onPost={props.onPost}/>
        <HlamGrid posts={props.posts}
                  onDelete={props.onDelete}
                  onLike={props.onLike}
                  onChoose={props.onChoose}/>
    </div>;
};

export default Content;