import React from 'react';
import { contact } from '../../data/data';
import style from './contact.module.scss';

const Contact = () => {
  const handleSubmit = () => {
    console.log('nothing now');
  };
  return (
    <>
      <p className={style.smallText}>contact</p>
      <h1 className={style.bigText}>Contact me</h1>
      <div className={style.parent}>
        <div className={style.container}>
          <div className={style.contact}>
            <h1>Talk to me</h1>
            {contact.map((ss, index) => (
              <div key={index} className={style.singleContact}>
                <i className={`bx ${ss.boxicon}`}></i>
                <h2 className={ss.name}>
                  {ss.icon.charAt(0).toUpperCase() + ss.icon.slice(1, 10)}
                </h2>
                <p className={style.value}>{ss.value}</p>
                <a href={ss.link}>
                  <i className='bx bx-right-arrow-alt'></i>
                </a>
              </div>
            ))}
          </div>
          <div className={style.formContainer}>
            <h1>Write to me</h1>
            <form className={style.form}>
              <input type='text' placeholder='Your name' />
              <input type='email' placeholder='Your email' />
              <textarea placeholder='write your message here...' />
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
