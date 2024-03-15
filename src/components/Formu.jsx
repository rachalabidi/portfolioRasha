import React, { Component } from 'react';
import './style/Contact.css';

class Formu extends Component {
    render() {
        return (
            <div>
               <div className="container">
            <div className="blur-container">
                {/* Left Section - Contact Form */}
                <div className="left-section">
                    <h2>Get in Touch </h2>
                 

                    <form id="contact-form" className="contact-form" role="form">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Name" name="name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                {/* Right Section - Image */}
                <div className="right-section">
                    <img src={require("./Contact us-rafiki.png")} alt="Your Image" />
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Formu;