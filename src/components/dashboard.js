import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Learn from './learn';
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
                        <p>{`HELLO ${username}!!`}</p>
                    </div>
                    <section className="user-stats">
                        <p> Your stats: </p>
                    </section>
                </div>
                <div>
                    <Learn />
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
