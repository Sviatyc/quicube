import { timerState } from "../Timer/Timer";
import { useState, useEffect } from "react";
import './Middle__time.css'

function Middle__time() {
  const [local__times, setLocal__times] = useState([]);
  const toggle = timerState();
  useEffect(() => {
    setLocal__times(JSON.parse(localStorage.getItem("local__times")));
  }, [toggle]);

  function render__middle__time() {
    let middle__res =
      local__times.reduce((total, num) => total + num, 0) / local__times.length;
    if (local__times.length === 0) {
      return <span>00:00.00</span>;
    } else {
      return (
        <>
          <span>
            {String(parseInt(middle__res / 6000) % 60).padStart(2, "0")}
          </span>
          <span>:</span>
          <span>
            {String(parseInt(middle__res / 100) % 60).padStart(2, "0")}
          </span>
          <span>.</span>
          <span>{String(parseInt(middle__res % 100)).padStart(2, "0")}</span>
        </>
      );
    }
  }

  return (
    <>
      <p className="middle__times">{render__middle__time()}</p>
    </>
  );
}

export default Middle__time;
