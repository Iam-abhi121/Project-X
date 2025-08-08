import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Projectcard from '../../components/ProjectCard/ProjectCard';

function Home() {
  return (
    <>
      <container className="Navbar-container" >
        <Navbar />
      </container>

      <container className="home-container d-flex flex-column align-items-center justify-content-center mt-3">
        <h1 className="text-center my-5">Welcome to Project X</h1>
        <p className="text-center mb-5">Explore our projects and find what interests you!</p>
        <div className="project-cards d-flex flex-wrap justify-content-center gap-4 mb-5 ">
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
          <Projectcard />
        </div>
      </container>

      <footer className="footer text-center py-4 bg-light ">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
      

    </>
  );
}

export default Home;