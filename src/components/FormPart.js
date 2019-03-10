import React, { Component } from 'react';
import styled from 'styled-components';

const FormPartWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  label {
    background-color: coral;
    color: #f4f4f4;
    font-weight: bolder;
    font-size: 1.8rem;
    padding: 0px 5px;
  }

  input {
    width: 100%;
    font-size: 1.5rem;
    padding: 5px;
    outline: none;
    border: none;
  }

  .error {
    color: red;
  }
`;

class FormPart extends Component {
  state = {
    error: this.props.error
  };

  render() {
    const {
      name,
      type,
      placeholder,
      title,
      value,
      error,
      onChange
    } = this.props;

    return (
      <FormPartWrapper>
        <label htmlFor={name}>{title}</label>
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <span className='error'>{error}</span>}
      </FormPartWrapper>
    );
  }
}

export default FormPart;
