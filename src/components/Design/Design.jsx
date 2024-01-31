import React from "react";
import Timer from "../Timer/Timer.jsx"
import './design.css'







export default function Design(){

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
                                    <img src="./image/clear__button.png" alt="reset" className="reset__button__image" />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="second__side">
                        <h1 className="main__timer">
                            01:01,56
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
                                    <img src="./image/clear__button.svg" alt="reset" className="reset__button__image" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}