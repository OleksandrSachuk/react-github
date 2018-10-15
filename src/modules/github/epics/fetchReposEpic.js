import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  catchError,
  map,
  pluck,
  startWith,
  switchMap,
} from 'rxjs/operators';

import {
  SEARCH_USER_BY_NAME,

  FETCH_REPOS_PENDING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from '../actions/constants';
import { API } from '../../../configurations';

export const fetchReposEpic = (action$) =>
  action$
    .pipe(
      ofType(SEARCH_USER_BY_NAME),
      pluck('payload'),
      switchMap((name) => from(fetch(`${API}/users/${name}/repos`).then((response) => response.json()))
        .pipe(
          map((repos) => ({ type: FETCH_REPOS_SUCCESS, payload: repos })),
          catchError((error) => of({ type: FETCH_REPOS_FAILURE, error })),
          startWith({ type: FETCH_REPOS_PENDING }),
        ),
      ),
    );