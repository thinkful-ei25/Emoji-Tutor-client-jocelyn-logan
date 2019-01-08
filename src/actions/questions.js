import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions
});

export const FETCH_QUESTIONS__ERROR = 'FETCH_QUESTIONS__ERROR';
export const fetchQuestionsError = error => ({
  type: FETCH_QUESTIONS__ERROR,
  error
});

export const fetchQuestions = () => (dispatch) => {
  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ data }) => console.log(data))
    .catch(err => {
      dispatch(fetchQuestionsError(err));
    });
};
