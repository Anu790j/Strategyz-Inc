/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import careers from "../../assets/images/careers.jpg";


export const Careers = (props) => {
    const [activeTab, setActiveTab] = useState("Internaljobs");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="careers">
            <div className="careers-top">
                <h1>Define Your Career with Strategyz</h1>
                <div className="career-banner">
                    <div className="career-img">
                        <img src={careers} alt="" className="careersimg" />
                    </div>
                    <div className="careers-top-content">
                        <p>
                            At Strategyz, we are always looking for talented individuals to join our team. We offer a wide range of career opportunities across a variety of disciplines. Whether you are an experienced professional or a recent graduate, we have a place for you.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <aside className="sidebar">
                    <ul>
                        <li><a href="#overview" className="page-scroll">What We Do</a></li>
                        <li><a href="#working" className="page-scroll">Apply</a></li>
                        <li><a href="#clients" className="page-scroll">Insights</a></li>
                    </ul>
                </aside>

                <main>
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>“Our client's systems support modern society. In making them faster, more productive, and more secure, we don't just make business work better. We make the world work better.”</p>
                    </section>
                    <section id="working">
                        <h2>What does STRATEGYZ do?</h2>
                        <p>We bring together all the necessary technology and services to help our clients solve their business problems.</p>
                        
                        <nav className="working-navbar">
                            <ul>
                                <li>
                                    <a
                                        className={activeTab === "Internaljobs" ? "active" : ""}
                                        onClick={() => handleTabClick("Internaljobs")}
                                    >
                                        Internal Openings
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={activeTab === "Clientjobs" ? "active" : ""}
                                        onClick={() => handleTabClick("Clientjobs")}
                                    >
                                        Client Openings
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        
                        {activeTab === "Internaljobs" && (
                            <div id="working-navbar-content" >
                                <h3>Internal Openings</h3>
                                <div class="job-container">
                                    <div class="job-card">
                                        <h4>Title of Job 1</h4>
                                        <p>Description of Job 1</p>
                                        <a href="link_to_form_for_job_1">Apply for Job 1</a>
                                    </div>
                                    <div class="job-card">
                                        <h4>Title of Job 2</h4>
                                        <p>Description of Job 2</p>
                                        <a href="link_to_form_for_job_2">Apply for Job 2</a>
                                    </div>
                                    <div class="job-card">
                                        <h4>Title of Job 3</h4>
                                        <p>Description of Job 3</p>
                                        <a href="link_to_form_for_job_3">Apply for Job 3</a>
                                    </div>
                                    <div class="job-card">
                                        <h4>Title of Job 4</h4>
                                        <p>Description of Job 4</p>
                                        <a href="link_to_form_for_job_4">Apply for Job 4</a>
                                    </div>
                                </div>
                            
                            </div>
                        
                        )}
                        {activeTab === "Clientjobs" && (
                            <div id="working-navbar-content">
                                <h3>Client Openings</h3>
                                
                            </div>
                        )}
                    </section>
                    <section id="clients">
                <h2>Clients</h2>
                  <div class="flex-container">
                    <div class="box">
                      <img src="img/StrategyzInfo_logo/ibm.png" alt="ibm logo"></img>
                      <p>IBM</p>
                    </div>
                    <div class="box">
                      <img src="img/StrategyzInfo_logo/hexawareT logo.jpeg" alt="Hexaware logo"></img>
                      <p>Hexaware Technologies</p>
                    </div>
                    <div class="box">
                      <img src="img/StrategyzInfo_logo/RangT logo.png" alt="Rang Technologies logo"></img>
                      <p>Rang Technologies</p>
                    </div>
                    <div class="box">
                      <img src="img/StrategyzInfo_logo/HarjaiC logo.png" alt="Harjai Computers logo"></img>
                      <p>Harjai Computers</p>
                    </div>
                    <div class="box">
                      <img src="img/StrategyzInfo_logo/fabH logo.png" alt="Fab Hotels logo"></img>
                      <p>FabHotels</p>
                    </div>
                    
                    
                  </div>
            </section>
                </main>
            </div>

            <div id="footer">
                <div className="container text-center">
                    <p>&copy; 2024 Strategyz Inc. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};
