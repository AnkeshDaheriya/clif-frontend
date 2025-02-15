import React from 'react';
import { Users } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../common/SideBar';
import Header from '../common/Header';
import '../assets/Groups.css';

const Groups = () => {
  const groupsData = [
    {
      id: 1,
      name: 'React Developers',
      description: 'A group for React enthusiasts to share knowledge.',
      userCount: 100,
      admin: 'John Doe',
      createdOn: '2021-12-01'
    },
    {
      id: 2,
      name: 'JavaScript Gurus',
      description: 'A group to discuss JavaScript and its nuances.',
      userCount: 50,
      admin: 'Jane Smith',
      createdOn: '2021-06-15'
    }
  ];

  return (
    <div id="main-wrapper">
      <SideBar />
      <div className="page-wrapper groups-wrapper">
        <Header />
        <div className="groups-container p-4">
          <h1 className="groups-title mb-4" style={{ color: '#6600CC' }}>Groups</h1>
          
          {/* Available Groups Section */}
          <div className="row g-4 mb-5">
            {groupsData.map(group => (
              <div key={group.id} className="col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="group-icon me-3" style={{ backgroundColor: '#6600CC20', padding: '10px', borderRadius: '8px' }}>
                        <Users size={24} color="#6600CC" />
                      </div>
                      <h5 className="card-title mb-0" style={{ color: '#6600CC' }}>{group.name}</h5>
                    </div>
                    <p className="card-text text-muted mb-3">{group.description}</p>
                    <div className="group-details">
                      <div className="row mb-2">
                        <div className="col-6">
                          <span className="text-muted">User Count:</span>
                          <span className="ms-2 fw-medium">{group.userCount}</span>
                        </div>
                        <div className="col-6">
                          <span className="text-muted">Admin:</span>
                          <span className="ms-2 fw-medium">{group.admin}</span>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12">
                          <span className="text-muted">Created on:</span>
                          <span className="ms-2 fw-medium">{group.createdOn}</span>
                        </div>
                      </div>
                    </div>
                    <button className="btn w-100" 
                      style={{ 
                        backgroundColor: '#6600CC', 
                        color: 'white',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#5500aa'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#6600CC'}
                    >
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Joined Groups Section */}
          <div className="joined-groups-section">
            <h2 className="h5 mb-4" style={{ color: '#6600CC' }}>Joined Groups</h2>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="group-icon me-3" style={{ backgroundColor: '#6600CC20', padding: '10px', borderRadius: '8px' }}>
                    <Users size={24} color="#6600CC" />
                  </div>
                  <div>
                    <h6 className="mb-1" style={{ color: '#6600CC' }}>React Developers</h6>
                    <p className="mb-0 text-muted">A group for React enthusiasts to share knowledge.</p>
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

export default Groups;