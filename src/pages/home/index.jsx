import React from "react";
import './home.css';
import myimage from '../../assets/image/myimage.png'
import Typewriter from 'typewriter-effect';
import html from '../../assets/image/html.png'

export default function Home() {
    return (
        <>
            <div className="section-home" id="home">
                <div className="container">
                <div className="back-1"></div>
                <div className="back-2"></div>
                <div className="back-3"></div>
                <div className="back-4"></div>
                <div className="back-5"></div>
                <div className="back-7"></div>


                <div className="my-image">
                    <img src={myimage} alt="my-image"></img>
                </div>

                <div className="text">
                    <h3>HII , I'm</h3>
                    <h1>
                    <Typewriter
                        options={{
                            strings: ['HENNY   VIRADIYA'],
                            autoStart: true,
                            loop: true,
                            pauseFor:'2000ms',
                            delay:'natural'
                        }} />
                        </h1>
                        <h2>Web Developer </h2>
                        <p>Specializing in frontend design and modern web<br></br> technologies</p>
                        <a href="./resume1.pdf" target="_blank"><button class="button"></button></a>
                </div>

            </div>
            </div>
        </>
    )
}