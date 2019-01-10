import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { resetState } from '../actions/questions';
import './header-bar.css';

export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoutMessage: ''
        };
    }
    componentDidUpdate() {
        if (this.props.showProgress && !this.state.logoutMsg) {
            document.getElementById('progress').scrollIntoView();
        }
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
            this.props.dispatch(resetState);
            clearAuthToken();
        }, 1500);
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        let showLogout = (
            <div className="logout-button">{logOutButton}</div>
        );
        if (this.state.logoutMessage) {
            showLogout = (
                <p>{this.state.logoutMessage}</p>
            )
        }
        return (
            <header>
                <div className="col-12 header-bar">
                    <h1>Emoji Tutor</h1>
                    {showLogout}
                </div>

            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
