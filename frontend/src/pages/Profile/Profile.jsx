import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import CoverPhoto from '../../components/CoverPhoto/CoverPhoto.jsx';
import Profileinfo from '../../components/Profileinfo/Profileinfo.jsx';
import MobileNavbar from '../../components/MobileNavbar/MobileNavbar.jsx';
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

function Profile() {
  return (
    <>
      <div className='profile-background mx-5'>

        {/* Navbar */}
        <div className="navbar-container">
          <Navbar />
        </div>

        {/* Cover Photo */}
        <div className="cover-photo-container">
          <CoverPhoto />
        </div>

        {/* Profile Info */}
        <div className="profile-content">
          <Profileinfo />
        </div>

        {/* Profile Navigation */}

        <div className='profile-nav'>
          
          <nav>
            <a href="#posts"><BsFillGrid1X2Fill size={22}/></a>
            <a href="#about"><FaArrowAltCircleDown  size={25}/></a>
            <a href="#friends"><MdContactSupport  size={30}/></a>
          </nav>
        </div>


        {/* Projects Section */}
        <div id="posts" className="projects-container d-flex flex-wrap justify-content-center gap-5 mb-5 mt-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        {/* Mobile Navbar */}
        <div>
          <MobileNavbar />
        </div>

      </div>
      <footer className="footer text-center py-4 bg-light ">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Profile;
