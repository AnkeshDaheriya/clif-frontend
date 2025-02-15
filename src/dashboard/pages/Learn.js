import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDown } from 'lucide-react';
import SideBar from '../common/SideBar';
import Header from '../common/Header';
import '../assets/Learn.css';

const Learn = () => {
    const [platforms, setPlatforms] = useState('');
    const [technology, setTechnology] = useState('');

    const courses = [
        {
            title: 'Cloud Technology Principles',
            description: 'Cloud technology principles ensure scalable and efficient IT resource management.',
            icon: '🌥️',
            platform: 'Airtable'
        },
        {
            title: 'Salesforce Front End',
            description: 'Cloud technology principles ensure scalable, flexible, and efficient IT resource management',
            icon: '🐻',
            platform: 'Airtable'
        },
        {
            title: 'Chat GPT',
            description: 'Cloud technology principles ensure scalable, flexible, and efficient IT resource management.',
            icon: '🔄',
            platform: 'Airtable'
        },
        {
            title: 'Airtable',
            description: 'Cloud technology principles ensure scalable and efficient IT resource management',
            icon: '🔄',
            platform: 'Airtable'
        }
    ];

    return (
        <div id="main-wrapper">
            <SideBar />
            <div className="page-wrapper learn-wrapper">
                <Header />
                <div className="learn-content p-4">
                    <h1 className="mb-4 mt-10 pt-2">Learn</h1>

                    <div className="filters row mb-4">
                        <div className="col-md-6 mb-3">
                            <label className="text-secondary mb-2">Platforms</label>
                            <div className="custom-select">
                                <select
                                    className="form-select"
                                    value={platforms}
                                    onChange={(e) => setPlatforms(e.target.value)}
                                >
                                    <option value="">Select Platform</option>
                                    <option value="airtable">Airtable</option>
                                    <option value="salesforce">Salesforce</option>
                                </select>
                                <ChevronDown className="select-icon" size={20} />
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="text-secondary mb-2">Technology</label>
                            <div className="custom-select">
                                <select
                                    className="form-select"
                                    value={technology}
                                    onChange={(e) => setTechnology(e.target.value)}
                                >
                                    <option value="">Select Technology</option>
                                    <option value="cloud">Cloud</option>
                                    <option value="frontend">Frontend</option>
                                </select>
                                <ChevronDown className="select-icon" size={20} />
                            </div>
                        </div>
                    </div>

                    <h3 id='beginnerh2' className="text-secondary mb-4">Beginner Level</h3>

                    <div className="row">
                        {courses.map((course, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <div className="course-card">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h3 className="card-title mb-3">{course.title}</h3>
                                            <p className="card-text text-secondary mb-4">
                                                {course.description}
                                            </p>
                                            <div className="course-icon mb-3">
                                                {course.icon}
                                            </div>
                                            <div className="platform-badge">
                                                {course.platform}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;