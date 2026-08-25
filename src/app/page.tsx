'use client';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [roleText, setRoleText] = useState('Full Stack Developer');

  useEffect(() => {
    const roles = ['Full Stack Developer', 'Software Engineer', 'UI/UX Enthusiast'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % roles.length;
      setRoleText(roles[idx]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      name: "EventHive Platform",
      tech: ["TypeScript", "Java", "Spring Boot", "React", "PostgreSQL"],
      github: "https://github.com/imalwic/eventhive-frontend",
    },
    {
      name: "Dighayu Medical",
      tech: ["TypeScript", "React", "Node.js"],
      github: "https://github.com/imalwic/dighayu-medical",
    },
    {
      name: "Lanka Route",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/imalwic/lanka-route",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>IMALWIC.</div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <nav className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#tech">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className={styles.themeToggle} aria-label="Toggle Theme">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </button>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.availabilityBadge}>
              <span className={styles.dot}></span>
              Available for opportunities
            </div>
            
            <h2 className={styles.heroSubtitle}>Undergraduate at University of<br/>Moratuwa</h2>
            <h1 className={styles.heroTitle}>Imal<br/>Wickrama Arachchi</h1>
            
            <p className={styles.heroRole}>
              I'm a <span className={styles.highlightRole}>{roleText}</span> <span className="animate-pulse">|</span>
            </p>
            
            <a href="#resume" className={styles.resumeButton}>View My Resume</a>
          </div>

          <div className={styles.heroImageContainer}>
            {/* Placeholder for Profile Picture, styled as a subtle gradient circle for now */}
            <div className={styles.heroImageCircle}>
               {/* Replace with actual image: <img src="/profile.png" alt="Profile" /> */}
            </div>
            
            <div className={styles.heroSocials}>
              <a href="mailto:hello@imalwic.com" className={styles.heroSocialBtn} aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="https://linkedin.com/in/Imal-Wickrama-Arachchi" target="_blank" rel="noopener noreferrer" className={styles.heroSocialBtn} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"></path></svg>
              </a>
              <a href="https://github.com/imalwic" target="_blank" rel="noopener noreferrer" className={styles.heroSocialBtn} aria-label="GitHub">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.18c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"></path></svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.aboutText}>
            I am a Computer Science and Engineering undergraduate passionately focused on building modern, high-performance web applications. 
            I love taking ideas from a completely blank folder to a fully deployed product, focusing on clean architecture, type-safety, and seamless user experiences. 
            Right now, I'm deep-diving into the full-stack ecosystem with React, TypeScript, and Spring Boot.
            Beyond writing code, I believe in continuously learning and exploring cloud foundations on AWS or experimenting with open-source tools.
          </p>
        </section>

        {/* Journey Section */}
        <section id="journey" className={styles.section}>
          <h2 className={styles.sectionTitle}>My Journey</h2>
          
          <div className={styles.journeyGrid}>
            <div className={styles.journeyCol}>
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                Education
              </h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>Present</div>
                  <div className={styles.timelineTitle}>BSc (Hons) in Computer Science & Engineering</div>
                  <div className={styles.timelineOrg}>University of Moratuwa</div>
                </div>
              </div>
            </div>

            <div className={styles.journeyCol}>
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                Experience
              </h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>Present</div>
                  <div className={styles.timelineTitle}>Freelance Full Stack Developer</div>
                  <div className={styles.timelineOrg}>Self-Employed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          
          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Languages & Core</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}><span className={styles.techName}>Java</span></div>
              <div className={styles.techCard}><span className={styles.techName}>TypeScript</span></div>
              <div className={styles.techCard}><span className={styles.techName}>JavaScript</span></div>
              <div className={styles.techCard}><span className={styles.techName}>HTML/CSS</span></div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Backend & Database</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}><span className={styles.techName}>Spring Boot</span></div>
              <div className={styles.techCard}><span className={styles.techName}>Node.js</span></div>
              <div className={styles.techCard}><span className={styles.techName}>PostgreSQL</span></div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Frontend</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}><span className={styles.techName}>React</span></div>
              <div className={styles.techCard}><span className={styles.techName}>Next.js</span></div>
              <div className={styles.techCard}><span className={styles.techName}>Vue</span></div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.projectsSubtitle}>Explore some of my recent projects</p>
          
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <div className={styles.projectLinks}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLinkIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.18c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"></path></svg>
                    </a>
                  </div>
                </div>
                <div className={styles.projectTech}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.projectTechTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
