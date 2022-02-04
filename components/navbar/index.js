import React from 'react';
import style from './navbar.module.scss';

import { navbar } from '../../data/data.js';
const Navbar = () => {
  return (
    <div className={style.navParent}>
      <div className={style.navContainer}>
        {navbar?.map((ss, index) => (
          <a href={ss.link} key={index} className={style.navItem}>
            <i className={`bx ${ss.icon} ` + style.navIcon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
