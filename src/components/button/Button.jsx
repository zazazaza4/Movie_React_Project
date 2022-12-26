import PropTypes from "prop-types";

import "./button.scss";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

OutlineButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
