import * as type from './actionTypes';
export function createCourse(course) {
  return { type: type.CREATE_COURSE, course };
}
