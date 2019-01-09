import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/questions';

class Game extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }

  state = {
    message: '',
    userAnswer: '',
    answer: '',
    questionAnswered: false,
    score: ''
  }

  onSubmit() {
    const userAnswer = this.state.answer;
    this.setState({
      questionAnswered: true,
    });

    if (userAnswer === this.props.question.answer) {
      this.setState({
        message: 'Correct!'
      });
    } else {
      this.setState({
        message: 'The correct answer is: '
      });
    }
  }

  displayNextQuestion() {
    this.props.dispatch(fetchQuestion());
  }

  displayProgress() {
    console.log(this.props.score);
  }

  render() {
    let answer = this.props.answer;
    let question = this.props.question;
    let userAnswer = this.props.userAnswer;
    return (
      <main className="game">

        <div>
          <form onSubmit={e => this.onSubmit(e)}>
            <input id="answer" ref={input => (userAnswer = input)} type="text"></input>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <button className="next" onClick={() => this.displayNextQuestion()}>Next Question</button>
        </div>

        <div>
          <button className="progress" onClick={() => this.displayProgress()}>Progress</button>
        </div>

      </main>
    );

  }
}

const mapStateToProps = state => {
  return {
    question: state.question,
    answer: state.answer
  }
}

export default connect(mapStateToProps)(Game);