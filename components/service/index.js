import React from 'react';
import style from './service.module.scss';
import { service } from '../../data/data';

const Service = () => {
  return (
    <>
      <p className={style.smallText}>service</p>
      <h1 className={style.bigText}>My Services</h1>
      <div className={style.container}>
        {service.map((ss, index) => (
          <div key={index} className={style.singleService}>
            <h1 className={style.name}>{ss.name}</h1>
            {/* <div className={style.skillContainer}>
              {ss.skills.map((skill, index) => (
                <div key={index} className={style.singleSkill}>
                  <p className={style.skillName}>{skill.name}</p>
                  <h3 className={style.skillLevel}>{skill.level}</h3>
                </div>
              ))}
            </div> */}
            <div className={style.buttonContainer}>
              {/* do this later  */}
              <summary>
                <i
                  className='bx bx-right-arrow-alt'
                  style={{ fontSize: '2rem' }}
                ></i>
              </summary>
              <>
                {ss.serviceList.map((dd, index) => (
                  <p key={index}>{dd}</p>
                ))}
              </>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
