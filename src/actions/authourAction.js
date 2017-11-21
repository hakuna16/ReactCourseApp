import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthourApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadCoursesSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadCoursesSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
