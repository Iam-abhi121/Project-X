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
            </div>

            <div className='profile-button-container'>
              <button className='edit-cover-button'>Edit Cover Photo</button>
              <button className='edit-profile-button'>Edit Profile</button>
            </div>
        </div>
    </>
  );
};

export default Profileinfo;