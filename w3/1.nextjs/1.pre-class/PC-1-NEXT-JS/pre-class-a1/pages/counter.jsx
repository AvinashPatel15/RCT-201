import React, { useState } from "react";

const counter = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button disabled={counter == 0} onClick={() => setCounter(counter - 1)}>
        DEC
      </button>
      <button onClick={() => setCounter(counter + 1)}>INC</button>
      <button disabled={counter == 0} onClick={() => setCounter((counter = 0))}>
        RESET
      </button>
    </div>
  );
};

export default counter;
