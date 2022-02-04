import React from 'react';
import { details } from '../../data/data';
import style from './home.module.scss';

const Home = () => {
  return (
    <>
      <div className={style.container}>
        <p className={style.preText}>Hello, I&apos;m</p>
        <h1 className={style.name}>{details.name}</h1>
        <p className={style.titleText}>{details.title[0]}</p>
        <div className={style.buttonContainer}>
          <button className={style.button}>Download CV</button>
          <button className={style.button}>About Me</button>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img src={details.image} className={style.image} alt='test photo' />
      </div>
    </>
  );
};

export default Home;
