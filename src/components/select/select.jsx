import React from 'react';
import classnames from "classnames";
import "./select.css";

const Select = (props) => {
  const [isOpen, setOpen] = React.useState(false);
  const {options, label, render} = props;

  const handleToggleSelect = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="select">
      <div className={classnames(
        `select__label`, {
          'select__label--opened': isOpen
        })}
        onClick={handleToggleSelect}>
        {label}
      </div>
      <ul className={classnames(
        `select__options`, {
          'select__options--opened': isOpen
        })}>
        {options.map((option, i) => (
          <li key={`${option}-${i}`} tabIndex={0}
            onClick={handleToggleSelect}
            className="select__option"
          >
            {render(option)}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Select;

