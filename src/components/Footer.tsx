import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Background Grid Pattern */}
      <div className={styles.gridOverlay}></div>
      
      {/* Glowing Bottom Effect */}
      <div className={styles.bottomGlow}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          
          {/* Column 1: Branding & Intro */}
          <div className={styles.columnBrand}>
            <h3 className={styles.name}>Imal <span className={styles.highlight}>Wickrama Arachchi</span></h3>
            <p className={styles.description}>
              Computer Science Undergraduate and Full-Stack Developer building high-performance web applications and scalable systems from Sri Lanka.
            </p>
            <div className={styles.status}>
              <span className={styles.statusDot}></span>
              <span>Available for hiring</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>NAVIGATION</h4>
            <ul className={styles.linksList}>
              <li><a href="#about">About</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#tech">Tech Stack</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>GET IN TOUCH</h4>
            <ul className={styles.linksList}>
              <li><a href="mailto:waiseelaka2002@gmail.com">waiseelaka2002@gmail.com</a></li>
              <li><span>Sri Lanka</span></li>
              <li><a href="#contact" className={styles.highlightLink}>Start a project &rarr;</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>CONNECT</h4>
            <ul className={styles.linksList}>
              <li><a href="https://github.com/Imalwic" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/imal-wickrama-arachchi-083a67317" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="/resume.pdf" download>Resume</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} Imal Wickrama Arachchi. All rights reserved.</p>
          <p>Designed & Developed by Imal Wickrama Arachchi</p>
        </div>
      </div>
    </footer>
  );
}
