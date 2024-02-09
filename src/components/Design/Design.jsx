import "./design.css";
import Timer from "../Timer/Timer.jsx";
import Last__times from "../Last__times/Last__times.jsx";
import Middle__time from "../Middle__time/Middle__time.jsx";
import Last__ten from "../Last__ten/Last__ten.jsx";
import Confirm__disp from "../Confirm__disp/Confirm__disp.jsx";
import { create } from "zustand";

export const displayStyle = create((set) => ({
  display: "none",
  displayOpen: () => set({ display: "flex" }),
  displayClose: () => set({ display: "none" }),
}));

export default function Design() {
  const displayOpen = displayStyle((state) => state.displayOpen);
  
  if (!localStorage.getItem("last__times")) {
    localStorage.setItem("last__times", JSON.stringify([]));
}
  return (
    <>
      <section>
        <Confirm__disp />
      </section>
      <main className="wrapper">
        <figure className="logo__block">
          <img src="./image/logotype.svg" alt="logotype" className="logo" />
        </figure>
        <div className="page__sides">
          <div className="first__side">
            <div className="middle__times__table">
              <h2 className="middle__times__text__one">
                Середній час складання
              </h2>
              <Middle__time />
              <h2 className="middle__times__text__two">
                Середній час складання (10р.)
              </h2>
              <Last__ten />
              <form className="reset__block" onClick={displayOpen}>
                <label className="reset__text">Скинути результат</label>
                <button id="reset__button" type="button">
                  <svg
                    width="79"
                    height="80"
                    viewBox="0 0 79 80"
                    fill="currentcolor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M69.125 16.6667H23.0417V23.3334H16.4584V30H9.87502V36.6667H3.29169V43.3334H9.87502V50H16.4584V56.6667H23.0417V63.3334H75.7084V16.6667H69.125ZM23.0417 56.6667V50H16.4584V43.3334H9.87502V36.6667H16.4584V30H23.0417V23.3334H69.125V56.6667H23.0417ZM49.375 36.6667H42.7917V30H36.2084V36.6667H42.7917V43.3334H36.2084V50H42.7917V43.3334H49.375V50H55.9584V43.3334H49.375V36.6667ZM49.375 36.6667V30H55.9584V36.6667H49.375Z"
                      fill="currentcolor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="second__side">
            <Timer />
          </div>
          <div className="third__side">
            <div className="last__times__table">
              <h2 className="last__times__text">Час останніх складань</h2>
              <Last__times />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
