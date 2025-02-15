import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from 'lucide-react';
import SideBar from '../common/SideBar';
import Header from '../common/Header';
import '../assets/Jobs.css';

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const jobListings = [
        {
            company: 'Artisan AI',
            title: 'AI Engineer',
            industry: 'Technology',
            location: 'San Francisco',
            employees: '11-50',
            logo: 'https://imgs.search.brave.com/cMeR-TEzSzc3L_T_t4c0ZKSZu5B4BxkMPGrZ48urikE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc'
        },
        {
            company: 'Tech Innovators',
            title: 'AI Lead Engineer',
            industry: 'Tech',
            location: 'Los Angeles',
            employees: '51-100',
            logo: 'https://imgs.search.brave.com/pRcg23Qhp29J98zW-U43oe1vlTTj5JelaeWmkx6M9nU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0cv/MDEvQWRQcm9kdWN0/c1dlYnNpdGUvaW1h/Z2VzL0FVWC8wMl9h/bWF6b25fbG9nb19S/R0JfU1FVSUQuX1RU/V18ucG5n'
        },
        {
            company: 'Future Works',
            title: 'AI Analyst',
            industry: 'Automation',
            location: 'New York',
            employees: '101-200',
            logo: 'https://imgs.search.brave.com/CkPRfNvT2NV4p9dvekN8HXkxmNZhkdMJjqXXdX95tlY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9U/Q1MuTlMtNzQwMWYx/YmQucG5nP3Q9MTcy/MDI0NDQ5NA'
        },
        {
            company: 'Artisan AI',
            title: 'AI Engineer',
            industry: 'Technology',
            location: 'San Francisco',
            employees: '11-50',
            logo: 'https://imgs.search.brave.com/cMeR-TEzSzc3L_T_t4c0ZKSZu5B4BxkMPGrZ48urikE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc'
        },
        {
            company: 'Tech Innovators',
            title: 'AI Lead Engineer',
            industry: 'Tech',
            location: 'Los Angeles',
            employees: '51-100',
            logo: 'https://imgs.search.brave.com/pRcg23Qhp29J98zW-U43oe1vlTTj5JelaeWmkx6M9nU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0cv/MDEvQWRQcm9kdWN0/c1dlYnNpdGUvaW1h/Z2VzL0FVWC8wMl9h/bWF6b25fbG9nb19S/R0JfU1FVSUQuX1RU/V18ucG5n'
        },
        {
            company: 'Future Works',
            title: 'AI Analyst',
            industry: 'Automation',
            location: 'New York',
            employees: '101-200',
            logo: 'https://imgs.search.brave.com/CkPRfNvT2NV4p9dvekN8HXkxmNZhkdMJjqXXdX95tlY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9U/Q1MuTlMtNzQwMWYx/YmQucG5nP3Q9MTcy/MDI0NDQ5NA'
        },
    ];

    return (
        <div id="main-wrapper">
            <SideBar />
            <div className="page-wrapper jobs-wrapper">
                <Header />
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="row mb-0
                         pt-10 mt-4">
                            <div className="col-12">
                                <h1 className="page-title">Curated Jobs</h1>
                            </div>
                        </div>

                        <div className="row mb-1">
                            <div className="col-12">
                                <div className="search-container">
                                    <Search className="search-icon" size={20} />
                                    <input
                                        type="text"
                                        className="form-control search-input"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="jobs-table-container">
                                    <table className="table jobs-table">
                                        <thead>
                                            <tr>
                                                <th>Company Name</th>
                                                <th>Job Title</th>
                                                <th>Industry</th>
                                                <th>Location</th>
                                                <th>Employees</th>
                                                <th>Logo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {jobListings.map((job, index) => (
                                                <tr key={index}>
                                                    <td>{job.company}</td>
                                                    <td>{job.title}</td>
                                                    <td>{job.industry}</td>
                                                    <td>{job.location}</td>
                                                    <td>{job.employees}</td>
                                                    <td>
                                                        <img
                                                            src={job.logo}
                                                            alt={`${job.company} logo`}
                                                            className="company-logo"
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;