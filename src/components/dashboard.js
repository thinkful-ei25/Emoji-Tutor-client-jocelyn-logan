import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Link } from 'react-router-dom';
// import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }

    render() {
        const username = this.props.user ? this.props.user.username.toUpperCase() : '';
        return (
            <section className="dashboard">
                <div className="dashboard">
                    <div className="col-12">
                        <p>{`HELLO! Welcome ${username}`}</p>
                    </div>
                    <section className="user-stats">
                        <p> Your stats: </p>
                    </section>
                </div>
                <div>
                    <p>Click here to start learning:</p>
                    <Link to="/qaarea">
                        <button type='button'>Learn!</button>
                    </Link>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    //const { currentUser } = state.auth;
    return {
        user: state.auth.currentUser,
        // protectedData: state.protectedData.data,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
