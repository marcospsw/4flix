import React from 'react';
import InputWrapper from "./style";

function FormField({label, type, name, value, onChange}){
  return(
    <InputWrapper filled={!!value} type={type}>
      <label>
        {label}
      </label>
      <input
        type={type}               
        value={value} 
        name={name}
        onChange={onChange}
      />

      <textarea
        value={value}
        name={name}
        onChange={onChange}
        rows="5"
      />
    </InputWrapper>
  );
}



export default FormField;