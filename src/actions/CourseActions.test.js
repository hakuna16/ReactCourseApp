import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore  from 'redux-mock-store';

// Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = { id: 'clean-code', title: 'Clean Code' };
      const expectedActions = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const actions = courseActions.createCourseSuccess(course);

      expect(actions).toEqual(expectedActions);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading course', (done) => {
    // Here is an example to call nock
    // nock('http://exmaple.com')
    // .get('/course')
    // .reply(200, { body: {course: [{ id: 1, firstName: 'Cory', lastName: 'House'}]}});

    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      { type: types.LOAD_COURSES_SUCCESS, body: { courses: [{ id: 'clean-code',
        title: 'Clean Code' }] } }
    ];

    const store = mockStore({ courses: [] }, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
