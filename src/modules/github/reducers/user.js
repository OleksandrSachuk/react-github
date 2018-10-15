import {
  SEARCH_USER_BY_NAME,
  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
  FETCH_REPOS_PENDING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  FETCH_REPO_INFO_PENDING,
  FETCH_REPO_INFO_SUCCESS,
  FETCH_REPO_INFO_FAILURE,
} from '../actions/constants'

const initialState = {
  userName: '',
  info: {},
  repos: [],
  repoInfo: {},
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SEARCH_USER_BY_NAME:
      return Object.assign({}, state, {
        ...initialState,
        userName: action.payload,
      });

    case FETCH_USER_INFO_SUCCESS:
      return Object.assign({}, state, {
        info: action.payload,
      });

    case FETCH_REPOS_SUCCESS:
      return Object.assign({}, state, {
        repos: action.payload,
      });

    case FETCH_REPO_INFO_SUCCESS:
      return Object.assign({}, state, {
        repoInfo: action.payload,
      });

    default:
      return state;
  }
}