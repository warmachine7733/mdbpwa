import React from "react";

const Button = props => {
  return (
    <>
      <button
        type="button"
        className={props.className}
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          borderRadius: "12px"
        }}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
