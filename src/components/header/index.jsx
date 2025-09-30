import React from "react";
import './header.css';

export default function Header() {
    return (

        <header>
            <div className="container">
                <div className="section-header">
                    <div className="my-name">
                        <a>H</a>
                        <a>enny</a>
                    </div>
                    <div className="elements">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skill">Skills</a>
                        <a href="#project">Projects</a>
                        <a href="#contact   ">Contact</a>
                </div>
                    </div>
            </div>
        </header>

    )
}