import React from "react";
import './skill.css';
import c from '../../assets/image/C.png'
import Cpp from '../../assets/image/Cpp.png'
import html from '../../assets/image/html.png'
import css from '../../assets/image/css.png'
import tailwind from '../../assets/image/tailwind.png'
import js from '../../assets/image/js.png'
import react from '../../assets/image/react.png'
import scss from '../../assets/image/scss.png'
import next from '../../assets/image/next.png'
import ts from '../../assets/image/ts.png'

export default function Skills() {
    return (
        <>

            <div className="skill-section" id="skill">
                <div className="container">
                    <div className="back-10"></div>
                    <div className="back-52"></div>
                    <div className="back-3"></div>
                    <div className="back-4"></div>
                    <div className="back-8"></div>
                    <div className="back-7"></div>
                    <div className="back-51"></div>

                    <div className="skill-text">
                        <h1>My Skills</h1>
                        <h2>Programming Technologies</h2>
                    </div>
                    <div className="skill-cards">
                        
                        <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={c} alt="c-language"></img>
                            <p>C</p>
                        </div>
                        <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={Cpp} alt="c-language"></img>
                            <p>C++</p>
                        </div>
                        <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={html} alt="c-language"></img>
                            <p>HTML5</p>
                        </div>
                        <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={css} alt="c-language"></img>
                            <p>CSS3</p>
                        </div>
                        
                        <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={js} alt="c-language" className="js"></img>
                            <p>JAVA SCRIPT</p>
                        </div>
                        <div className="card animate__animated animate__fadeInLeft wow" >
                            <img src={ts} alt="c-language" className="ts"></img>
                            <p>TYPE SCRIPT</p>
                        </div>
                       
                    </div>
                    <div className="skill-text">
                        <h2>Fremwork and Libraries</h2>
                    </div>
                    <div className="skill-cards">
                        
                         <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={react} alt="react"></img>
                            <p>REACT.JS</p>
                        </div>
                         <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={next} alt="next" className="next"></img>
                            <p>NEXT.JS</p>
                        </div>
                    </div>
                    <div className="skill-text">
                        <h2>Styling & UI</h2>
                    </div>
                    <div className="skill-cards">
                        <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={scss} alt="c-language" className="scss"></img>
                            <p>SCSS</p>
                        </div>
                         <div className="card animate__animated animate__fadeInLeft wow">
                            <img src={tailwind} alt="c-language" className="tailwind"></img>
                            <p>Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}