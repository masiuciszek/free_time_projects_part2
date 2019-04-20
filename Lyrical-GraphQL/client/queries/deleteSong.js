import gql from 'graphql-tag';

export default (mutation = gql`
  mutation DeleteSong($id: ID) {
    id
  }
`);
