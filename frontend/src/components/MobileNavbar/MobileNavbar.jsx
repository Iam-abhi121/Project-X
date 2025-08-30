import React from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
      <Link to="/"><FaHome size={22} /></Link>
      <Link to="#"><FaSearch size={22} /></Link>
      <Link to="#"><GrProjects size={22} /></Link>
      <Link to="#"><FaHeart size={22} /></Link>
      <Link to="/profile"><FaUser size={22} /></Link>

    </div>
  );
};

export default MobileNavbar;
