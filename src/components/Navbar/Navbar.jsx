import React from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        SHIV SHAKTI <br />
        HATCHERIES
      </a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuitem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.menuitem}>
            <a href="#about">Our Company</a>
          </li>
          <li className={styles.menuitem}>
            <a href="#companies">Companies</a>
          </li>
          <li className={styles.menuitem}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
