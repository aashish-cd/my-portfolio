import React from 'react';
import style from './experience.module.scss';
import { experience } from '../../data/data';

const Experience = ({ experienceRef }) => {
  return (
    <>
      <p className={style.smallText}>my experience</p>
      <h1 className={style.bigText}>my EXperiences</h1>
      <div className={style.container} ref={experienceRef}>
        {experience.map((ss, index) => (
          <div key={index} className={style.singleExperience}>
            <h1 className={style.name}>{ss.name}</h1>
            <div className={style.skillContainer}>
              {ss.skills.map((skill, index) => (
                <div key={index} className={style.singleSkill}>
                  <p className={style.skillName}>{skill.name}</p>
                  <h3 className={style.skillLevel}>{skill.level}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
