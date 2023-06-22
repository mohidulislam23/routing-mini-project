import React, { Component } from 'react';
import './height.css';
import './card.css';

class ContactPage extends Component {
    render() {
        return (
            <div className="contact-page home">
                <section className="hero">
                    <div className="container feature-card-left">
                        <h1>Contact Us</h1>
                        <p>We are always here to extend our helping hand. Please feel free to reach out us anytime.</p>
                    </div>
                </section>
                <section className="contact-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-details feature-card-left">
                                    <h2>Contact Details</h2>
                                    <p><i className="fas fa-map-marker-alt"></i> House-1, Road-2E, Block-J, Baridhara, Dhaka-1212, Bangladesh</p>
                                    <p><i className="fas fa-envelope"></i> info@bjitacademy.com</p>
                                    <p><i className="fas fa-phone"></i> 01717-800817</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-form feature-card">
                                    <h2>Send us a Message</h2>
                                    <form method="post" action="">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Contact Number" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactPage;
