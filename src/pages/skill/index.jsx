import React from "react";
import './skill.css';
import c from '../../assets/image/C.png'
import Cpp from '../../assets/image/Cpp.png'
import html from '../../assets/image/html.png'
import css from '../../assets/image/css.png'
import tailwind from '../../assets/image/tailwind.png'
import js from '../../assets/image/js.png'
import react from '../../assets/image/react.png'

export default function Skills() {
    return (
        <>

            <div className="skill-section" id="skill">
                <div className="container">
                    <div className="back-10"></div>
                    <div className="back-2"></div>
                    <div className="back-3"></div>
                    <div className="back-4"></div>
                    <div className="back-8"></div>
                    <div className="back-7"></div>

                    <div className="skill-text">
                        <h1>My Skills</h1>
                    </div>
                    <div className="skill-cards">
                        
                        <div className="card">
                            <img src={c} alt="c-language"></img>
                            <p>C</p>
                        </div>
                        <div className="card">
                            <img src={Cpp} alt="c-language"></img>
                            <p>C++</p>
                        </div>
                        <div className="card">
                            <img src={html} alt="c-language"></img>
                            <p>HTML5</p>
                        </div>
                        <div className="card">
                            <img src={css} alt="c-language"></img>
                            <p>CSS3</p>
                        </div>
                        <div className="card">
                            <img src={tailwind} alt="c-language" className="tailwind"></img>
                            <p>Tailwind</p>
                        </div>
                        <div className="card">
                            <img src={js} alt="c-language" className="js"></img>
                            <p>JAVA SCRIPT</p>
                        </div>
                        <div className="card">
                            <img src={react} alt="c-language"></img>
                            <p>REACT</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}