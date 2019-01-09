import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/questions';
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
      let userScore = this.state.score + 1;
      this.setState({
        userAnswer,
        message: `Correct! Score:${userScore}`,
        score: userScore
      },
        () => console.log(userScore)
      );
    } else {
      let userScore = this.state.score - 1;
      this.setState({
        userAnswer,
        message: `Your answer: ${userAnswer}. correct is "${this.props.answer}"`,
        score: userScore
      },
        () => console.log(userScore)
      );
    }
  }

  displayNextQuestion() {
    this.setState({
      message: ''
    });
    this.props.dispatch(fetchQuestion());
  }

  displayProgress() {
    console.log(this.props.score);
  }

  render() {
    let a;
    if (this.state.message) {
      a = (
        <p>{this.state.message}</p>
      );
    } else {
      a = (
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="text" ref={input => this.userAnswer = input} />
          <button type="submit">Submit</button>
        </form>
      )
    }
    return (
      <main className="learn">
        <Question />
        {a}
        <button className="next-button" onClick={() => this.displayNextQuestion()}>Next</button>
        <Link to="/progress"><button>Progress</button></Link>
      </main>
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