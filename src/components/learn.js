import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, postAnswer } from '../actions/questions';
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
  }

  onSubmit(e) {
    e.preventDefault();
    const userAnswer = this.userAnswer.value.trim().toLowerCase();

    if (userAnswer === this.props.answer) {
      this.props.dispatch(postAnswer(true));
      let userScore = this.state.score + 1;
      this.setState({
        userAnswer,
        message: `Correct! Score:${userScore}`,
        score: userScore
      }
      );
    } else {
      this.props.dispatch(postAnswer(false));
      let userScore = this.state.score - 1;
      this.setState({
        userAnswer,
        message: `Your answer: ${userAnswer}. correct is "${this.props.answer}" Score:${userScore}`,
        score: userScore
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

  render() {
    let answerBox;
    if (this.state.message) {
      answerBox = (
        <p>{this.state.message}</p>
      );
    } else {
      answerBox = (
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="text" ref={input => this.userAnswer = input} />
          <button type="submit">Submit</button>
        </form>
      )
    }
    return (
      <section className="col-12 learn">
        <Question />
        <div className="answerbox">{answerBox}</div>
        <div className="options">
          <button type="button" className="next-button" onClick={() => this.displayNextQuestion()}>Next</button>
          <Link to="/progress"><button type="button" className="user-stats">User Stats</button></Link>
        </div>
      </section>
    );

  }
}

const mapStateToProps = state => {
  if (state.question.question) {
    return {
      answer: state.question.question.emoji.emojiName
    }
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(Game);