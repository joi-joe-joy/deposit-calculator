import React from 'react';
import "./field-wrap.css";

const FieldWrap = (props) => {
  const {label, children} = props;
  return (
    <div className="input-wrapper">
      <label className="label">{label}</label>
        {children}
    </div>
  );
}

export default FieldWrap;