import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream } = this.props;
    fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>...Loading</div>;
    }
    console.log(this.props.stream.title);
    return (
      <div>
        Stream Edit
        <h3>sas</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
