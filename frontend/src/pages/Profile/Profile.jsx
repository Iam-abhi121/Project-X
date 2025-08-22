import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import CoverPhoto from '../../components/CoverPhoto/CoverPhoto.jsx';
import Profileinfo from '../../components/Profileinfo/Profileinfo.jsx';
import MobileNavbar from '../../components/MobileNavbar/MobileNavbar.jsx';

function Profile() {
  return (
    <>
    <div className='profile-background'>
    
    <div className="navbar-container ">
      <Navbar />
    </div>

    <div className="cover-photo-container">
      <CoverPhoto />
    </div>

    <div className="profile-content">
      <Profileinfo />
    </div>

    {/* <div className="projects-container">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div> */}

  

    <div>
      <MobileNavbar />
    </div>
  </div>

    </>
  );
}

export default Profile;