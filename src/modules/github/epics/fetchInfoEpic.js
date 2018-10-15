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

  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_FAILURE,
  FETCH_USER_INFO_SUCCESS,
} from '../actions/constants';
import { API } from '../../../configurations';

export const fetchInfoEpic = (action$) =>
  action$
    .pipe(
      ofType(SEARCH_USER_BY_NAME),
      pluck('payload'),
      switchMap((name) => from(fetch(`${API}/users/${name}`).then((response) => response.json()))
        .pipe(
          map((user) => ({ type: FETCH_USER_INFO_SUCCESS, payload: user })),
          catchError((error) => of({ type: FETCH_USER_INFO_FAILURE, error })),
          startWith({ type: FETCH_USER_INFO_PENDING }),
        ),
      ),
    );