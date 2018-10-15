import {
  SEARCH_USER_BY_NAME,
  SELECT_REPO,
} from './constants';

export const searchUserByName = (name) => ({ type: SEARCH_USER_BY_NAME, payload: name });
export const selectRepo = (id) => ({ type: SELECT_REPO, payload: id });
