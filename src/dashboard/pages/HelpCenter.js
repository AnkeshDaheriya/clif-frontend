import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../common/SideBar';
import Header from '../common/Header';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../assets/HelpCenter.css';

const HelpCenter = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="main-wrapper">
            <SideBar />
            <div className="page-wrapper help-center-wrapper">
                <Header />
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="help-center-card">
                                    <div className="help-center-header">
                                        <h1>Help Center</h1>
                                        <p>We're here to help! Send us your query</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="contact-info">
                                                <div className="contact-info-item">
                                                    <Mail size={40} className="icon" />
                                                    <div>
                                                        <h5>Email Us</h5>
                                                        <p>support@example.com</p>
                                                    </div>
                                                </div>
                                                <div className="contact-info-item">
                                                    <Phone size={40} className="icon" />
                                                    <div>
                                                        <h5>Call Us</h5>
                                                        <p>+1 234 567 8900</p>
                                                    </div>
                                                </div>
                                                <div className="contact-info-item">
                                                    <MapPin size={40} className="icon" />
                                                    <div>
                                                        <h5>Visit Us</h5>
                                                        <p>123 Business Ave, Suite 100</p>
                                                    </div>
                                                </div>
                                                <div className="contact-info-item">
                                                    <Clock size={40} className="icon" />
                                                    <div>
                                                        <h5>Business Hours</h5>
                                                        <p>Mon - Fri: 9AM to 5PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="contact-form">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-group">
                                                                <label>First Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="firstName"
                                                                    value={formData.firstName}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="form-group">
                                                                <label>Last Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="lastName"
                                                                    value={formData.lastName}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label>Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label>Message</label>
                                                        <textarea
                                                            className="form-control"
                                                            rows="4"
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            required
                                                        ></textarea>
                                                    </div>
                                                    <button type="submit" className="submit-btn">
                                                        <Send size={20} className="me-2" />
                                                        Submit Message
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;