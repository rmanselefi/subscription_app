import React from "react";

const Button = ({
  label = "Submit",
  onClick,
  type = "primary",
  size = "md",
}) => {
  return (
    <button className={`btn btn-${type} btn-${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
