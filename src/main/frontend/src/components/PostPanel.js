import React from 'react';
import {Panel, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

const PostPanel = React.createClass({

    getInitialState() {
        return {value: ""};
    },

    handleChange(e) {
        this.setState({value: e.target.value});
    },

    render() {
        let buttonDisabled = this.state.value === "";
        return <Panel className="PostPanel">
            <FormGroup>
                <InputGroup>
                    <FormControl type="text"
                                 value={this.state.value}
                                 placeholder="Image URL"
                                 onChange={this.handleChange}/>
                    <InputGroup.Button>
                        <Button disabled={buttonDisabled} onClick={() => {
                            this.setState({value: ""});
                            this.props.onPost(this.state.value);
                        }}>POST</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </Panel>;
    }
});

export default PostPanel;