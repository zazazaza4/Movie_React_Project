import PropTypes from "prop-types";

import "./input.scss";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : null}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "search"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
