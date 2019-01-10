import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';

export class Progress extends React.Component {
  render() {
    let percentageCorrect;
    if (this.props.correct && this.props.incorrect) {
      percentageCorrect = 100 * (this.props.correct / (this.props.correct + this.props.incorrect)).toFixed(2);
    }
    return (
      <section className="col-12 user-stats">
        <h2>User Stats: </h2>
        <h3>Percentage correct: {percentageCorrect}% </h3>
        <p>Total correct: {this.props.correct}</p>
        <p>Total incorrect: {this.props.incorrect}</p>
        <Link to="/dashboard">
          <button className="back-button">
            Back
        </button>
        </Link>
      </section>

    );
  }
}

const mapStateToProps = state => ({
  correct: state.question.correct,
  incorrect: state.question.correct
});

export default requiresLogin()(connect(mapStateToProps)(Progress)); 