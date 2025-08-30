import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import BannerSlider from '../../components/Banner/BannerSlider';
import Projectcard from '../../components/ProjectCard/Projectcard';
import MobileNavbar from '../../components/MobileNavbar/MobileNavbar';


function Home() {
  return (
    <>
      <div className="Navbar-container">
        <Navbar />
      </div>


      <div className="home-container d-flex flex-column align-items-center justify-content-center mt-5">
        <h1 className="text-center mt-5">Welcome to Project X</h1>
        <p className="text-center mb-3">Explore our projects and find what interests you! </p>
      </div>


      <div className="banner-container mx-5">
        <div className="banner-overlay">
          <BannerSlider />
        </div>

      </div>


      <div className="projectcard-container px-5">
        <br />
        <h2 className="mt-5 text-center">Featured Projects</h2>
        <p className="text-left text-center">Discover the latest and most exciting projects from our community.</p>
        <hr />
        {/* <br /> */}
        <div className="project-cards d-flex flex-wrap justify-content-center gap-4 mb-5 ">
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
        </div>
      </div>

      <div className="mobile-navbar-container">
        <div className="mobile-navbar">
          <MobileNavbar />
        </div>
      </div>

      <footer className="footer text-center py-4 bg-light ">
        <p>&copy; 2025 Project X. All rights reserved.</p>
      </footer>
      

    </>
  );
}

export default Home;