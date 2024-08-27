import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Home/>
      <AboutUs/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
