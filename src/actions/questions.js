import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = (question) => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = (error) => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const fetchQuestion = () => (dispatch, getState) => {
  dispatch(fetchQuestionRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/questions/next`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(question => {
      // console.log(question);
      dispatch(fetchQuestionSuccess(question));
    }).catch(err => {
      dispatch(fetchQuestionError(err));
    });
};

export const POST_ANSWER_REQUEST = 'POST_ANSWER_REQUEST';
export const postAnswerRequest = () => ({
  type: POST_ANSWER_REQUEST
});

export const POST_ANSWER_SUCCESS = 'POST_ANSWER_SUCCESS';
export const postAnswerSuccess = () => ({
  type: POST_ANSWER_SUCCESS,
});

export const POST_ANSWER_ERROR = 'POST_ANSWER_ERROR';
export const postAnswerError = (error) => ({
  type: POST_ANSWER_ERROR,
  error
});

export const postAnswer = (userAnswer) => (dispatch, getState) => {
  dispatch(postAnswerRequest());
  const authToken = getState().auth.authToken;
  const data = { userAnswer };
  return fetch(`${API_BASE_URL}/questions/answer`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(data),
  }).then(() => {
    dispatch(postAnswerSuccess());
  }).catch(err => {
    dispatch(postAnswerError(err));
  });
};

export const FETCH_PROGRESS_REQUEST = 'FETCH_PROGRESS_REQUEST';
export const fetchProgressRequest = () => ({
  type: FETCH_PROGRESS_REQUEST
});

export const FETCH_PROGRESS_SUCCESS = 'FETCH_PROGRESS_SUCCESS';
export const fetchProgressSuccess = (progress) => ({
  type: FETCH_PROGRESS_SUCCESS,
  progress
});

export const FETCH_PROGRESS_ERROR = 'FETCH_PROGRESS_ERROR';
export const fetchProgressError = (error) => ({
  type: FETCH_PROGRESS_ERROR,
  error
});

export const fetchProgress = () => (dispatch, getState) => {
  dispatch(fetchProgressRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/userStats`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(progress => {
    console.log(progress);
    dispatch(fetchProgressSuccess(progress));
  }).catch(err => {
    dispatch(fetchProgressError(err));
  });
};

export const POST_PROGRESS_REQUEST = 'POST_PROGRESS_REQUEST';
export const postProgressRequest = () => ({
  type: POST_PROGRESS_REQUEST
});

export const POST_PROGRESS_SUCCESS = 'POST_PROGRESS_SUCCESS';
export const postProgressSuccess = (progress) => ({
  type: POST_PROGRESS_SUCCESS,
  progress
});

export const POST_PROGRESS_ERROR = 'POST_PROGRESS_ERROR';
export const postProgressError = (error) => ({
  type: POST_PROGRESS_ERROR,
  error
});

export const postProgress = (progress) => (dispatch, getState) => {
  dispatch(postProgressRequest());
  const authToken = getState().auth.authToken;
  const data = progress;
  return fetch(`${API_BASE_URL}/userStats`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(data),
  }).then(() => {
    dispatch(postProgressSuccess(progress));
  }).catch(err => {
    dispatch(postProgressError(err));
  });
};

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
  type: RESET_STATE
});

export const SHOW_PROGRESS = 'SHOW_PROGRESS';
export const showProgress = () => ({
  type: SHOW_PROGRESS
});