import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';



export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'am Yukta</h1>
        <p className={styles.description}>Hi there! I'm Yukta Vaidya, a tech enthusiast with a B.Tech in Electrical & Electronics Engineering. Skilled in Python, web-development, Excel, and SQL, I'm also a proficient communicator and problem-solver.</p>
        <a href="mailto:yuktavaidya065@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl('hero/hero 1.png')}  />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
