import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  // console.log(
  //   'fetch posts',
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // );
  const resp = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: resp.data });
};

export const fetchUser = id => async dispatch => {
  const resp = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: resp.data });
};

// export const fetchPosts = () => {
//   console.log('yeeeah');
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };
