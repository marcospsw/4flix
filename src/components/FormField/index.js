import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './style';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `d_${name}`;

  return (
    <InputWrapper filled={!!value} type={type}>
      <label
        htmlFor={fieldId}
      >
        {label}
      </label>
      <input
        id={fieldId}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />

      <textarea
        id={fieldId}
        value={value}
        name={name}
        onChange={onChange}
        rows="5"
      />
    </InputWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: 'text',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
