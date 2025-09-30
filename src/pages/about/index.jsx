import React from "react";
import './about.css';
import bitmoji from '../../assets/image/bitimoji.png'

export default function About() {
    return (
        <>
            <div className="section-about" id="about">
                <div className="container">
                    <div className="back-1"></div>
                    <div className="back-2"></div>
                    <div className="back-3"></div>
                    <div className="back-4"></div>
                    <div className="back-5"></div>
                    <div className="back-6"></div>
                    <div className="about-me">

                        <div className="layer">
                            <div className="bitmoji">
                                <img src={bitmoji} alt="bitmoji"></img>
                            </div>
                            <div className="discription">
                                <h2>About Me</h2>
                                <p>I am a third-year Bachelor of Computer Applications student and an aspiring Front-End Developer with a deep passion for creating intuitive, responsive, and engaging user experiences. <br></br><br></br>
                                    Through my coursework and personal projects, I have gained hands-on experience building applications with modern web technologies, primarily focusing on React, JavaScript (ES6+), HTML5, and CSS3. <br></br>I am a quick learner, a collaborative team player, and I am always excited to tackle new challenges.

                                    I am actively seeking a front-end internship where I can contribute my skills to a creative team, learn from experienced mentors, and continue to grow as a developer."</p>

                                <a href="./resume1.pdf" target="_blank"><button class="button"></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}