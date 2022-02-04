import React from 'react';
import { details, aboutData, about } from '../../data/data';
import style from './about.module.scss';
const About = () => {
  return (
    <>
      <p className={style.smallText}>my intro</p>
      <h1 className={style.bigText}>About Me</h1>
      <div className={style.container}>
        <img src={details.image} className={style.image} alt={details.name} />

        <div className={style.dataContainer}>
          <div className={style.aboutDataContainer}>
            {aboutData.map((ss, index) => (
              <div key={index} className={style.singleData}>
                <i className={`bx ${ss.icon}`}></i>
                <h2>{ss.name}</h2>
                <p>{ss.value}</p>
              </div>
            ))}
          </div>
          <div className={style.textContainer}>
            <p className={style.description}>{about.description}</p>
            <button className={style.button}>Contact me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
