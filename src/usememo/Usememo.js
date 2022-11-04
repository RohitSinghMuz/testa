import React, { useState, useMemo } from "react";

const Usememo = () => {
  const [countone, setcountone] = useState(0);
  const [counttwo, setcounttwo] = useState(0);
  const incrementone = () => {
    setcountone(countone + 1);
  };
  const incrementtwo = () => {
    setcounttwo(counttwo + 1);
  };

  const iseventodd = useMemo(() => {
    console.log("____----------------------------------hello");
    let i = 0;
    while (i < 2000000000) i++;
    return countone % 2 === 0;
  }, [countone]);

  return (
    <>
      <span>{iseventodd ? "even" : "odd"}</span>
      <p>{countone}</p>
      <p>{counttwo}</p>
      <button onClick={incrementone}>incrementone even</button>
      <button onClick={incrementtwo}>IncerementTwo</button>
    </>
  );
};

export default Usememo;
