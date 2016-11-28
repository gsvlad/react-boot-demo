import React from 'react';
import {Navbar} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class Navigation extends React.Component {
    render() {
        return <Navbar>
            <Navbar.Header>
                <Navbar.Brand onClick={() => browserHistory.push("/")}>
                    <img src="./icon.png" alt="Icon" className="Navbar__logo"/>Instahlam
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>;
    }
}

export default Navigation;