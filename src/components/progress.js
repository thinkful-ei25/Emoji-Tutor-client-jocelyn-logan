import React from 'react';
import { connect } from 'react-redux';

export class Progress extends React.Component {
  render() {
    return (
      <main>
        <h2>User Stats: </h2>
        <h3>Current: </h3>
        <p>Correct: </p>
        <p>Incorrect: </p>
        <h3>Overall: </h3>
        <p>Total correct: </p>
        <p>Total incorrect: </p>
      </main>

    );
  }
}

const mapStateToProps = state => ({
  numCorrect: state.numCorrect,
  numIncorrect: state.numIncorrect,
});

export default connect(mapStateToProps)(Progress); 