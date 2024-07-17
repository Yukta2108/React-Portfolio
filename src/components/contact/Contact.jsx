import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free To Reach Out!</p></div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} />
          <a href="mailto:yuktavaidya065@gmail.com">myemail@email.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} />
          <a href="https://www.linkedin.com/in/yukta-vaidya-930ba2225">linkedin.com/yuktavaidya</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')}/>
          <a href="https://github.com/Yukta2108
        ">github.com/yuktavaidya</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl('contact/facebookIcon.png')} />
          <a href="https://www.facebook.com/yukta.vaidya">facebook.com/yuktavaidya</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl('contact/instaIcon.png')} />
          <a href="https://instagram.com/yukta__vaidya?igshid=ZDdkNTZiNTM=">instagram.com/yuktavaidya</a>
        </li>

      </ul>
    </footer>
  );
}