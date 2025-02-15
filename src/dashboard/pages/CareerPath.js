import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/CareerPath.css';
import Header from '../common/Header';
import SideBar from '../common/SideBar';

const CareerPath = () => {
    const [activeTimeline, setActiveTimeline] = useState('3 Months');
    const [searchTerm, setSearchTerm] = useState('');

    const timelineOptions = ['3 Months', '6 Months', '1 Year', '1.5 Year'];

    const careerPathData = [
        {
            category: 'Core Infrastructure',
            courses: [
                {
                    icon: 'microsoft',
                    name: 'Active Directory and Entra ID Administration',
                    progress: 30
                },
                {
                    icon: 'couchbase',
                    name: 'Administer and Monitor Couchbase',
                    progress: 0
                },
                {
                    icon: 'cisco',
                    name: 'Administering a Cisco Collaboration Deployment from the Ground Up',
                    progress: 0
                },
                {
                    icon: 'microsoft',
                    name: 'Administering Microsoft 365 Security',
                    progress: 0
                }
            ]
        },
        {
            category: 'Specialized Skills',
            courses: [
                {
                    icon: 'istob',
                    name: 'ISTOB® CTFL',
                    progress: 20
                },
                {
                    icon: 'istob',
                    name: 'ISTOB® Specialist: Usability Testing',
                    progress: 0
                },
                {
                    icon: 'governance',
                    name: 'IT Governance Foundation',
                    progress: 0
                },
                {
                    icon: 'governance',
                    name: 'IT Governance Implementation',
                    progress: 0
                }
            ]
        }
    ];

    const styles = {
        mainColor: '#6600CC',
        softPurple: 'rgba(102, 0, 204, 0.1)',
        pageWrapper: {
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            paddingTop: '80px' // Add padding to prevent header overlap
        },
        contentContainer: {
            padding: '24px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
        },
        timelineButton: (isActive) => ({
            backgroundColor: isActive ? '#6600CC' : 'white',
            color: isActive ? 'white' : '#6600CC',
            border: '1px solid #6600CC',
            borderRadius: '16px',
            padding: '6px 14px',
            margin: '0 6px',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }),
        searchInput: {
            borderRadius: '16px',
            border: '1px solid rgba(102, 0, 204, 0.2)',
            padding: '6px 16px',
            paddingRight: '36px',
            width: '220px',
            fontSize: '14px',
            transition: 'all 0.3s ease'
        },
        searchContainer: {
            position: 'relative'
        },
        searchIcon: {
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#6600CC',
            fontSize: '14px'
        },
        categoryTitle: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#6600CC',
            marginBottom: '16px',
            marginTop: '24px'
        },
        courseCard: {
            border: '1px solid rgba(102, 0, 204, 0.1)',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            backgroundColor: 'white',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(102, 0, 204, 0.05)'
        },
        courseName: {
            fontSize: '15px',
            fontWeight: '500',
            color: '#2c3e50',
            marginBottom: '12px',
            lineHeight: '1.4'
        },
        progressBar: {
            backgroundColor: 'rgba(102, 0, 204, 0.1)',
            height: '6px',
            borderRadius: '3px',
            overflow: 'hidden'
        },
        progressFill: (progress) => ({
            width: `${progress}%`,
            backgroundColor: '#6600CC',
            height: '100%',
            borderRadius: '3px',
            transition: 'width 0.3s ease'
        }),
        progressText: {
            fontSize: '12px',
            fontWeight: '500',
            color: '#6600CC'
        },
        timelineContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        timelineItem: (isActive) => ({
            display: 'flex',
            alignItems: 'center',
            backgroundColor: isActive ? '#6600CC' : 'white',
            color: isActive ? 'white' : '#6600CC',
            border: '1px solid #6600CC',
            borderRadius: '20px',
            padding: '6px 14px',
            fontSize: '14px',
            fontWeight: '500',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: 'fit-content'
        }),
        timelineArrow: {
            color: '#6600CC',
            fontSize: '14px',
            margin: '0 -4px',
            fontWeight: 'bold'
        }
    };

    const renderCourseIcon = (iconName) => {
        const iconMap = {
            'microsoft': '🖥️',
            'couchbase': '📊',
            'cisco': '🌐',
            'istob': '🔬',
            'governance': '📋'
        };
        return iconMap[iconName] || '📚';
    };

    const filteredCourses = careerPathData.map(category => ({
        ...category,
        courses: category.courses.filter(course =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }));

    return (
        <div id="main-wrapper">
            <SideBar />
            <div className="page-wrapper">
                <Header />
                <div style={styles.pageWrapper}>
                    <div className="container">
                        <div style={styles.contentContainer}>
                            {/* Fixed Timeline Section */}
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div style={styles.timelineContainer}>
                                    {timelineOptions.map((option, index) => (
                                        <React.Fragment key={option}>
                                            <div
                                                onClick={() => setActiveTimeline(option)}
                                                style={styles.timelineItem(activeTimeline === option)}
                                            >
                                                {option}
                                            </div>
                                            {index < timelineOptions.length - 1 && (
                                                <div style={styles.timelineArrow}>›</div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div style={styles.searchContainer}>
                                    <input
                                        type="text"
                                        placeholder="Search courses"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        style={styles.searchInput}
                                    />
                                    <span style={styles.searchIcon}>🔍</span>
                                </div>
                            </div>

                            {/* Courses Grid */}
                            {filteredCourses.map((category, categoryIndex) => (
                                category.courses.length > 0 && (
                                    <div key={categoryIndex}>
                                        <h2 style={styles.categoryTitle}>{category.category}</h2>
                                        <div className="row g-3">
                                            {category.courses.map((course, courseIndex) => (
                                                <div key={courseIndex} className="col-md-6">
                                                    <div
                                                        style={styles.courseCard}
                                                        className="course-card"
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3" style={{ fontSize: '1.5rem' }}>
                                                                {renderCourseIcon(course.icon)}
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h5 style={styles.courseName}>
                                                                    {course.name}
                                                                </h5>
                                                                <div style={styles.progressBar}>
                                                                    <div style={styles.progressFill(course.progress)} />
                                                                </div>
                                                                <div className="text-end mt-2">
                                                                    <span style={styles.progressText}>
                                                                        {course.progress}% completed
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerPath;