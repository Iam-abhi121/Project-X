import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <>
      <container className="Navbar-container" >
        <Navbar />
      </container>
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>This is where you can find the latest updates and features.</p>
      </div>

      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
      

    </>
  );
}

export default Home;