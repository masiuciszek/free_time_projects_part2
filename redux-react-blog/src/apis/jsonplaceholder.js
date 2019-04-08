import axios from 'axios';

export default axios.create({
  baseUrl: `https://jsonplaceholder.typicode.com`,
  // posts: `https://jsonplaceholder.typicode.com/posts`,
  // users: `https://jsonplaceholder.typicode.com/users`,
});
