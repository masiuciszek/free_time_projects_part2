import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from './types';
import streams from '../apis/streams';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId,
});
export const signOut = () => ({
  type: SIGN_OUT,
});

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const resp = await streams.post('/streams', { ...formValues, userId }); // all the values from our form and who that user was that created that stream

  dispatch({ type: CREATE_STREAM, payload: resp.data });
};

export const fetchStreams = () => async dispatch => {
  const resp = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: resp.data });
};

export const fetchStream = id => async dispatch => {
  const resp = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: resp.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const resp = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: resp.data });
};
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
