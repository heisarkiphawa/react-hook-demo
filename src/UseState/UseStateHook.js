import React, { useState } from "react";

const UseStateHook = () => {
  const [inputValue, setInputValue] = useState("");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h1>Use State</h1>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default UseStateHook;
