import React, { useState } from "react";

const Counter = () => {
  // STATE
  const [count, setCount] = useState(0);
  //   EVENT HANDLERS

  const formatCount = () => (count === 0 ? "ZERO" : count);

  return (
    <section className=" m-3">
      <span className={getBadgesClass()}>{formatCount()}</span>
      <button onClick={handleIncrement} className=" btn m-2">
        +
      </button>
      <button onClick={handleDecrement} className="btn  m-2 ">
        -
      </button>
      <button className="btn btn-danger p-2">click me</button>
    </section>
  );

  function getBadgesClass() {
    let classes = "badge m-2 p-2 ";
    classes += count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count === 0) {
      return null;
    }
    setCount(count - 1);
  }
};

export default Counter;
