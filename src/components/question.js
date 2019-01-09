import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class Question extends React.Component {
  render() {
    let emoji;
    if (this.props.emoji) {
      emoji = this.props.emoji;
    }
    return (
      <section className="question">
        <p>{emoji}</p>
      </section>
    );
  }
}

const mapStateToProps = state => {
  if (state.question.question) {
    return {
      emoji: state.question.question.emoji.emojiCode
    }
  } else {
    return {};
  }
};

export default requiresLogin()(connect(mapStateToProps)(Question));