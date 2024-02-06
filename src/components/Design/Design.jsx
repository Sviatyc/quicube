import React, { useRef } from "react";
import Timer from "../Timer/Timer.jsx"
import './design.css'
import { useState, useEffect } from "react";


export default function Design(){
const [time, setTime] = useState(0)
const [toggle, setToggle] = useState(false)
const [color, setColor] = useState('#0B0A07')
const [last__times, setLast__times] = useState([])
const [display__style, setDisplay__style] = useState('none')

useEffect(()=>{
    let brake__array = null
    if (toggle){
        brake__array = setInterval(() => {
            setTime(prev => prev + 1)
        }, 10);
    }else{
        clearInterval(brake__array)
    }
    return () => clearInterval(brake__array)
}, [toggle])



// events

let getDocRef = useRef(null) 

function timerControl(event) {
    if(event.keyCode === 32 || event.touches){
        if (toggle){
            setToggle(false)  
            last__times.push(time) 
            localStorage.setItem('last__times', JSON.stringify(last__times))

        }else{
            setToggle(true)
            setColor('#0B0A07')   
        }
    }
}

function resTimer(event){
    if(event.keyCode === 32 || event.touches){
        if(toggle === false){
            setColor('green')
            if(time > 0){
                setTime(0)
            }
        }
    }
}

useEffect(()=>{
    let getDoc = getDocRef.current;
    getDoc.addEventListener('touchstart', resTimer)
    getDoc.addEventListener('touchend', timerControl)

    window.addEventListener('keydown', resTimer)
    window.addEventListener('keyup', timerControl)

    return()=>{
        getDoc.removeEventListener('touchstart', resTimer)
        getDoc.removeEventListener('touchend', timerControl)

        window.removeEventListener('keydown', resTimer)
        window.removeEventListener('keyup', timerControl)
}
})

// history

let last__time__local = localStorage.getItem('last__times')


function last__times__func() {
    const lastTimes = JSON.parse(last__time__local);
    if (!Array.isArray(lastTimes)) {
        return null;
    }
    
    return lastTimes.map((item, index) => (
        <span key={index} className="last__times__block__item">
            <span>{String(parseInt(item / 6000) % 60).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(parseInt(item / 100) % 60).padStart(2, '0')}</span>
            <span>.</span> 
            <span>{String(item % 100).padStart(2, '0')}</span>
        </span>
    ));
}


// confirms
function confirm__reset(){
    localStorage.setItem('last__times', JSON.stringify(last__times))
    localStorage.clear()
    setDisplay__style('none')
    window.location.reload()
}

function open__confirm(){
    setDisplay__style('flex')
}
function close__confirm(){
    setDisplay__style('none')
}

    return(
        <>
            <div className="confirm__reset__block" style={{display: display__style}}>
                <h2 className="confirm__text">Ви справді хочете скинути час останніх складань?</h2>
                <button className="confirm__yes" onClick={confirm__reset}>Підтвердити</button>
                <button className="confirm__no" onClick={close__confirm}>Відхилити</button>
            </div>
            <div className="wrapper">
                <figure className="logo__block">
                    <img src="./image/logotype.svg" alt="logotype" className="logo" />
                </figure>
                <div className="page__sides">
                    <div className="first__side">
                        <div className="middle__times__table">
                            <h2 className="middle__times__text__one">
                                Середній час складання
                            </h2>
                            <p className="middle__times">
                                04:17,34
                            </p>
                            <h2 className="middle__times__text__two">
                                Середній час складання (10р.)
                            </h2>
                            <p className="middle__times__two">
                                03:14,44
                            </p>
                            <form className="reset__block">
                                <label htmlFor="reset__button" className="reset__text">
                                    Скинути результат
                                </label>
                                <button id="reset__button">
                                    <svg width="79" height="80" viewBox="0 0 79 80" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.125 16.6667H23.0417V23.3334H16.4584V30H9.87502V36.6667H3.29169V43.3334H9.87502V50H16.4584V56.6667H23.0417V63.3334H75.7084V16.6667H69.125ZM23.0417 56.6667V50H16.4584V43.3334H9.87502V36.6667H16.4584V30H23.0417V23.3334H69.125V56.6667H23.0417ZM49.375 36.6667H42.7917V30H36.2084V36.6667H42.7917V43.3334H36.2084V50H42.7917V43.3334H49.375V50H55.9584V43.3334H49.375V36.6667ZM49.375 36.6667V30H55.9584V36.6667H49.375Z" fill="currentcolor"/>
                                    </svg>                                
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="second__side" >
                        <h1 className="main__timer" style={{color: color}} ref={getDocRef}>
                            <span>{String(parseInt(time / 6000) % 60).padStart(2, '0')}</span>
                            <span>:</span>
                            <span>{String(parseInt(time / 100) % 60).padStart(2, '0')}</span>
                            <span>.</span> 
                            <span>{String(time % 100).padStart(2, '0')}</span>
                        </h1>
                    </div>
                    <div className="third__side">
                        <div className="last__times__table">
                            <h2 className="last__times__text">
                                Час останніх складань
                            </h2>
                            <div className="last__times__block">
                                {last__times__func()}
                            </div>
                            <form className="reset__block" onClick={open__confirm}>
                                <label className="reset__text">
                                    Скинути результат
                                </label>
                                <button id="reset__button" type="button">
                                    <svg width="79" height="80" viewBox="0 0 79 80" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M69.125 16.6667H23.0417V23.3334H16.4584V30H9.87502V36.6667H3.29169V43.3334H9.87502V50H16.4584V56.6667H23.0417V63.3334H75.7084V16.6667H69.125ZM23.0417 56.6667V50H16.4584V43.3334H9.87502V36.6667H16.4584V30H23.0417V23.3334H69.125V56.6667H23.0417ZM49.375 36.6667H42.7917V30H36.2084V36.6667H42.7917V43.3334H36.2084V50H42.7917V43.3334H49.375V50H55.9584V43.3334H49.375V36.6667ZM49.375 36.6667V30H55.9584V36.6667H49.375Z" fill="currentcolor"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}