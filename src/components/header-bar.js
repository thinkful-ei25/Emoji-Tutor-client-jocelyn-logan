import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './header-bar.css'

export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoutMessage: ''
        };
    }
    logOut() {
        this.setState({
            logoutMessage: 'You are now logging out'
        });
        setTimeout(() => {
            this.setState({
                logoutMessage: ''
            });
            this.props.dispatch(clearAuth());
            clearAuthToken();
        }, 1500);
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <header>
                <div className="col-12 header-bar">
                    <h1>Emoji Tutor</h1>
                    <div className="logout-button">{logOutButton}</div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
