import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import BannerSlider from '../../components/Banner/BannerSlider';
import Projectcard from '../../components/ProjectCard/Projectcard';
import MobileNavbar from '../../components/MobileNavbar/MobileNavbar';


function Home() {
  return (
    <>
      <container className="Navbar-container">
        <Navbar />
      </container>


      <container className="home-container d-flex flex-column align-items-center justify-content-center mt-3">
        <h1 className="text-center mt-5">Welcome to Project X</h1>
        <p className="text-center mb-3">Explore our projects and find what interests you! </p>
      </container>
      

      
      <container className="banner-container ">
        <div className="banner-overlay">
          <BannerSlider />
        </div>

      </container>



      <container className="projectcard-container">
        <br />
        <h2 className="mt-5" >Featured Projects</h2>
        <p className="text-left ">Discover the latest and most exciting projects from our community.</p>
                <hr />
                <br />
        <div className="project-cards d-flex flex-wrap justify-content-center gap-4 mb-5 ">
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
        </div>
      </container>

      <container className="mobile-navbar-container">
        <div className="mobile-navbar">
          <MobileNavbar />
        </div>
      </container>

      <footer className="footer text-center py-4 bg-light ">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
      

    </>
  );
}

export default Home;