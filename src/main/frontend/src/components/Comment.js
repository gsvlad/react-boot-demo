import React from 'react';
import {Panel} from 'react-bootstrap';
import Moment from 'react-moment';

class Comment extends React.Component {

    render() {
        return <Panel className="Comment">
            <div className="Comment__info">
                <div className="Comment__author">{this.props.author}</div>
                <div className="Comment__time">
                    <Moment date={new Date(this.props.time)} format="DD.MM.YYYY HH:mm"/>
                </div>
            </div>
            <div className="Comment__text">
                <span>{this.props.text}</span>
            </div>
        </Panel>;
    }
}

export default Comment;