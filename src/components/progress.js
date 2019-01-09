import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Progress extends React.Component {
  render() {
    return (
      <section>
        <h2>User Stats: </h2>
        <h3>Overall: </h3>
        <p>Total correct: </p>
        <p>Total incorrect: </p>
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
  numCorrect: state.numCorrect,
  numIncorrect: state.numIncorrect,
});

export default connect(mapStateToProps)(Progress); 