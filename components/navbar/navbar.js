import React, { useEffect, useState } from 'react';
import style from './navbar.module.scss';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobile, setMobile] = useState(false);
  const toggleNavbar = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    window.innerWidth < 768 ? setIsOpen(false) : setIsOpen(true);
    window.innerWidth < 768 ? setMobile(true) : setMobile(false);
  }, []);

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbarContainer}>
          <a href='#' className={style.logo}>
            <h1>Logo</h1>
          </a>
        </div>

        <div className={style.timesBtn} onClick={toggleNavbar}>
          {isOpen && mobile ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={style.navLinks}
          style={{ display: isOpen ? 'flex' : 'none' }}
          id='navLinks'
        >
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Resume</a>
          <a href='#'>Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
