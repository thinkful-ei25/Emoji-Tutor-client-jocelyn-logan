import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QA from './qa-card';

export class QuestionsAnswersArea extends React.Component {

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/#register" />;
    }

    return (
      <React.Fragment>
        <section className='qa-section'>
          <QA />
        </section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(QuestionsAnswersArea);