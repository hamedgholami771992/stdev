// app/page.tsx

import "./globals.css"
import Navbar from '@/components/navbar/navbar';
import styles from './page.module.scss'
import Header from "@/sections/header/header";
import Roban from "@/sections/roban/roban";
import Grow from "@/sections/grow/grow";
import Security from "@/sections/security/security";
import Performance from "@/sections/performance/performance";
import Choose from "@/sections/choose/choose";
import Ready from "@/sections/ready/ready";
import Help from "@/sections/help/help";
import People from "@/sections/people/people";
import Footer from "@/sections/footer/footer";

export default function HomePage() {
  return (
    <>
      <div className={styles.navSpot}>
        <Navbar />
      </div>
      <div className={styles.headerSpot}>
        <Header />
      </div>
      <div className={styles.robanSpot}>
        <Roban />
      </div>
      <div className={styles.growSpot}>
        <Grow />
      </div>
      <div className={styles.securitySpot}>
        <Security />
      </div>
      <div className={styles.performanceSpot}>
        <Performance />
      </div>
      <div className={styles.chooseSpot}>
        <Choose />
      </div>
      <div className={styles.readySpot}>
        <Ready />
      </div>
      <div className={styles.helpSpot}>
        <Help />
      </div>
      <div className={styles.peopleSpot}>
        <People />
      </div>
      <div className={styles.footerSpot}>
        <Footer />
      </div>
    </>
  );
}
