import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FaUser from 'react-icons/lib/fa/user';
import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';
import '../postlist.css';

class PostList extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList = () =>
    this.props.posts.map(post => (
      <div className="posts item" key={post.id}>
        <FaUser />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    ));

  render() {
    console.log(this.props.posts);
    return <div className="ui devided relaced list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
