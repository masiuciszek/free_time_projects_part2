import { SIGN_IN, SIGN_OUT } from './types';
import streams from '../apis/streams';
import { dispatch } from '../../../../../../../Library/Caches/typescript/3.4.3/node_modules/rxjs/internal/observable/range';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId,
});
export const signOut = () => ({
  type: SIGN_OUT,
});

export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};
