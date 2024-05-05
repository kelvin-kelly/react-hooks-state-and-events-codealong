
import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    console.log("Switching");
  };

  return (
    <button onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>

  );
};

export default Toggle;
