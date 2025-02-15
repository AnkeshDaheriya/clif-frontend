import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ProgressBar, Offcanvas } from 'react-bootstrap';
import { Info } from 'lucide-react';
import SideBar from '../dashboard/common/SideBar';
import Header from '../dashboard/common/Header';
import './assets/CareerGrowth.css';

const SpeedoMeter = ({ value, label, size = 'medium' }) => {
    // Calculate dimensions based on size
    const getSize = () => {
        switch (size) {
            case 'large':
                return { width: 300, height: 180 };  // Reduced height
            case 'small':
                return { width: 200, height: 120 };  // Reduced height
            default:
                return { width: 250, height: 150 };  // Reduced height
        }
    };

    const { width, height } = getSize();
    const centerX = width / 2;
    const centerY = height - 20;  // Adjusted center point
    const radius = Math.min(width, height * 1.8) / 2;  // Increased radius multiplier

    // Calculate rotation for the hand (from -90 to 90 degrees)
    const rotation = (value / 100) * 180 - 90;

    // Generate the arc path for the gauge background
    const generateArc = (startAngle, endAngle, radius) => {
        const start = {
            x: centerX + radius * Math.cos(startAngle * Math.PI / 180),
            y: centerY + radius * Math.sin(startAngle * Math.PI / 180)
        };
        const end = {
            x: centerX + radius * Math.cos(endAngle * Math.PI / 180),
            y: centerY + radius * Math.sin(endAngle * Math.PI / 180)
        };
        const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
    };

    // Generate tick marks
    const generateTicks = () => {
        const ticks = [];
        for (let i = 0; i <= 180; i += 18) {
            const angle = i - 90;
            const tickLength = i % 45 === 0 ? 15 : 8;  // Adjusted tick lengths
            const startRadius = radius - 5;
            const endRadius = radius - 5 - tickLength;

            const start = {
                x: centerX + startRadius * Math.cos(angle * Math.PI / 180),
                y: centerY + startRadius * Math.sin(angle * Math.PI / 180)
            };
            const end = {
                x: centerX + endRadius * Math.cos(angle * Math.PI / 180),
                y: centerX + endRadius * Math.sin(angle * Math.PI / 180)
            };

            ticks.push(
                <line
                    key={i}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke="#666"
                    strokeWidth={i % 45 === 0 ? 2 : 1}
                />
            );

            if (i % 45 === 0) {
                const labelRadius = endRadius - 15;
                const labelX = centerX + labelRadius * Math.cos(angle * Math.PI / 180);
                const labelY = centerY + labelRadius * Math.sin(angle * Math.PI / 180);
                const value = (i / 180) * 100;
                ticks.push(
                    <text
                        key={`label-${i}`}
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#666"
                        fontSize="12"
                    >
                        {value}
                    </text>
                );
            }
        }
        return ticks;
    };

    return (
        <div className={`speedo-meter ${size}`}>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                className="meter-svg"
            >
                {/* Gradient definition */}
                <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8e44ad" />
                        <stop offset="100%" stopColor="#6600CC" />
                    </linearGradient>
                </defs>

                {/* Gauge background */}
                <path
                    d={generateArc(-90, 90, radius)}
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="20"
                    className="gauge-background"
                />

                {/* Gauge fill */}
                <path
                    d={generateArc(-90, rotation, radius)}
                    fill="none"
                    stroke="url(#gaugeGradient)"
                    strokeWidth="20"
                    className="gauge-fill"
                />

                {/* Tick marks */}
                <g>{generateTicks()}</g>

                {/* Center point and hand */}
                <circle
                    cx={centerX}
                    cy={centerY}
                    r="12"
                    fill="#333"
                    className="gauge-center"
                />
                <line
                    x1={centerX}
                    y1={centerY}
                    x2={centerX + (radius - 35) * Math.cos(rotation * Math.PI / 180)}
                    y2={centerY + (radius - 35) * Math.sin(rotation * Math.PI / 180)}
                    stroke="#333"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="gauge-hand"
                />

                {/* Value display */}
                <text
                    x={centerX}
                    y={centerY - radius + 25}
                    textAnchor="middle"
                    fill="#333"
                    fontSize={size === 'large' ? '24' : '18'}
                    fontWeight="bold"
                    className="gauge-value"
                >
                    {value}%
                </text>
            </svg>
            <h4 className="meter-label">{label}</h4>
        </div>
    );
};

const MilestoneCard = ({ milestone, progress, onClick }) => {
    return (
        <div className="col-md-6 mb-4">
            <Card className="milestone-card" onClick={onClick} style={{ cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Title>{milestone}</Card.Title>
                    <div className="milestone-content">
                        <div className="progress-info">
                            <span className="progress-label">Completion Status</span>
                            <span className="progress-value">{progress}%</span>
                        </div>
                        <ProgressBar now={progress} label={`${progress}%`} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

const CareerGrowth = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [selectedMilestoneData, setSelectedMilestoneData] = useState(null);

    const handleMilestoneClick = (milestoneName) => {
        const milestoneData = getMilestoneData(milestoneName);
        setSelectedMilestoneData(milestoneData);
        setShowOffcanvas(true);
    };

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };

    const milestones = [
        { name: 'M1 - Foundation Skills', progress: 100 },
        { name: 'M2 - Advanced Concepts', progress: 85 },
        { name: 'M3 - Team Leadership', progress: 70 },
        { name: 'M4 - Project Management', progress: 60 },
        { name: 'M5 - Strategic Planning', progress: 45 },
        { name: 'M6 - Innovation & Research', progress: 30 },
        { name: 'M7 - Domain Expertise', progress: 15 },
        { name: 'M8 - Industry Leadership', progress: 5 },
    ];

    const getMilestoneData = (milestoneName) => {
        // Dummy data - replace with actual data fetching from database
        const sampleData = {
            "M1 - Foundation Skills": {
                "Timeline": {
                    "Start Date": "January 2024",
                    "End Date": "March 2024",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Gain foundational knowledge in desired_role through structured learning.",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 60
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 30
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 80
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 40
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 70
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 90
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 20
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant tech groups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 50
                }
            },
            "M2 - Advanced Concepts": {
                "Timeline": {
                    "Start Date": "April 2024",
                    "End Date": "June 2024",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Advance your knowledge",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 70
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 40
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 90
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 50
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 80
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 100
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 30
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant tech groups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 60
                }
            },
            "M3 - Team Leadership": {
                "Timeline": {
                    "Start Date": "July 2024",
                    "End Date": "September 2024",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Lead your team",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 80
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 50
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 100
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 60
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 90
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 100
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 40
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant tech groups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 70
                }
            },
            "M4 - Project Management": {
                "Timeline": {
                    "Start Date": "October 2024",
                    "End Date": "December 2024",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Project Management",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 90
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 60
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 100
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 70
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 100
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 100
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 50
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant tech groups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 80
                }
            },
            "M5 - Strategic Planning": {
                "Timeline": {
                    "Start Date": "January 2025",
                    "End Date": "March 2025",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Strategic Planning",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 90
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 60
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 100
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 70
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 100
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 100
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 50
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant tech groups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 80
                }
            },
            "M6 - Innovation & Research": {
                "Timeline": {
                    "Start Date": "April 2025",
                    "End Date": "June 2025",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Innovation & Research",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 90
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 60
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 100
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 70
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 100
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 100
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 50
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant techgroups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 80
                }
            },
            "M7 - Domain Expertise": {
                "Timeline": {
                    "Start Date": "July 2025",
                    "End Date": "September 2025",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Domain Expertise",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 90
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 60
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 100
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 70
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 100
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 100
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 50
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant tech groups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 80
                }
            },
            "M8 - Industry Leadership": {
                "Timeline": {
                    "Start Date": "October 2025",
                    "End Date": "December 2025",
                    "Duration (Months)": 3
                },
                "Goals": {
                    "Primary Goal": "Domain Expertise",
                    "Measurable Goals": [
                        "Complete 5 technical courses",
                        "Earn 1 beginner-level certification",
                        "Read 2 industry-related books",
                        "Improve resume and LinkedIn profile"
                    ]
                },
                "KPIs": {
                    "Technical Course Completion Rate": "80%+",
                    "Certification Achievement": "1 foundational certification earned",
                    "Book Reading Progress": "2 books completed",
                    "LinkedIn Profile Optimization": "Profile strength: All-Star level"
                },
                "TechVerse": {
                    "What it Covers": "Expert-led video courses on tech stacks, frameworks, and industry tools.",
                    "Focus Areas": ["List relevant technologies from resume & industry standards"],
                    "Top 5 Relevant Technical Courses": ["List beginner-friendly courses"],
                    "progress": 90
                },
                "ProVision": {
                    "What it Covers": "Communication, leadership, negotiation, and personal branding.",
                    "Focus Areas": ["Public Speaking, Collaboration, Leadership"],
                    "Top 5 Relevant Non-Technical Courses": ["List relevant soft skills courses"],
                    "progress": 60
                },
                "BookVault": {
                    "What it Covers": "Industry-relevant books on coding, leadership, problem-solving, and career growth.",
                    "Focus Areas": ["Software Development, Problem-Solving, Leadership"],
                    "Recommended Books": {
                        "Technical Books": ["List 2 beginner-level books"],
                        "Non-Technical Book": "List 1 career development book"
                    },
                    "progress": 100
                },
                "SkillForge": {
                    "What it Covers": "Global certifications like AWS, Google Cloud, PMP, CFA, etc.",
                    "Focus Areas": ["Cloud Computing, Web Development, DevOps"],
                    "Top 3 Certifications": ["List beginner-friendly certifications"],
                    "progress": 70
                },
                "JobSphere": {
                    "What it Covers": "Real-time interview simulations, resume feedback, and personalized job-matching.",
                    "Focus Areas": ["Resume Building, LinkedIn Profile, Networking"],
                    "Key Activities": [
                        "Draft and refine resume",
                        "Create a LinkedIn profile",
                        "Attend career workshops",
                        "Research job market for desired_role",
                        "Practice self-introduction for interviews"
                    ],
                    "progress": 100
                },
                "EventPulse": {
                    "What it Covers": "Industry talks, hackathons, networking events, and career fairs.",
                    "Focus Areas": ["Tech Conferences, Webinars, Hackathons"],
                    "Top 5 Events/Webinars": ["List 5 relevant industry events"],
                    "progress": 100
                },
                "MentorLoop": {
                    "What it Covers": "Direct guidance from industry mentors, career coaching, and roadmap planning.",
                    "Focus Areas": ["1:1 Mentorship, Career Roadmap, Resume Review"],
                    "Key Activities": [
                        "Find and connect with an industry mentor",
                        "Schedule monthly mentorship sessions",
                        "Review career roadmap and receive feedback",
                        "Discuss long-term career strategy"
                    ],
                    "progress": 50
                },
                "NetX": {
                    "What it Covers": "LinkedIn engagement, professional group participation, and collaborations.",
                    "Focus Areas": ["Networking, Blogging, Community Building"],
                    "Key Activities": [
                        "Increase LinkedIn connections by 50%",
                        "Engage with posts from industry experts",
                        "Join relevant tech groups and communities",
                        "Write 1 blog on a tech topic",
                        "Collaborate on an open-source project"
                    ],
                    "progress": 80
                }
            }
            // Additional milestones can be added here in the same format
        };

        return sampleData[milestoneName];
    };

    return (
        <div id="main-wrapper">
            <SideBar />
            <div className="page-wrapper career-growth-wrapper">
                <Header />
                <div className="page-content">


                    <h2 className="section-title">Career Growth Milestones</h2>

                    <div className="meters-section">
                        <div className="row">
                            {/* Example SpeedoMeters */}
                            <div className="col-md-4">
                                <SpeedoMeter value={75} label="Overall Progress" size="large" />
                            </div>
                            <div className="col-md-4">
                                <SpeedoMeter value={50} label="Skills Achieved" />
                            </div>
                            <div className="col-md-4">
                                <SpeedoMeter value={90} label="Network Growth" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {milestones.map((milestone) => (
                            <MilestoneCard
                                key={milestone.name}
                                milestone={milestone.name}
                                progress={milestone.progress}
                                onClick={() => handleMilestoneClick(milestone.name)}
                            />
                        ))}
                    </div>
                </div>

                {/* Offcanvas for detailed view */}
                <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>{selectedMilestoneData?.Timeline["Start Date"]}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {selectedMilestoneData && (
                            <>
                                <h3>Timeline</h3>
                                <p><strong>Start Date:</strong> {selectedMilestoneData.Timeline["Start Date"]}</p>
                                <p><strong>End Date:</strong> {selectedMilestoneData.Timeline["End Date"]}</p>
                                <p><strong>Duration (Months):</strong> {selectedMilestoneData.Timeline["Duration (Months)"]}</p>

                                <h3>Goals</h3>
                                <p><strong>Primary Goal:</strong> {selectedMilestoneData.Goals["Primary Goal"]}</p>
                                <ul>
                                    {selectedMilestoneData?.Goals?.MeasurableGoals?.map((goal, index) => (
                                        <li key={index}>{goal}</li>
                                    ))}
                                </ul>

                                <h3>KPIs</h3>
                                <ul>
                                    {Object.entries(selectedMilestoneData.KPIs).map(([key, value]) => (
                                        <li key={key}><strong>{key}:</strong> {value}</li>
                                    ))}
                                </ul>

                                {/* Displaying sections like TechVerse, ProVision, etc. */}
                                {['TechVerse', 'ProVision', 'BookVault', 'SkillForge', 'JobSphere', 'EventPulse', 'MentorLoop', 'NetX'].map(section => (
                                    selectedMilestoneData[section] && (
                                        <div key={section}>
                                            <h3>{section}</h3>
                                            <p><strong>What it Covers:</strong> {selectedMilestoneData[section]["What it Covers"]}</p>
                                            <p><strong>Focus Areas:</strong> {selectedMilestoneData[section]["Focus Areas"]?.join(', ') || 'N/A'}</p>
                                            <SpeedoMeter value={selectedMilestoneData[section].progress} label={`${section} Progress`} size="small" />
                                        </div>
                                    )
                                ))}
                            </>
                        )}
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
};

export default CareerGrowth;
