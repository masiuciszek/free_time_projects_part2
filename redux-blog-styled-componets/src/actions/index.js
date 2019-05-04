import json from '../api/jsonplaceholder';
import { FETCH_POSTS } from './constants';

export const fetchPosts = () => async dispatch => {
  const resp = await json.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: resp.data });
};
