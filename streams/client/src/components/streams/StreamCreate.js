import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { SubmitBtn } from '../../styled_componets/buttons';
import { MyForm, MyInput } from '../../styled_componets/forms';
import { createStream } from '../../actions';

class StreamCreate extends Component {
  // destuct map = const { input} = fromProps;
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui form-error">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `label-text ${
      meta.error && meta.touched ? 'error' : null
    } `;
    return (
      <div className="form-wrapper">
        <label
          htmlFor="s"
          className={className}
          style={{
            display: 'block',
            fontWeight: '900',
            fontSize: '1.3rem',
            margin: '8px 0',
          }}
        >
          {label}
        </label>
        <MyInput {...input} autoComplete="off" />
        {this.renderError(meta)}
        {/* <div className="error-msg">{meta.error}</div> */}
      </div>
    );
  };

  onSubmit = formValues => {
    const { createStream } = this.props;
    createStream(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <MyForm
        className="create-form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="enter description"
        />
        <SubmitBtn style={{ margin: '20px 0' }}>Submit</SubmitBtn>
      </MyForm>
    );
  }
}
const validate = formVal => {
  const errors = {};
  if (!formVal.title) {
    errors.title = 'Please enter a Title';
  }
  if (!formVal.description) {
    errors.description = 'Please enter a description';
  }
  return errors;
};

const formWrapper = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapper);
