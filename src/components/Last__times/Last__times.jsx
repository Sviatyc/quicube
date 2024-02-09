import { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import "./Last__times.css";
import { local__times } from "../Timer/Timer.jsx";


function Last__times() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const local__array = local__times(s=>s.mainArray)


  function last__times__func() {
    const three__lastTime__colors = [
      "rgb(0, 147, 0)",
      "rgb(0, 107, 0)",
      "rgb(18, 78, 0)",
    ];

    return local__array && local__array.length > 0
      ? local__array.map((item, index) => {
          return (
            <span
              key={index}
              className="last__times__block__item"
              style={{
                color:
                  index >= local__array.length - 3
                    ? three__lastTime__colors[index - local__array.length + 3]
                    : "inherit",
              }}
            >
              <span>{String(parseInt(item / 6000) % 60).padStart(2, "0")}</span>
              <span>:</span>
              <span>{String(parseInt(item / 100) % 60).padStart(2, "0")}</span>
              <span>.</span>
              <span>{String(item % 100).padStart(2, "0")}</span>
            </span>
          );
        })
      : null;
  }

  return (
    <>
        <Scrollbars style={{ height: windowWidth > 409 ? "85%" : "70%" }}>
          <div className="last__times__block">{last__times__func()}</div>
        </Scrollbars>
    </>
  );
}

export default Last__times;
