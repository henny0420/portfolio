import React from "react";
import './project.css';
import todo from '../../assets/image/todo1.png'
import greeny from '../../assets/image/greeny.png'
import book from '../../assets/image/book.png'

export default function Project() {
    return (
        <>

            <div className="project-section" id="project">
                <div className="container">
                    <div className="projects">
                        <div className="back-11"></div>
                        <div className="back-2"></div>
                        <div className="back-3"></div>
                        <div className="back-4"></div>
                        <div className="back-12"></div>
                        <div className="back-7"></div>
                    </div>

                    <div className="project-text">
                        <h1>My Projects</h1>
                        <div className="cards-p">
                            <div className="card-item">
                            <div class="card-project">
                                <img src={todo} alt="to-do-list"></img>
                                
                                <div class="card__content">
                                    <p class="card__title">To Do List</p>
                                    <p class="card__description">The To-Do List application is a simple yet powerful productivity tool that helps users organize their daily tasks efficiently. 
                                        Users can add, edit, and delete tasks to manage their workflow.it provides an intuitive user interface where 
                                        tasks are displayed in an organized manner</p>
                                    <a href="https://to-do-list-h20.vercel.app" target="_blank">
                                            <button class="card__button">Live Demo</button>
                                    </a>
                                    <a href="https://github.com/henny0420/to-do-list" target="_blank">
                                    <button class="card__button secondary">Source Code</button>
                                    </a>
                                </div>
                            </div>
                            <p className="hover">*Hover over the card for the details</p>
                              </div>
                            <div className="card-item">
                            <div class="card-project">
                                <img src={greeny} alt="to-do-list"></img>
                                
                                <div class="card__content">
                                    <p class="card__title">Greeny</p>
                                    <p class="card__description">The Online Grocery Shop is a full-stack web application designed to provide users with
                                         a smooth and modern shopping experience. It allows customers to browse 
                                        products, add them to their cart, and place orders conveniently from home.</p>
                                    <ul>
                                        <li>User-friendly interface for browsing grocery products by category.</li>
                                        <li>Shopping cart with add, update, and remove functionality.</li>
                                        <li>Admin dashboard to manage products, categories, users, and orders.</li>
                                    </ul>
                                    <a href="https://to-do-list-h20.vercel.app" target="_blank">
                                            <button class="card__button">Live Demo</button>
                                    </a>
                                    <a href="https://github.com/henny0420/to-do-list" target="_blank">
                                    <button class="card__button secondary">Source Code</button>
                                    </a>
                                </div>
                            </div>
                            <p className="hover">*Hover over the card for the details</p>
                              </div>
                            <div className="card-item">
                            <div class="card-project">
                                <img src={book} alt="to-do-list"></img>
                                
                                <div class="card__content">
                                    <p class="card__title">Book flow</p>
                                    <p class="card__description">The Online Book Store is a web application that allows users to explore,
                                         search, and purchase books from different genres in a seamless digital shopping experience.
                                         It is designed with a focus on usability, scalability, and clean UI/UX.</p>
                                         <ul>
                                            <li>Browse books by category, author, or title.</li>
                                            <li>Shopping cart with add, update, and remove options.</li>
                                            <li>User authentication and profile management.</li>
                                         </ul>
                                    <a href="https://online-bookstore-henny.vercel.app" target="_blank">
                                            <button class="card__button">Live Demo</button>
                                    </a>
                                    <a href="https://github.com/henny0420/online-bookstore" target="_blank">
                                    <button class="card__button secondary">Source Code</button>
                                    </a>
                                </div>
                            </div>
                            <p className="hover">*Hover over the card for the details</p>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}