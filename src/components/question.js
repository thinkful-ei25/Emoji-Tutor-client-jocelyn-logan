import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './question.css'
export class Question extends React.Component {
  render() {
    let emoji;
    if (this.props.emoji) {
      emoji = this.props.emoji;

    }
    // console.log(this.props.emoji);
    return (
      <section className="question">
        <span role="img" aria-label={emoji.emojiName} tabindex="0"><p>{emoji}</p></span>
      </section>
    );
  }
}

const mapStateToProps = state => {
  if (state.question.question.emoji) {
    return {
      emoji: state.question.question.emoji.emojiCode
    }
  } else {
    return {};
  }
};

export default requiresLogin()(connect(mapStateToProps)(Question));