import React, { useState } from 'react';
import { testimonial } from '../../data/data';
import style from './testimonial.module.scss';

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  // setInterval(() => {
  //   if (current === testimonial.length - 1) {
  //     setCurrent(0);
  //   } else {
  //     setCurrent(current + 1);
  //   }
  // }, 3000);
  return (
    <>
      <p className={style.smallText}>Testimonial</p>
      <h1 className={style.bigText}>What People say</h1>
      <div className={style.container}>
        <div className={style.testimonialContainer}>
          <div className={style.singleTestimonial}>
            <img
              src={testimonial[current].image}
              alt={testimonial[current].name}
              className={style.image}
            />
            <h2 className={style.name}>{testimonial[current].name}</h2>
            <p className={style.title}>{testimonial[current].title}</p>
            <p className={style.description}>
              {testimonial[current].description}
            </p>
          </div>
        </div>
        <div className={style.index}>
          {testimonial.map((ss, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={
                style.singleIndex + ' ' + (current === index && style.active)
              }
            >
              <i className='bx bxs-circle'></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
