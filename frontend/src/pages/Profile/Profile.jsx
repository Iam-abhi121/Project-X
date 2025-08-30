import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import CoverPhoto from '../../components/CoverPhoto/CoverPhoto.jsx';
import Profileinfo from '../../components/Profileinfo/Profileinfo.jsx';
import MobileNavbar from '../../components/MobileNavbar/MobileNavbar.jsx';
import { MdContactSupport } from "react-icons/md";
import { BiSolidGridAlt } from "react-icons/bi";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { useState } from 'react';

function Profile() {
  // track which tab is selected
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <div className='profile-background mx-5'>
        {/* Navbar */}
        <div className="navbar-container">
          <Navbar />
        </div>

        {/* Cover Photo */}
        <div className="profile-container">
          <div className="cover-photo-container">
            <CoverPhoto />
          </div>

          {/* Profile Info */}
          <div className="profile-content">
            <Profileinfo />
          </div>
        </div>

        {/* Profile Navigation */}
        <div className='profile-nav'>
          <nav>
            <button 
              className={activeTab === "projects" ? "active" : ""} 
              onClick={() => setActiveTab("projects")}
            >
              <BiSolidGridAlt size={30}/> 
            </button>


            <button 
              className={activeTab === "downloads" ? "active" : ""} 
              onClick={() => setActiveTab("downloads")}
            >
              <PiDownloadSimpleBold size={30}/> 
            </button>


            <button 
              className={activeTab === "support" ? "active" : ""} 
              onClick={() => setActiveTab("support")}
            >
              <MdContactSupport size={30}/> 
            </button>
          </nav>
        </div>

        {/* Content Section - Render based on active tab */}
        <div className="tab-content mt-4">
          {activeTab === "projects" && (
            <div className="projects-container d-flex flex-wrap justify-content-center gap-4 mb-4">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          )}

          {activeTab === "downloads" && (
            <div className="downloads-container text-center">
              <h3>Downloads</h3>
              <img src="src/assets/img/coming_soon_download_section.png" alt="" />
              <p>Here you can see your downloaded files</p>
            </div>
          )}

          {activeTab === "support" && (
            <div className="support-container text-center">
              <h3>Support tickets</h3>
              <img src="src/assets/img/coming_soon_support_section.png" alt="" />
              <p>Here you can see your support tickets.</p>
            </div>
          )}
        </div>

        {/* Mobile Navbar */}
        <div>
          <MobileNavbar />
        </div>
      </div>

      <footer className="footer text-center py-4 bg-light ">
        <p>&copy; 2025 Project X. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Profile;
