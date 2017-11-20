import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthourApi';

export function loadCoursesSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadCoursesSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
