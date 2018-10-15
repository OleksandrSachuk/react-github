import { combineEpics } from 'redux-observable';
import {fetchInfoEpic} from './fetchInfoEpic';
import {fetchReposEpic} from './fetchReposEpic';
import {fetchRepoInfoEpic} from './fetchRepoInfoEpic';

export default combineEpics(
  fetchInfoEpic,
  fetchReposEpic,
  fetchRepoInfoEpic,
);
