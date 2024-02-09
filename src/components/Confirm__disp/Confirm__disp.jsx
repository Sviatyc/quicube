import { displayStyle } from "../Design/Design";
import './Confirm__disp.css'

function Confirm__disp() {  
  const display = displayStyle((state) => state.display)
  const displayClose = displayStyle((state) => state.displayClose)

  function reset__timer(){
      localStorage.clear()
      localStorage.setItem('local__times', "[]")
      window.location.reload()
      displayClose()
  }

  return (
    <>
      <section className="confirm__reset__block" style={{display: display}}>
        <h2 className="confirm__text">
          Ви справді хочете скинути час останніх складань?
        </h2>
        <button className="confirm__yes" onClick={reset__timer}>Підтвердити</button>
        <button className="confirm__no" onClick={displayClose}>Відхилити</button>
      </section>
    </>
  );
}

export default Confirm__disp;
