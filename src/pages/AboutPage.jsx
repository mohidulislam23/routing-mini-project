import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page ">
                <section className="hero">
                    <div className="container feature-card-left">
                        <h1>BJIT ACADEMY</h1>
                        <p>The world, along with technology is always evolving, and we need to keep pace to stay ahead of the curve. Technological innovations are rapidly altering the social & economic landscape, and it is imperative that we prepare our youth for the new opportunities and challenges that they will come across. With support from the top qualified educators, we want to prepare our youth for jobs not just at BJIT, but anywhere in the world. Together, we will transform our country into a global powerhouse.</p>
                    </div>
                </section>
                <section className="mission ">
                    <div className="container feature-card-left">
                        <h2>Our Mission</h2>
                        <p>The world, along with technology is always evolving, and we need to keep pace to stay ahead of the curve. Technological innovations are rapidly altering the social & economic landscape, and it is imperative that we prepare our youth for the new opportunities and challenges that they will come across. With support from the top qualified educators, we want to prepare our youth for jobs not just at BJIT, but anywhere in the world. Together, we will transform our country into a global powerhouse.</p>
                    </div>
                </section>
                <section className="values ">
                    <div className="container feature-card-left">
                        <h2>Our Values</h2>
                        <ul>
                            <li>Excellence</li>
                            <li>Innovation</li>
                            <li>Collaboration</li>
                            <li>Integrity</li>
                            <li>Diversity</li>
                        </ul>
                    </div>
                </section>
                <section className="team ">
                    <div className="container feature-card-left">
                        <h2>Our Team</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="team-member feature-card">
                                    {/* <img src="team-member1.jpg" alt="Team Member 1" /> */}
                                    <h3>John Doe</h3>
                                    <p>Co-Founder</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="team-member feature-card">
                                    {/* <img src="team-member2.jpg" alt="Team Member 2" /> */}
                                    <h3>Jane Smith</h3>
                                    <p>Lead Instructor</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="team-member feature-card">
                                    {/* <img src="team-member3.jpg" alt="Team Member 3" /> */}
                                    <h3>David Johnson</h3>
                                    <p>Program Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutPage;
