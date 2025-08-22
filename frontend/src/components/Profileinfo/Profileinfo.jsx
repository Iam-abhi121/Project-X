import React from 'react';
import './Profileinfo.css';

const Profileinfo = () => {
  return (
    <>
        <div className='profile'>
            <div className="profile-photo-container">
                <img
                    src="https://w.wallhaven.cc/full/d8/wallhaven-d8gj3g.png"
                    alt="profile"/>
            </div>

            <div className='profile-info-container'>
                <h2>Unknown</h2>
                <p>unknown@gmail.com</p>
                <button>Edit</button>
            </div>
        </div>
    </>
  );
};

export default Profileinfo;