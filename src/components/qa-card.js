import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/questions';

export class QACard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  }

  render() {
    let inputAnswer;
    return (
      <section className="card">
        <div className="current-word">
          <h3>Emoji</h3>
        </div>
        <div className="feedback">
          <h3>Feedback</h3>
        </div>
        <form className="user-form">
          <label htmlFor="user-answer"></label>
          <input
            name="inputAnswer"
            placeholder="Type your answer here"
            className="inputAnswer"
            type="inputAnswer"
            ref={(input) => (this.input = input)}
          />
          <button
            type="submit"
            className="submitButton"
            onClick={(e) => {
              e.preventDefault();
              inputAnswer = this.input.value;
              this.input.value = '';
            }}
          >
            Submit
          </button>
        </form>

      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(QACard);