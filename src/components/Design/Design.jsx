import React from "react";
import Timer from "../Timer/Timer.jsx"
import './design.css'
import { useState, useEffect } from "react";






export default function Design(){
const [time, setTime] = useState(0)
const [toggle, setToggle] = useState(false)

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

function toggle__func(){
    setToggle(!toggle)
}

let min = 0


    return(
        <>
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
                    <div className="second__side">
                        <h1 className="main__timer" onClick={toggle__func}>
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
                                <span className="last__times__block__item">09:14,44</span>
                                <span className="last__times__block__item">10:15,21</span>
                                <span className="last__times__block__item">05:16,12</span>
                                <span className="last__times__block__item">03:19,21</span>
                                <span className="last__times__block__item">12:13,87</span>
                            </div>
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
                </div>
            </div>
        </>
    )
}