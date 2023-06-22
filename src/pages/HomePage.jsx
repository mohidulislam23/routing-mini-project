import React, { Component } from 'react';
import './height.css';
import './card.css';


class HomePage extends Component {
    render() {
        return (
            <div className="homepage home" >
                <header className="hero">
                    <div className="container feature-card-left">
                        <h1>Welcome to BJIT Academy</h1>
                        <p>Empowering minds, shaping futures</p>
                    </div>
                </header>
                <section className="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-card">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                    <h3>Expert Instructors</h3>
                                    <p>Learn from industry professionals with years of experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-card">
                                    <i className="fas fa-laptop-code"></i>
                                    <h3>Hands-on Learning</h3>
                                    <p>Get practical, real-world experience through hands-on projects.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-card">
                                    <i className="fas fa-certificate"></i>
                                    <h3>Certification Programs</h3>
                                    <p>Earn industry-recognized certifications upon completion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta ">
                    <div className="container feature-card">
                        <h2>Start Your Learning Journey Today!</h2>
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;
