import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../common/SideBar';
import Header from '../common/Header';
import '../assets/SkillAssessment.css'; // We'll create a separate CSS file for custom styling

const SkillAssessment = () => {
    // Sample data for the graph
    const progressData = [
        { name: 'Week 1', progress: 30, score: 45 },
        { name: 'Week 2', progress: 45, score: 55 },
        { name: 'Week 3', progress: 60, score: 65 },
        { name: 'Week 4', progress: 75, score: 78 },
        { name: 'Week 5', progress: 85, score: 88 },
        { name: 'Week 6', progress: 95, score: 92 }
    ];

    // Sample enrolled courses data
    const enrolledCourses = [
        {
            id: 1,
            name: 'Introduction to React',
            progress: 75,
            hoursWatched: 12,
            totalHours: 16,
            score: 88,
            lastAccessed: '2024-02-08'
        },
        {
            id: 2,
            name: 'Advanced JavaScript Concepts',
            progress: 45,
            hoursWatched: 8,
            totalHours: 20,
            score: 92,
            lastAccessed: '2024-02-09'
        },
        {
            id: 3,
            name: 'Node.js Fundamentals',
            progress: 30,
            hoursWatched: 4,
            totalHours: 15,
            score: 85,
            lastAccessed: '2024-02-10'
        }
    ];

    const customStyles = {
        mainColor: '#6600CC',
        accentColor: '#8A2BE2',
        backgroundColor: '#f4f6f9',
        cardBorder: '1px solid rgba(102, 0, 204, 0.1)',
        progressBarBackground: 'rgba(102, 0, 204, 0.1)',
    };

    return (
        <div id="main-wrapper">
            {/* Sidebar Start */}
            <SideBar />
            <div className="page-wrapper skill-assessment-wrapper">
                <Header />
                <div className="container-fluid skill-assessment-container px-4 py-4">
                    {/* Header Section */}
                    <div className="row mb-4 align-items-center">
                        <div className="col">
                            <h1
                                className="skill-assessment-title mb-0"
                                style={{
                                    color: customStyles.mainColor,
                                    fontWeight: 600,
                                    fontSize: '2rem'
                                }}
                            >
                                Skills Assessment
                            </h1>
                        </div>
                    </div>

                    {/* Graph Section */}
                    <div
                        className="card skill-assessment-graph mb-4 shadow-sm"
                        style={{
                            border: customStyles.cardBorder,
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="card-body p-4">
                            <h5
                                className="card-title mb-3"
                                style={{
                                    color: customStyles.accentColor,
                                    fontWeight: 600
                                }}
                            >
                                Learning Progress
                            </h5>
                            <div style={{ height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={progressData}>
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="rgba(102, 0, 204, 0.1)"
                                        />
                                        <XAxis
                                            dataKey="name"
                                            tick={{ fill: customStyles.mainColor }}
                                        />
                                        <YAxis
                                            tick={{ fill: customStyles.mainColor }}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'white',
                                                border: `1px solid ${customStyles.mainColor}`
                                            }}
                                        />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="progress"
                                            stroke={customStyles.mainColor}
                                            strokeWidth={3}
                                            dot={{
                                                stroke: customStyles.mainColor,
                                                strokeWidth: 2,
                                                r: 5
                                            }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="score"
                                            stroke="#28a745"
                                            strokeWidth={3}
                                            dot={{
                                                stroke: '#28a745',
                                                strokeWidth: 2,
                                                r: 5
                                            }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Enrolled Courses Section */}
                    <h4
                        className="mb-4"
                        style={{
                            color: customStyles.accentColor,
                            fontWeight: 600
                        }}
                    >
                        Enrolled Courses
                    </h4>
                    <div className="row">
                        {enrolledCourses.map(course => (
                            <div key={course.id} className="col-md-4 mb-4">
                                <div
                                    className="card h-100 skill-course-card shadow-sm"
                                    style={{
                                        border: customStyles.cardBorder,
                                        borderRadius: '12px',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    <div className="card-body p-4">
                                        <h5
                                            className="card-title mb-3"
                                            style={{
                                                color: customStyles.mainColor,
                                                fontWeight: 600
                                            }}
                                        >
                                            {course.name}
                                        </h5>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span
                                                    style={{
                                                        color: customStyles.mainColor,
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    Progress
                                                </span>
                                                <span
                                                    style={{
                                                        color: customStyles.accentColor,
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {course.progress}%
                                                </span>
                                            </div>
                                            <div
                                                className="progress"
                                                style={{
                                                    backgroundColor: customStyles.progressBarBackground,
                                                    height: '8px',
                                                    borderRadius: '4px'
                                                }}
                                            >
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${course.progress}%`,
                                                        backgroundColor: customStyles.mainColor,
                                                        borderRadius: '4px'
                                                    }}
                                                    aria-valuenow={course.progress}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="course-details">
                                            <p
                                                className="mb-1"
                                                style={{ color: '#6c757d' }}
                                            >
                                                Hours Watched: {course.hoursWatched}/{course.totalHours}
                                            </p>
                                            <p
                                                className="mb-1"
                                                style={{ color: '#6c757d' }}
                                            >
                                                Score: {course.score}%
                                            </p>
                                            <p
                                                className="mb-0 text-muted small"
                                                style={{ color: '#adb5bd' }}
                                            >
                                                Last Accessed: {course.lastAccessed}
                                            </p>
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

export default SkillAssessment;