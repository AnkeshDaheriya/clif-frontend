import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Award, Star, MessageCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../common/SideBar';
import Header from '../common/Header';

const Mentor = () => {
    const [activeTab, setActiveTab] = useState('about');

    const recommendedMentors = [
        {
            name: "Martha Clarke",
            availability: "Thursday",
            expertise: "Change Management, Communicating with Leaders",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Suzanna Gardner",
            availability: "Sunday",
            expertise: "Leadership Development",
            image: "https://plus.unsplash.com/premium_photo-1661416515253-b1081d62c245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Inga Bielinska",
            availability: "Wednesday",
            expertise: "Coaching, Inspiring Others, Empowering Others",
            image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Anatolii Zasoba",
            availability: "Monday",
            expertise: "Career Planning, Change Management",
            image: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Graham Russell",
            availability: "Tuesday",
            expertise: "Coaching, Executive Presence",
            image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const tabContent = {
        about: (
            <div className="space-y-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h3 className="card-title h5 mb-4">Professional Background</h3>
                        <p className="text-muted">
                            With over 20 years of experience in global manufacturing leadership, I've led numerous successful plant transformations and cultural change initiatives across multiple continents. My expertise spans operational excellence, leadership development, and creating high-performing teams in complex manufacturing environments.
                        </p>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="d-flex align-items-center gap-2">
                                    <MapPin className="text-purple" size={20} />
                                    <span className="text-muted">Based in Chicago, IL</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-center gap-2">
                                    <Clock className="text-purple" size={20} />
                                    <span className="text-muted">15+ years mentoring</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title h5 mb-4">Areas of Expertise</h3>
                        <div className="row g-3">
                            {['Change Management', 'Leadership Development', 'Team Building', 'Operations Excellence'].map((expertise, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="d-flex align-items-center gap-2">
                                        <Award className="text-purple" size={20} />
                                        <span>{expertise}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
        coaching: (
            <div className="card">
                <div className="card-body">
                    <div className="mb-4">
                        <h3 className="card-title h5 mb-3">Coaching Approach</h3>
                        <p className="text-muted">
                            My coaching style is collaborative and results-oriented. I believe in creating a safe space for leaders to explore challenges while maintaining clear focus on achieving tangible outcomes. I combine strategic thinking with practical application, ensuring that our sessions translate into real-world impact.
                        </p>
                    </div>
                    <div>
                        <h3 className="card-title h5 mb-3">Experience Highlights</h3>
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex gap-3">
                                <Star className="text-purple flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="h6 mb-2">Global Leadership Development</h4>
                                    <p className="text-muted mb-0">Mentored 100+ executives across 12 countries</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <Star className="text-purple flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="h6 mb-2">Change Management</h4>
                                    <p className="text-muted mb-0">Led 15 major organizational transformations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        testimonials: (
            <div className="d-flex flex-column gap-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="card">
                        <div className="card-body">
                            <div className="d-flex gap-3">
                                <MessageCircle className="text-purple flex-shrink-0" size={24} />
                                <div>
                                    <div className="d-flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="text-warning" size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-muted fst-italic mb-3">
                                        "Martha's guidance was transformative for my leadership journey. Her practical insights and supportive approach helped me navigate complex organizational challenges with confidence."
                                    </p>
                                    <div className="small text-muted">
                                        - Senior Director, Global Manufacturing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ),
        insights: (
            <div className="card">
                <div className="card-body">
                    <div className="mb-4">
                        <h3 className="card-title h5 mb-3">Leadership Philosophy</h3>
                        <p className="text-muted">
                            I believe that great leadership is about creating an environment where people can thrive and deliver their best work. My approach combines strategic thinking with emotional intelligence, focusing on both the human and business aspects of leadership.
                        </p>
                    </div>
                    <div>
                        <h3 className="card-title h5 mb-3">Featured Content</h3>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="h6 mb-2">Leading Through Change</h4>
                                        <p className="small text-muted mb-0">Strategic insights on managing organizational transformation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="h6 mb-2">Building High-Performance Teams</h4>
                                        <p className="small text-muted mb-0">Practical guide to developing and motivating teams</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div id="main-wrapper">
            <SideBar />
            <div className="page-wrapper skill-assessment-wrapper">
                <Header />
                <div className="bg-light min-vh-100">
                    <div className="container py-4">
                        {/* Recommended Section */}
                        <div className="mb-5">
                            <h2 className="h4 mb-4 mt-14 text-purple">Recommended Mentors</h2>
                            <div className="d-flex gap-4 overflow-auto pb-2 pt-2">
                                {recommendedMentors.map((mentor, index) => (
                                    <div key={index} className="mentor-card card flex-shrink-0" style={{ width: '280px' }}>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src={mentor.image}
                                                    alt={mentor.name}
                                                    className="rounded-circle"
                                                    style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                                                />
                                                <div>
                                                    <h3 className="h6 mb-1">{mentor.name}</h3>
                                                    <div className="d-flex align-items-center gap-2 small text-muted">
                                                        <Calendar size={14} />
                                                        <span>{mentor.availability}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="small text-muted mt-3 mb-0">{mentor.expertise}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Profile Section */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card profile-card mb-4">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <h1 className="display-6 fw-bold mb-4">Martha Clarke</h1>
                                                <p className="text-muted mb-4">
                                                    Global manufacturing leader specialized in plant transformations,
                                                    culture change, and developing excellent leaders and teams.
                                                </p>
                                                <button className="btn btn-purple rounded-pill px-4 mb-3">
                                                    Schedule with Martha
                                                </button>
                                                <div className="d-flex align-items-center gap-2 small text-muted">
                                                    <Calendar size={16} />
                                                    <span>Next available December 12 at 1:45 PM</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <img
                                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                    alt="Martha Clarke"
                                                    className="rounded-circle profile-image"
                                                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header bg-white">
                                        <ul className="nav nav-tabs custom-tabs card-header-tabs border-0">
                                            {[
                                                { id: 'about', label: 'About me' },
                                                { id: 'coaching', label: 'Coaching style and experience' },
                                                { id: 'testimonials', label: 'What members are saying' },
                                                { id: 'insights', label: 'Insightful introduction' }
                                            ].map((tab) => (
                                                <li key={tab.id} className="nav-item">
                                                    <button
                                                        onClick={() => setActiveTab(tab.id)}
                                                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                                    >
                                                        {tab.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {tabContent[activeTab]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .text-purple {
                            color: #6600CC !important;
                        }
                        
                        .btn-purple {
                            background-color: #6600CC;
                            border-color: #6600CC;
                            color: white;
                            transition: all 0.3s ease;
                        }
                        
                        .btn-purple:hover {
                            background-color: #5500AA;
                            border-color: #5500AA;
                            color: white;
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(102, 0, 204, 0.2);
                        }

                        .mentor-card {
                            transition: all 0.3s ease;
                            border: 1px solid rgba(0, 0, 0, 0.1);
                            cursor: pointer;
                        }
                        
                        .mentor-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
                            border-color: #6600CC;
                        }

                        .profile-card {
                            border: none;
                            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                        }

                        .profile-image {
                            border: 4px solid white;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                            transition: transform 0.3s ease;
                        }

                        .profile-image:hover {
                            transform: scale(1.05);
                        }
                        
                        .custom-tabs .nav-link {
                            color: #495057;
                            border: none;
                            padding: 1rem 1.5rem;
                            transition: all 0.3s ease;
                            position: relative;
                        }
                        
                        .custom-tabs .nav-link:hover {
                            color: #6600CC;
                        }
                        
                        .custom-tabs .nav-link.active {
                            color: #6600CC;
                            background: transparent;
                        }
                        
                        .custom-tabs .nav-link.active::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 2px;
                            background-color: #6600CC;
                        }
                        
                        .card {
                            border: 1px solid rgba(0, 0, 0, 0.1);
                            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                            transition: all 0.3s ease;
                        }
                        
                        .overflow-auto::-webkit-scrollbar {
                            height: 6px;
                        }
                        
                        .overflow-auto::-webkit-scrollbar-track {
                            background: #f1f1f1;
                            border-radius: 3px;
                        }
                        
                        .overflow-auto::-webkit-scrollbar-thumb {
                            background: #888;
                            border-radius: 3px;
                        }
                        
                        .overflow-auto::-webkit-scrollbar-thumb:hover {
                            background: #555;
                        }
                        
                        .gap-1 { gap: 0.25rem; }
                        .gap-2 { gap: 0.5rem; }
                        .gap-3 { gap: 1rem; }
                        .gap-4 { gap: 1.5rem; }
                        
                        .space-y-4 > * + * {
                            margin-top: 1.5rem;
                        }

                        .container {
                            max-width: 1200px;
                            margin: 0 auto;
                            padding-left: 1rem;
                            padding-right: 1rem;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

export default Mentor;