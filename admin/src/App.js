import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/SideBar/Sidebar';
import Home from './Component/Home/Home'; // Import the Home component
import Poyaday from './Component/Events/PoyadayShedule/Poyaday';

import './App.css'; // Add some global styles

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Flex container for Sidebar and content */}
        <Sidebar />
        <div className="content"> {/* This div wraps the content to display next to the Sidebar */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page as the default route */}
            <Route path="/poyaday" element={<Poyaday />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
