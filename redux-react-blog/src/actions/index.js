/* eslint-disable arrow-body-style */
import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};
