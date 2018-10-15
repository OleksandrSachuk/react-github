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
  SELECT_REPO,

  FETCH_REPO_INFO_PENDING,
  FETCH_REPO_INFO_SUCCESS,
  FETCH_REPO_INFO_FAILURE,
} from '../actions/constants';
import { API } from '../../../configurations';

export const fetchRepoInfoEpic = (action$, store$) =>
  action$
    .pipe(
      ofType(SELECT_REPO),
      pluck('payload'),
      switchMap((repoId) => from(fetch(`${API}/repositories/${repoId}`).then((response) => response.json()))
        .pipe(
          map((repos) => ({ type: FETCH_REPO_INFO_SUCCESS, payload: repos })),
          catchError((error) => of({ type: FETCH_REPO_INFO_FAILURE, error })),
          startWith({ type: FETCH_REPO_INFO_PENDING }),
        ),
      ),
    );