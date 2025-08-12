import React from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";
import './MobileNavbar.css';


const MobileNavbar = () => {
  return (
    <div
      className="mobile-bottom-nav d-flex justify-content-around align-items-center"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#fff',
        
        zIndex: 1000,
      }}
    >
      <FaHome size={22} />
      <FaSearch size={22} />
      <GrProjects size={22}/>
      <FaHeart size={22} />
      <FaUser size={22} />
    </div>
  );
};

export default MobileNavbar;
