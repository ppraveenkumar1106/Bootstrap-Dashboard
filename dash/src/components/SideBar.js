import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './sideBar.css';
import image1 from './assest/cda.jpg';
import image2 from './assest/msa.jpg';


function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <button 
        className={`menu-button ${isCollapsed ? 'hidden' : ''}`} 
        onClick={handleToggleSidebar}
      >
        <i className="ri-menu-3-line"></i>
      </button>

      <aside id='sidebar' className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <ul className='sidebar-nav' id='sidebar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='#' style={{background: '#fff'}}>
              <i 
                className="ri-menu-unfold-4-line" 
                style={{ marginLeft: "5px", color: '#012970', fontSize: "24px" }}
                onClick={handleToggleSidebar}
              ></i>
            </a>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/dashboard'>
              <i className="bi bi-house"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/overview'>
              <i className="bi bi-speedometer2"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/performance'>
              <i className="ri-funds-line"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/onlycards'>
              <i className="bi bi-basket2"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/products'>
              <i className="bi bi-shop"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/transaction'>
              <i className="bi bi-clock-history"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/charts'>
              <i className="bi bi-bar-chart"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/settings'>
              <i className="ri-settings-3-line"></i>
            </Link>
          </li>
        </ul>

        <ul className='sidebar-down-nav'>
          <li className='sidebar-footer-item'>
            <p>v1.0.96</p>
          </li>
          <li className='sidebar-footer-item'>
            <img className='cda-part' src={image1} alt='Description 1' />
          </li>
          <li className='sidebar-footer-item'>
            <img className='cda-part' src={image2} alt='Description 2' />
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
