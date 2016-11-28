import React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

class HlamItem extends React.Component {

    removeSignHidden = {style: {visibility: "hidden"}};
    removeSignVisible = {style: {visibility: "visible"}};

    constructor() {
        super();
        this.state = this.removeSignHidden;
    }

    render() {
        let post = this.props.post;
        return <Panel className="HlamItem"
                      onMouseEnter={() => this.setState(this.removeSignVisible)}
                      onMouseLeave={() => this.setState(this.removeSignHidden)}>


            <img src={post.url}
                 alt="Can't load hlam"
                 onClick={this.props.onChoose}/>

            <RemoveSign visibilityStyle={this.state.style}
                        onDelete={this.props.onDelete}/>

            <InfoPanel likes={post.likes}
                       comments={post.comments.length}
                       onLike={this.props.onLike}/>
        </Panel>;
    }
}

let RemoveSign = (props) => {
    return <div className="HlamItem__remove"
                onClick={props.onDelete}
                style={props.visibilityStyle}>
        <Glyphicon glyph="remove"/>
    </div>
};

let InfoPanel = (props) => {
    return <div>
        <div className="HlamItem__stats HlamItem__likes"
             onClick={props.onLike}>
            <Glyphicon glyph="heart"/> {props.likes}
        </div>
        <div className="HlamItem__stats HlamItem__comments">
            <Glyphicon glyph="comment"/> {props.comments}
        </div>
    </div>
};

export default HlamItem;