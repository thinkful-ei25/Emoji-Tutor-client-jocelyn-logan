import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import { fetchProgress } from '../actions/questions';
import HeaderBar from './header-bar';
import './progress.css'
export class Progress extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProgress());
  }
  render() {
    let percentageCorrect;
    // console.log(this.props);
    if (this.props.correct || this.props.incorrect) {
      percentageCorrect = 100 * (this.props.correct / (this.props.correct + this.props.incorrect)).toFixed(2);
    }
    return (
      <section className="col-12 user-stats">
        <HeaderBar />
        <div className="user-stats-info">
          <h2>User Stats: </h2>
          <h3>Percentage correct: {percentageCorrect}% </h3>
          <p>Total correct: {this.props.correct}</p>
          <p>Total incorrect: {this.props.incorrect}</p>
        </div>
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
  incorrect: state.question.incorrect
});

export default requiresLogin()(connect(mapStateToProps)(Progress)); 