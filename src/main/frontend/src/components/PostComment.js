import React from 'react';
import {Panel, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

const PostComment = React.createClass({

    getInitialState() {
        return {author: "", text: ""};
    },

    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    },

    handleTextChange(e) {
        this.setState({text: e.target.value});
    },

    render() {
        let buttonDisabled = this.state.author === "" || this.state.text === "";
        return <Panel className="PostComment">
            <FormGroup>
                <FormControl componentClass="textarea"
                             value={this.state.text}
                             placeholder="Your message"
                             onChange={this.handleTextChange}/>
            </FormGroup>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text"
                                 value={this.state.author}
                                 placeholder="Your name"
                                 onChange={this.handleAuthorChange}/>
                    <InputGroup.Button>
                        <Button disabled={buttonDisabled} onClick={() => {
                            this.setState({author: "", text: ""});
                            this.props.onMessage(this.state.author, this.state.text);
                        }}>POST</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </Panel>;
    }
});

export default PostComment;