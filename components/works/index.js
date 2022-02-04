import React, { useState } from 'react';
import { workCategory, works } from '../../data/data';
import style from './work.module.scss';

const Work = () => {
  const [work, setWork] = useState(works);
  const filterWork = (category) => {
    setWork(works.filter((ss) => ss.category.toLowerCase().includes(category)));
    console.log(category);
    console.log(work);
    console.log(works);
  };
  return (
    <>
      <p className={style.smallText}>my portfolio</p>
      <h1 className={style.bigText}>My Recent Works</h1>
      <div className={style.container}>
        <div className={style.categoryContainer}>
          <p className={style.category} onClick={() => setWork(works)}>
            All
          </p>
          {workCategory.map((ss, index) => (
            <p
              key={index}
              className={style.category}
              onClick={() => filterWork(ss.toLowerCase())}
            >
              {ss}
            </p>
          ))}
        </div>
        <div className={style.workContainer}>
          {work.map((ss, index) => (
            <div key={index} className={style.singleWork}>
              <img src={ss.image} alt={ss.name} className={style.image} />
              <h2 className={style.title}>{ss.name}</h2>
              <div className={style.demo}>
                {/* <p>See Demo</p> */}
                <i className='bx bx-right-arrow-alt'></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
