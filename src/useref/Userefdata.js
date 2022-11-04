import React, { useRef, useState } from "react";

const Userefdata = () => {
  const [input, setinput] = useState("");
  const element = useRef("");

  const changevalue = () => {
    element.current.style.backgroundColor = "red";
  };
  return (
    <>
      <input
        type="text"
        value={input}
        ref={element}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={() => changevalue()}>changevalue</button>
    </>
  );
};

export default Userefdata;
