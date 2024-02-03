import React from "react";

const Button = ({
  title = "",
  className = "primary",
  onClick = () => {},
  disabled = false,
  rest,
}) => {
  if (!title) return null;
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
