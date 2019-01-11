import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Learn from './learn';
import HeaderBar from './header-bar';

// import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }

    render() {
        const username = this.props.user ? this.props.user.username.toUpperCase() : '';

        return (
            <section className="dashboard">
                <HeaderBar />
                <div className="dashboard">
                    <div className="col-12">
                        <p>{`HELLO ${username}!!`}</p>
                    </div>
                </div>
                <Learn />
            </section>
        );
    }
}

const mapStateToProps = state => {
    //const { currentUser } = state.auth;
    return {
        user: state.auth.currentUser
        // protectedData: state.protectedData.data,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
