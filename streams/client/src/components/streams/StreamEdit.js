import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import { EditStreamWrap } from '../../styled_componets/streams';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream } = this.props;
    fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>...Loading</div>;
    }
    return (
      <EditStreamWrap>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </EditStreamWrap>
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
