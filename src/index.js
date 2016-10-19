import React, {PropTypes} from "react";

import "./style.scss";

const Button = ({label, handleClick = () => {}, isOutline=false, isPrimary = false, isDisabled = false}) => (
  <button
    className={[
      "btn",
      isOutline ? "outline" : "",
      isPrimary ? "primary" : "",
      isDisabled ? "disabled" : ""
    ].join(" ")}
    onClick={handleClick}>
      {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isOutline: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default Button;
