import userReducer from './user';

import { SEARCH_USER_BY_NAME } from '../actions/constants'

it('should return the initial state', () => {
  expect(userReducer(undefined, {})).toEqual(
    {
      userName: '',
      info: {},
      repos: [],
      repoInfo: {},
    },
  )
})

it('should handle SEARCH_USER_BY_NAME action', () => {
  expect(
    userReducer(undefined, {
      type: SEARCH_USER_BY_NAME,
      payload: 'Test name',
    }),
  ).toEqual(
    {
      userName: 'Test name',
      info: {},
      repos: [],
      repoInfo: {},
    },
  )
})