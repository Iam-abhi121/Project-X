import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>

    </>
  );
}

export default App
