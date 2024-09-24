import React, { useState, useRef, useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const dropdownRefs = useRef({}); // Object to store refs for dropdown containers

  const navigate = useNavigate();

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prev => (prev === dropdown ? null : dropdown)); // Toggle dropdown
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside any of the dropdown containers
    const isOutside = Object.values(dropdownRefs.current).every(ref => !ref.contains(event.target));
    if (isOutside) {
      setOpenDropdown(null); // Hide dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar-container">
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none sidebar-header">
            LIST OF THE ITEM
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem
              icon="columns"
              onClick={() => navigate('/')}
              className="sidebar-menu-item"
            >
              Dashboard
            </CDBSidebarMenuItem>

            <div
              className="dropdown-container"
              ref={el => dropdownRefs.current['events'] = el}
              onClick={() => handleDropdownToggle('events')}
            >
              <CDBSidebarMenuItem icon="table" className="sidebar-menu-item">
                Events ▾
              </CDBSidebarMenuItem>
              {openDropdown === 'events' && (
                <div className="dropdown-menu">
                  <CDBSidebarMenuItem
                    icon="table"
                    onClick={() => navigate('/poyaday')}
                    className="dropdown-menu-item"
                  >
                    පෝදා වැඩසටහන
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    icon="table"
                    onClick={() => navigate('/animal-table')}
                    className="dropdown-menu-item"
                  >
                    වස් පිංකම
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    icon="table"
                    onClick={() => navigate('/animal-table')}
                    className="dropdown-menu-item"
                  >
                    භාවන වැඩසටහන
                  </CDBSidebarMenuItem>
                </div>
              )}
            </div>

            <div
              className="dropdown-container"
              ref={el => dropdownRefs.current['explore'] = el}
              onClick={() => handleDropdownToggle('explore')}
            >
              <CDBSidebarMenuItem icon="spinner" className="sidebar-menu-item">
                Explore ▾
              </CDBSidebarMenuItem>
              {openDropdown === 'explore' && (
                <div className="dropdown-menu">
                  <CDBSidebarMenuItem
                    icon="table"
                    onClick={() => navigate('/human-table')}
                    className="dropdown-menu-item"
                  >
                    ධර්ම කරුණු
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    icon="table"
                    onClick={() => navigate('/animal-table')}
                    className="dropdown-menu-item"
                  >
                    පැරණි පොත්
                  </CDBSidebarMenuItem>
                </div>
              )}
            </div>

            <CDBSidebarMenuItem
              icon="user"
              onClick={() => navigate('/profile')}
              className="sidebar-menu-item"
            >
              Profile page
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="chart-line"
              onClick={() => navigate('/analytics')}
              className="sidebar-menu-item"
            >
              Analytics
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem
              icon="exclamation-circle"
              onClick={() => window.open('/hero404', '_blank')}
              className="sidebar-menu-item"
            >
              404 page
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="sidebar-footer">
          <div className="sidebar-footer-content">Sudasun Arama☸️</div>
        </CDBSidebarFooter>
      </CDBSidebar>



    </div>
  );
};

export default Sidebar;
