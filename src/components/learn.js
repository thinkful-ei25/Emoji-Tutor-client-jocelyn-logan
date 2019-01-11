import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, postAnswer, fetchProgress, postProgress } from '../actions/questions';
import Question from './question';
import { Link } from 'react-router-dom';

import './learn.css';
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      userAnswer: '',
      score: 0
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestion());
    this.props.dispatch(fetchProgress());
  }

  onSubmit(e) {
    e.preventDefault();
    const userAnswer = this.userAnswer.value.trim().toLowerCase();

    if (userAnswer === this.props.answer) {
      this.props.dispatch(postAnswer(true));
      let userScore = this.props.score + 1;
      let userCorrect = this.props.correct + 1;
      const data = {
        correct: userCorrect,
        incorrect: this.props.incorrect,
        score: userScore
      };
      this.props.dispatch(postProgress(data));
      this.setState({
        userAnswer,
        message: `Correct!`,
      }
      );
    } else {
      this.props.dispatch(postAnswer(false));
      let userScore;
      if (this.props.score > 1) {
        userScore = this.props.score - 1;
      } else {
        userScore = 0;
      }
      let userIncorrect = this.props.incorrect + 1;
      const data = {
        correct: this.props.correct,
        incorrect: userIncorrect,
        score: userScore
      };
      this.props.dispatch(postProgress(data));
      this.setState({
        userAnswer,
        message: `Incorrect, your answer: ${userAnswer}. 
        Correct answer is "${this.props.answer}"`,
      }
      );
    }
  }

  displayNextQuestion() {
    this.setState({
      message: ''
    });
    this.props.dispatch(fetchQuestion());
  }

  showProgress() {
    this.props.dispatch(fetchProgress());
  }

  render() {
    let answerBox;
    if (this.state.message) {
      answerBox = (
        <div>
          <p>{this.state.message}</p>
          <button className="next-button" onClick={() => this.displayNextQuestion()}>Next</button>
        </div>
      );
    } else {
      answerBox = (
        <form onSubmit={e => this.onSubmit(e)}>
          <input className="text-box" type="text" placeholder="Type your answer here" ref={input => this.userAnswer = input} />
          <button className="submit-button" type="submit">Submit</button>
        </form>
      )
    }
    return (
      <section className="col-12 learn">
        <div className="learn-box">
          <Question />
          <div className="answerbox">{answerBox}</div>
          <div className="options">

            <Link to="/progress"><button className="user-stats" onClick={() => this.showProgress()}>User Stats</button></Link>
          </div>
        </div>
      </section>
    );

  }
}

const mapStateToProps = state => {
  let answer;
  if (state.question.question.emoji) {
    answer = state.question.question.emoji.emojiName

  }
  return {
    answer,
    correct: state.question.correct,
    incorrect: state.question.incorrect,
    score: state.question.score
  };
}

export default connect(mapStateToProps)(Game);