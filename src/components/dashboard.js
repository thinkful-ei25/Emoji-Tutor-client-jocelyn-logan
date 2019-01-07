import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        const username = this.props.user ? this.props.user.username : '';
        return (
            <div className="dashboard">
                <div className="welcome-message">
                    <p>{`HELLO! Welcome ${username}`}</p>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        user: state.auth.currentUser,
        protectedData: state.protectedData.data,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
