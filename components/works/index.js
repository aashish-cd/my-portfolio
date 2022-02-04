import React, { useEffect, useState } from 'react';
import { workCategory } from '../../data/data';
import style from './work.module.scss';
import axios from 'axios';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [work, setWork] = useState([]);
  const fetchWork = async () => {
    const res = await axios.get(
      'https://portfolio-backend-aashish.herokuapp.com/api/projects'
    );
    await setWorks(res.data);
    await setWork(res.data);
    // console.log(res.data);
  };
  useEffect(() => {
    fetchWork();
  }, []);
  const filterWork = (category) => {
    setWork(
      works?.filter((ss) => ss.category.toLowerCase().includes(category))
    );
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
              <img src={ss.thumbnail} alt={ss.name} className={style.image} />
              <h2 className={style.title}>{ss.name}</h2>
              <div className={style.demo}>
                {/* <p>See Demo</p> */}
                <a href={ss.githubLink}>
                  <i className='bx bxl-github'></i>
                </a>
                <a href={ss.link}>
                  <i className='bx bx-low-vision'></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
