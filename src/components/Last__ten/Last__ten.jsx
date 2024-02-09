import './Last__ten.css'
import { local__times } from '../Timer/Timer.jsx';
function Last__ten() {

  const local__array = local__times(s=>s.mainArray)


  function render__last__ten() {
    let lastTen =
      local__array.slice(-10).reduce((total, num) => total + num, 0) /
      local__array.slice(-10).length;
    if (local__array.length >= 10) {
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
