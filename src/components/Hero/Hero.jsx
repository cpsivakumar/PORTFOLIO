import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import profilePic from "../../Images/siva.png"

import "./HeroStyle.css"
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>CP SIVAKUMAR</h1>
        <p className={styles.description}>
        As a MEAN Stack Developer, I specialize in leveraging the power of MongoDB, Express.js, Angular, and Node.js to build robust and scalable applications. My journey in web development involves creating feature-rich, interactive, and responsive solutions that not only meet but exceed client expectations.
        </p>
        <a href="mailto:cpsivakumar09@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={profilePic}
        alt=" "
        className="heroImg"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
