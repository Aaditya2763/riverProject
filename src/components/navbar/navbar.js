import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FcOvertime } from 'react-icons/fc';
import './navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeDashboard, setactiveDashboard] = useState(true);
  const [addShift, setaddShift] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const dashboardStyleHandler = () => {
    setaddShift(false);
    setactiveDashboard(true);
  };

  const shiftStyleHandler = () => {
    setactiveDashboard(false);
    setaddShift(true);
  };

  function blurHandler() {
    if (toggleMenu) {
      setToggleMenu(false);
    }
  }

  return (
    <div id="header">
      <section className="headerBox" onClick={blurHandler}>
        <div className="navbar">
          <div className='logo'>
            <FcOvertime style={{ height: 60, width: 60 }} />
            <p style={{ marginTop: 15 }}>Counter</p>
          </div>
          <div>
            
            <button onClick={toggleMenuHandler} className="menubar" style={{ fontSize: '25px', color: '#ec655f' }}>
              <FaBars />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;