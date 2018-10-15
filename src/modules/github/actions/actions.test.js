import {
  SEARCH_USER_BY_NAME,
  SELECT_REPO,
} from './constants';

import {
  searchUserByName,
  selectRepo,
} from './';

describe('actions:', () => {
  it('should create an action searchUserByName with the user name', () => {
    const name = 'Test name';

    const expectedAction = {
      type: SEARCH_USER_BY_NAME,
      payload: name,
    };

    expect(searchUserByName(name)).toEqual(expectedAction)
  }),

    it('should create an action selectRepo with the repo id', () => {
      const id = 1;

      const expectedAction = {
        type: SELECT_REPO,
        payload: id,
      };

      expect(selectRepo(id)).toEqual(expectedAction)
    })
});