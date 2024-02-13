import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <i className="fa-solid fa-envelope fa-2xl"></i>
          <a href="mailto:cpsivakumar09@gmail.com">cpsivakumar09@gmail.com</a>
        </li>
        <li className={styles.link}>
        <i className="fa-brands fa-linkedin fa-2xl"></i>
          <a href="https://www.linkedin.com/in/cpsivakumarcp2000">linkedin.com/in/cpsivakumarcp2000</a>
        </li>
        <li className={styles.link}>
        <i className="fa-brands fa-github fa-2xl"></i>          <a href="https://github.com/cpsivakumar">github.com/cpsivakumar</a>
        </li>
      </ul>
    </footer>
  );
};
