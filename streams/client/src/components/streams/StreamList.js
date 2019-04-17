import React from 'react';
import { connect } from 'react-redux';
import { FaCamera } from 'react-icons/fa';
import { fetchStreams } from '../../actions';
import { StreamWrap, StreamItems } from '../../styled_componets/streams';

class StreamList extends React.Component {
  componentDidMount() {
    const { fetchStreams } = this.props;
    fetchStreams();
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
      </div>
    ));
  }

  render() {
    return (
      <StreamWrap>
        <StreamItems className="ui celled list">
          <h2 className="streams-title">streams</h2>
          {this.renderList()}
        </StreamItems>
      </StreamWrap>
    );
  }
}

const mapStateToProps = state => ({ streams: Object.values(state.streams) });

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
