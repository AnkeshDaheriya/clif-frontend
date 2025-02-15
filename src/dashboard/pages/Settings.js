import React, { useState } from 'react';
import {
    User,
    Bell,
    Book,
    ShoppingCart,
    Home,
    Users,
    Camera,
    Settings as SettingsIcon,
    CreditCard
} from 'lucide-react';
import '../assets/Settings.css';
import SideBar from '../common/SideBar';
import Header from '../common/Header';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('account');

    const menuItems = [
        { id: 'account', icon: User, label: 'My Account' },
        { id: 'subscription', icon: CreditCard, label: 'Subscription' },
        { id: 'notifications', icon: Bell, label: 'Notifications' },
        { id: 'programs', icon: Book, label: 'My Programs' },
        { id: 'groups', icon: Users, label: 'Groups' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return (
                    <div className="settings-card account-settings">
                        <div className="profile-section">
                            <div className="profile-image-container">
                                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className="profile-image" />
                                <button className="upload-button">
                                    <Camera size={16} />
                                </button>
                            </div>
                            <h3 className="h4 mb-1">Mathew Clarke</h3>
                            <p className="text-muted">Premium Member</p>
                        </div>

                        <form className="account-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Display Name</label>
                                    <input type="text" className="form-control" defaultValue="Mathew" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" defaultValue="Mathew" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" defaultValue="Clarke" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" defaultValue="mathewclarke@gmail.com" />
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                                <button type="button" className="btn btn-outline">Cancel</button>
                            </div>
                        </form>
                    </div>
                );

            case 'subscription':
                return (
                    <>
                        <div className="gradient-card mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 className="h4 mb-1">Premium Plan</h3>
                                    <p className="mb-0 opacity-75">Valid until Dec 2024</p>
                                </div>
                                <span className="badge bg-success">Active</span>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="stat-card">
                                    <h4 className="text-muted mb-3">Current Usage</h4>
                                    <div className="stat-value">80%</div>
                                    <p className="text-muted mb-0">of monthly limit</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="stat-card">
                                    <h4 className="text-muted mb-3">Next Payment</h4>
                                    <div className="stat-value">$20</div>
                                    <p className="text-muted mb-0">Due in 15 days</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="stat-card">
                                    <h4 className="text-muted mb-3">Downloads</h4>
                                    <div className="stat-value">243</div>
                                    <p className="text-muted mb-0">files this month</p>
                                </div>
                            </div>
                        </div>

                        <div className="settings-card">
                            <h3 className="h4 mb-4">Plan Features</h3>
                            <div className="row">
                                {[
                                    'Unlimited Access',
                                    'Priority Support',
                                    'Ad-Free Experience',
                                    'Custom Domains',
                                    'API Access',
                                    'Team Collaboration'
                                ].map((feature, i) => (
                                    <div key={i} className="col-md-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-primary rounded-circle me-2" style={{ width: 8, height: 8 }}></div>
                                            <span>{feature}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );

            case 'notifications':
                return (
                    <div className="settings-card">
                        <h3 className="h4 mb-4">Notification Preferences</h3>
                        {[
                            { title: 'Email Notifications', desc: 'Receive updates via email' },
                            { title: 'Push Notifications', desc: 'Get notifications on your device' },
                            { title: 'SMS Alerts', desc: 'Receive text messages for important updates' },
                            { title: 'Newsletter', desc: 'Weekly digest of top content' }
                        ].map((item, i) => (
                            <div key={i} className="d-flex justify-content-between align-items-center py-3 border-bottom">
                                <div>
                                    <h5 className="mb-1">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'programs':
                return (
                    <div className="row">
                        {[
                            { title: 'Web Development', progress: 75, lessons: 24 },
                            { title: 'UI/UX Design', progress: 45, lessons: 18 },
                            { title: 'Mobile Development', progress: 90, lessons: 32 },
                            { title: 'Cloud Computing', progress: 30, lessons: 16 }
                        ].map((program, i) => (
                            <div key={i} className="col-md-6 mb-4">
                                <div className="settings-card">
                                    <h4 className="mb-3">{program.title}</h4>
                                    <div className="progress mb-3">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${program.progress}%` }}
                                            aria-valuenow={program.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <div className="d-flex justify-content-between text-muted">
                                        <span>{program.progress}% Complete</span>
                                        <span>{program.lessons} Lessons</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div id="main-wrapper">
            <SideBar />
            <div className="page-wrapper skill-assessment-wrapper">
                <Header />
                <div className="settings-container d-flex">
                    <div className="settings-sidebar">
                        <div className="sidebar-header">
                            <div className="d-flex align-items-center gap-2">
                                <SettingsIcon className="text-primary" />
                                <h1 className="h5 mb-0">Settings</h1>
                            </div>
                        </div>

                        <nav className="settings-nav">
                            {menuItems.map(({ id, icon: Icon, label }) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={`nav-item ${activeTab === id ? 'active' : ''}`}
                                >
                                    <Icon size={18} />
                                    <span>{label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="main-content">
                        <h3 className="mb-4">{menuItems.find(item => item.id === activeTab)?.label}</h3>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;