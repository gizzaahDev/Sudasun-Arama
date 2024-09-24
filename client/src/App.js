import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home/Home';
import History from './Components/AboutUs/History';
import Footer from './Components/Footer/Footer';
import Poyaday from './Components/PoyaDay/Poyaday';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/poyaday" element={<Poyaday />} />
        </Routes>
        {/* <AboutUs /> */}
        <Footer />
        <ScrollToTopButton/>
      </Router>
    </div>
  );
}

export default App;
