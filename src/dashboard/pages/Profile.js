import React, { useState } from 'react';
import { Edit2, Save, Camera } from 'lucide-react';
import SideBar from '../common/SideBar';
import Header from '../common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: 'Alice Grill',
        email: 'mail.agrill@gmail.com',
        age: '25',
        gender: 'Female',
        careerIndustry: 'Technology',
        currentRole: 'Software Developer',
        currentOrganization: 'Tech Corp',
        desiredRole: 'Senior Developer',
        hobbyPassion: 'Coding, Reading',
        linkedinUrl: 'https://linkedin.com/in/alicegrill'
    });

    const [editSections, setEditSections] = useState({});

    const handleEdit = (section) => {
        setEditSections(prev => ({ ...prev, [section]: true }));
    };

    const handleSave = (section) => {
        setEditSections(prev => ({ ...prev, [section]: false }));
    };

    const handleChange = (section, value) => {
        setProfileData(prev => ({ ...prev, [section]: value }));
    };

    return (
        <div className="main-wrapper d-flex h-100">
            <SideBar />
            <div className="page-wrapper flex-grow-1">
                <Header />
                <div className="profile-wrapper p-4">
                    <div className="profile-container bg-white rounded shadow">
                        <div className="profile-header">
                            <div className="profile-picture-section">
                                <div className="profile-picture">
                                    <img src="https://plus.unsplash.com/premium_photo-1682974403877-28721c5ea2b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
                                    <div className="camera-icon">
                                        <Camera size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="profile-info">
                                <h2>{profileData.name}</h2>
                                <p>{profileData.currentRole} at {profileData.currentOrganization}</p>
                            </div>
                        </div>

                        <div className="profile-fields row p-4">
                            {Object.entries(profileData).map(([key, value]) => (
                                <div key={key} className="col-md-6 mb-4">
                                    <div className="field-card">
                                        <div className="field-header">
                                            <h3>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                                            <button
                                                className="btn-icon"
                                                onClick={() => editSections[key] ? handleSave(key) : handleEdit(key)}
                                            >
                                                {editSections[key] ? <Save size={16} /> : <Edit2 size={16} />}
                                            </button>
                                        </div>
                                        <div className="field-content">
                                            {editSections[key] ? (
                                                <input
                                                    type="text"
                                                    value={value}
                                                    onChange={(e) => handleChange(key, e.target.value)}
                                                    className="form-control"
                                                />
                                            ) : (
                                                <p>{value}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .main-wrapper {
                    height: 100vh;
                }

                .page-wrapper {
                    overflow: hidden;
                }

                .profile-wrapper {
                    height: 100vh;
                    overflow-y: auto;
                }

                .profile-container {
                    background: white;
                    border-radius: 8px;
                }

                .profile-header {
                    display: flex;
                    align-items: center;
                    padding: 2rem;
                    padding-top: 3.5rem;
                    border-bottom: 1px solid #e9ecef;
                }

                .profile-picture-section {
                    margin-right: 2rem;
                }

                .profile-picture {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    position: relative;
                    border: 3px solid #6600CC;
                    overflow: hidden;
                }

                .profile-picture img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .camera-icon {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    background: white;
                    border-radius: 50%;
                    padding: 4px;
                    cursor: pointer;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    color: #6600CC;
                }

                .profile-info h2 {
                    color: #6600CC;
                    margin: 0;
                    font-size: 1.8rem;
                }

                .profile-info p {
                    color: #666;
                    margin: 0.5rem 0 0;
                }

                .field-card {
                    background: white;
                    padding: 1rem;
                    border-radius: 6px;
                    border: 1px solid #e9ecef;
                    height: 100%;
                }

                .field-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .field-header h3 {
                    color: #6600CC;
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 600;
                }

                .btn-icon {
                    background: none;
                    border: none;
                    color: #6600CC;
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 4px;
                    transition: all 0.2s;
                }

                .btn-icon:hover {
                    background-color: rgba(102, 0, 204, 0.1);
                }

                .field-content p {
                    margin: 0;
                    color: #333;
                    font-size: 0.95rem;
                }

                @media (max-width: 768px) {
                    .profile-header {
                        flex-direction: column;
                        text-align: center;
                    }

                    .profile-picture-section {
                        margin-right: 0;
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Profile;