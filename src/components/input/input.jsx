import React from 'react';
import "./input.css";

const Input = (props) => {
  const {name, placeholder, onChangeInput, value} = props;

  const handleChange = (e) => {
    onChangeInput(e.target.value);
  }

  return (
    <input
      className="input"
      type="text" name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Input;