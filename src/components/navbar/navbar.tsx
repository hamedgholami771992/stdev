// src/components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import styles from './navbar.module.scss';
import ButtonA from '@/components/buttons/buttonA';
import Image from 'node_modules/next/image';
import { Images } from '@/images/index';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={Images.Icon}
            alt="Chrome logo"
            width={40}  // Define width
            height={40} // Define height
          />
          <span>Chrome</span>
        </div>

        <div className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`} onClick={toggleNavbar}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>

        <ul className={`${styles.navItems} ${isOpen ? styles.navItemsOpen : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className={styles.navButton}>
          <ButtonA>Get Started Free</ButtonA>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
