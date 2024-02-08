import React, { useRef } from "react";
import Timer from "../Timer/Timer.jsx"
import { Scrollbars } from 'react-custom-scrollbars';
import './design.css'
import { useState, useEffect } from "react";


export default function Design(){
const [time, setTime] = useState(0)
const [toggle, setToggle] = useState(false)
const [color, setColor] = useState('#0B0A07')
const [last__times, setLast__times] = useState([])
const [display__style, setDisplay__style] = useState('none')
const [windowWidth, setWindowWidth] = useState(window.innerWidth)


const lastTimesLocal = localStorage.getItem('last__times');

useEffect(() => {
    lastTimesLocal ? setLast__times(JSON.parse(lastTimesLocal)) : null
}, []);

useEffect(()=>{
    let brake__array
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


const colors__for__last__elem = ['rgb(0, 147, 0)','rgb(0, 107, 0)','rgb(18, 78, 0)']

function last__times__func() {
    const lastTimes = JSON.parse(lastTimesLocal);
    if (!Array.isArray(lastTimes)) {
        return null;
    }
    
    return lastTimes.map((item, index) => (
        <span key={index} className="last__times__block__item" style={{ color: index >= lastTimes.length - 3 ? colors__for__last__elem[index - lastTimes.length + 3] : 'inherit' }}>
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


// middleresoult

let middle__res = last__times.reduce((total, num) => total + num, 0) / last__times.length

function middle__res__func(){
    if(last__times.length===0){
        return(
            <span>00:00.00</span>
        )
    }else{
        return(
            <>
                <span>{String(parseInt(middle__res / 6000) % 60).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(parseInt(middle__res / 100) % 60).padStart(2, '0')}</span>
                <span>.</span> 
                <span>{String(parseInt(middle__res % 100)).padStart(2, '0')}</span>
            </>
        )
    }
}

function middle__ten__func(){
    let lastTen = last__times.slice(-10).reduce((total, num)=> total + num, 0) / last__times.slice(-10).length
    if(last__times.length >= 10){
        return(
            <>
                <span>{String(parseInt(lastTen / 6000) % 60).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(parseInt(lastTen / 100) % 60).padStart(2, '0')}</span>
                <span>.</span> 
                <span>{String(parseInt(lastTen % 100)).padStart(2, '0')}</span>
            </>
        )
    }else{
        return(
            <span>00:00.00</span>
        )
    }
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
                                {middle__res__func()}
                            </p>
                            <h2 className="middle__times__text__two">
                                Середній час складання (10р.)
                            </h2>
                            <p className="middle__times__two">
                                {middle__ten__func()}
                            </p>
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
                                <Scrollbars style={{height: windowWidth > 409 ? '85%' : '70%'}}>
                                    <div className="last__times__block">
                                        {last__times__func()}
                                    </div>
                                </Scrollbars>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}