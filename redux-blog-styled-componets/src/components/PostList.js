import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserPin } from 'styled-icons/boxicons-regular/UserPin';
import { fetchPosts } from '../actions';
import { PostsWrapper, BlackButton, YellowButton } from './styled/posts';

class PostList extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  renderPosts() {
    const { posts } = this.props;
    console.log(posts);
    return posts.map(post => (
      <PostsWrapper key={post.id}>
        <div className="post">
          <UserPin size={45} />
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <BlackButton onClick={this.props.setBlackTheme}>
            Black Theme
          </BlackButton>
          <YellowButton onClick={this.props.setYellowTheme}>
            yellow Theme
          </YellowButton>
        </div>
      </PostsWrapper>
    ));
  }

  render() {
    return <div className="container">{this.renderPosts()}</div>;
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
