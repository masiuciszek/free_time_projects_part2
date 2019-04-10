import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Done
export const fetchPosts = () => async dispatch => {
  const resp = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: resp.data });
};

// version1
export const fetchUser = id => async dispatch => {
  const resp = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: resp.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // .uniq = uniq returns an array with usersid
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

// verstion2
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const resp = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: resp.data });
// });

// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };
