import React from 'react';
import { MessageCircle } from 'lucide-react';

const Chatbot = () => {
  return (
    <div className="chatbot-container" style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 9999
    }}>
      <button 
        style={{
          backgroundColor: '#6600CC',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5500aa'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6600CC'}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default Chatbot;