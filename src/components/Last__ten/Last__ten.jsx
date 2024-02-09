import { useState, useEffect } from "react";
import { timerState } from "../Timer/Timer";
import './Last__ten.css'
function Last__ten() {
  const [local__times, setLocal__times] = useState([]);
  const toggle = timerState();

  useEffect(() => {
    setLocal__times(JSON.parse(localStorage.getItem("local__times")));
  }, [toggle]);

  function render__last__ten() {
    let lastTen =
      local__times.slice(-10).reduce((total, num) => total + num, 0) /
      local__times.slice(-10).length;
    if (local__times.length >= 10) {
      return (
        <>
          <span>{String(parseInt(lastTen / 6000) % 60).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(parseInt(lastTen / 100) % 60).padStart(2, "0")}</span>
          <span>.</span>
          <span>{String(parseInt(lastTen % 100)).padStart(2, "0")}</span>
        </>
      );
    } else {
      return <span>00:00.00</span>;
    }
  }
  return (
    <>
      <p className="middle__times__two">{render__last__ten()}</p>
    </>
  );
}

export default Last__ten;
