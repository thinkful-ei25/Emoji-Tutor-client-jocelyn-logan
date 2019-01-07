import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './landing-page.css';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <div className="welcome">
                <h2>Welcome to Emoji Tutor!!</h2>
                <p>Learn Emojis! with the help of this app, learn to communicate without words, because who has <span role="img" aria-label="clock">🕒</span> for words anyway</p>
            </div>
            <LoginForm />
            <p>No account yet? <Link to="/register">Register</Link></p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
