import React from 'react';
import { details, social } from '../../data/data';
import style from './footer.module.scss';

const Footer = () => {
  return (
    <div className={style.container}>
      <h1>{details.name}</h1>
      <div className={style.socialLinkContainer}>
        {social.map((ss, index) => (
          <a href={ss.url} key={index}>
            <i className={`bx ${ss.icon}`}></i>
          </a>
        ))}
      </div>
      <div className={style.bottomText}>
        <p className={style.text}>
          Copyright &copy; {details.name}. All Rights Reserved
        </p>
      </div>
      <div className={style.bottomText}>
        <p className={style.text2}>
          Powered By <a href='https://www.acestudios.tech'> Ace Studios</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
