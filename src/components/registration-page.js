import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home row">
            <div className="col-12">
                <h2>Register for Emoji Tutor</h2>
                <div className="col-12 loginregister">
                    <div className="login-form-border">
                        <RegistrationForm />
                    </div>
                </div>
                <p>Already registered? <Link to="/">Login</Link></p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
