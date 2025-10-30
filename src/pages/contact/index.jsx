import React from "react";
import './contact.css';
import { Mail, Phone, Github, Link, Linkedin, MapPin } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
// import toast, { Toaster } from 'react-hot-toast';


export default function Contact() {

    // const notify = () => toast('Message successfull');

    const [state, handleSubmit] = useForm("myznwole");


    return (
        <>
            <div className="section-contact" id="contact">
                <div className="container">
                    <div className="contact">
                        <h1>Get In Touch</h1>


                        <div className="back-11"></div>
                        <div className="back-32"></div>
                        <div className="back-3"></div>
                        <div className="back-4"></div>
                        <div className="back-12"></div>
                        <div className="back-7"></div>

                        <div className="contact-grid">
                            <div className="contact-item">
                                <div className="item-detail">
                                    <div className="icon">
                                        <Mail />
                                    </div>
                                    <div className="icon-text">
                                        <span>Email</span>
                                        <span>henny.viadiya20@gmail.com</span>
                                    </div>

                                </div>
                                <div className="item-detail">
                                    <div className="icon">
                                        <Phone />

                                    </div>
                                    <div className="icon-text">
                                        <span>Phone</span>
                                        <span>+91 93169 29055</span>
                                    </div>

                                </div>
                                <div className="item-detail">
                                    <div className="icon">
                                        <Github />

                                    </div>
                                    <div className="icon-text">
                                        <span>Github</span>
                                        <span><a href="https://github.com/henny0420" target="_blank">henny0420 <Link /></a></span>
                                    </div>

                                </div>
                                <div className="item-detail">
                                    <div className="icon">
                                        <Linkedin />

                                    </div>
                                    <div className="icon-text">
                                        <span>Linkedin</span>
                                        <span><a href="www.linkedin.com/in/henny-viradiya" target="_blank">Henny Viradiya <Link /></a></span>
                                    </div>

                                </div>
                                <div className="item-detail">
                                    <div className="icon">
                                        <MapPin />

                                    </div>
                                    <div className="icon-text">
                                        <span>Location</span>
                                        <span>Surat,Gujrat</span>
                                    </div>

                                </div>

                            </div>
                            <div className="contact-item sec animate__animated animate__zoomIn wow">
                                {/* <input placeholder="Your Name"></input>
                                <input placeholder="Contact no."></input>
                                <textarea placeholder="leave your message here"></textarea>
                                <button >Submit</button> */}



                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="Name">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="name"
                                        name="name"
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                    />
                                    <label htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <label htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="leave your message here"
                                        id="message"
                                        name="message"
                                    />
                                    <ValidationError

                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                    <button type="submit" disabled={state.submitting} className="button1">
                                      

                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}