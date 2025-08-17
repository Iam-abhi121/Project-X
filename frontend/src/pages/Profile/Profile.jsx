import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile-page">
        {/* Cover Photo */}
        <div className="cover-photo-container">
          <img 
            src="https://w.wallhaven.cc/full/3q/wallhaven-3q9vmd.jpg" 
            alt="cover" 
          />
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-photo-container">
            <img 
              src="https://w.wallhaven.cc/full/d8/wallhaven-d8gj3g.png" 
              alt="profile" 
            />
          </div>
        </div>
      </div>


      <div className="profile-info-container">
        <h2>Karina</h2>
        <button>Edit Profile</button>
      </div>

      <div className="project-container">
        <hr />
          <div className="project-grid d-flex flex-wrap justify-content-center gap-4 mb-5">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
      </div>
    </>
  );
}

export default Profile;