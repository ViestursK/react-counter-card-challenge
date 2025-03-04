import React from "react";
function Button({ text, onClick, id }) {
  return (
    <button id={id} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
