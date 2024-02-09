import { useState, useEffect, useRef } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware"
import "./Timer.css";

export const timerState = create((set) => ({
  toggle: false,
  toggleIsTrue: () => set({ toggle: true }),
  toggleIsFalse: () => set({ toggle: false }),
}));

export const local__times = create(
  persist(
    (set) => ({
      mainArray: [],
      addArrayElem: (item) => set(state => ({
        mainArray: [...state.mainArray, item]
      }))
    }),
    {name: "local__times"}
  )
)

export default function Timer() {
  const [timerTime, setTimerTime] = useState(0);
  const { toggle, toggleIsFalse, toggleIsTrue } = timerState();
  const [times__color, setTimer__color] = useState("#0B0A07");

  const updatedTimes = local__times(s => s.addArrayElem)

  useEffect(() => {
    let setTime__interval;
    toggle
      ? (setTime__interval = setInterval(
          () => setTimerTime((time) => time + 1),
          10,
        ))
      : clearInterval(setTime__interval);
    return () => clearInterval(setTime__interval);
  }, [toggle]);

  function timer__control(event) {
    if (event.keyCode === 32 || event.touches) {
      if (toggle) {
        toggleIsFalse();
        updatedTimes(timerTime);
      } else {
        toggleIsTrue();
        setTimer__color("#0B0A07");
      }
    }
  }

  function reset__timer(event) {
    if (event.keyCode === 32 || event.touches) {
      if (toggle === false) {
        setTimer__color("green");
        if (timerTime > 0) {
          setTimerTime(0);
        }
      }
    }
  }
  let getDocRef = useRef(null);
  useEffect(() => {
    let getDoc = getDocRef.current;
    getDoc.addEventListener("touchstart", reset__timer);
    getDoc.addEventListener("touchend", timer__control);

    window.addEventListener("keydown", reset__timer);
    window.addEventListener("keyup", timer__control);

    return () => {
      getDoc.removeEventListener("touchstart", reset__timer);
      getDoc.removeEventListener("touchend", timer__control);

      window.removeEventListener("keydown", reset__timer);
      window.removeEventListener("keyup", timer__control);
    };
  });
  return (
    <>
      <h1
        className="main__timer"
        style={{ color: times__color }}
        ref={getDocRef}
      >
        <span>{String(parseInt(timerTime / 6000) % 60).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(parseInt(timerTime / 100) % 60).padStart(2, "0")}</span>
        <span>.</span>
        <span>{String(timerTime % 100).padStart(2, "0")}</span>
      </h1>
    </>
  );
}
