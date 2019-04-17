import React from 'react';
import { connect } from 'react-redux';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import {
  StreamWrap,
  Button,
  StreamItems,
  ButtonLink,
} from '../../styled_componets/streams';

class StreamList extends React.Component {
  componentDidMount() {
    const { fetchStreams } = this.props;
    fetchStreams();
  }

  renderAdmin(stream) {
    const { currentUserId } = this.props;
    if (stream.userId === currentUserId) {
      return (
        <div className="button-area-for-user">
          <Button edit>Edit</Button>
          <Button delete>Delete</Button>
        </div>
      );
    }
  }

  renderList() {
    const { streams } = this.props;
    return streams.map(stream => (
      <div className="stream-items" key={stream.id}>
        <hr />
        <FaCamera size={23} style={{ marginTop: 10, padding: '1rem 0' }} />
        <div className="content-for-streams" style={{ margin: '.4rem 0' }}>
          <p> {stream.title}</p>
          <div className="description">
            {' '}
            <p> {stream.description}</p>
          </div>
          <hr />
        </div>
        {this.renderAdmin(stream)}
      </div>
    ));
  }

  renderCreate() {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new">
            <ButtonLink link>Create Stream</ButtonLink>
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <StreamWrap>
        <StreamItems className="ui celled list">
          <h2 className="streams-title">streams</h2>
          {this.renderList()}
        </StreamItems>
        {this.renderCreate()}
      </StreamWrap>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  userId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
