'use client';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { 
  SiTypescript, SiJavascript, 
  SiNestjs, SiSpringboot, SiNextdotjs, SiTailwindcss, 
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, 
  SiPostman, SiCucumber, 
  SiSwagger 
} from 'react-icons/si';
import { FaDatabase, FaAws, FaJava, FaPython, FaHtml5, FaNodeJs, FaReact, FaDocker, FaGitAlt, FaGithub, FaJira, FaLeaf, FaArrowRight, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import ThemeToggle from '../components/ThemeToggle';
import CardWrapper from '../components/CardWrapper';
import TerminalWidget from '../components/TerminalWidget';
import ProjectModal, { Project } from '../components/ProjectModal';

export default function Home() {
  const [roleText, setRoleText] = useState('');
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const roles = ['Full Stack Developer', 'Software Engineer', 'UI/UX Enthusiast'];
    let timer: ReturnType<typeof setTimeout>;
    
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setRoleText(
        isDeleting 
          ? fullText.substring(0, roleText.length - 1) 
          : fullText.substring(0, roleText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100); // Deletes faster, types naturally

      if (!isDeleting && roleText === fullText) {
        // Pause at the end of typing
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && roleText === '') {
        // Pause before typing the next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(() => {}, 500); 
      } else {
        // Normal typing/deleting speed
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, loopNum, typingSpeed]);

  const projects: Project[] = [
    {
      name: "EventHive Platform",
      category: "Full Stack Application",
      description: "A comprehensive event ticketing and management system with live seat-mapping capabilities.",
      fullDescription: "EventHive is a modern event management and ticketing platform designed to handle high volumes of concurrent ticket sales. It features a fully interactive, live seat-mapping editor where organizers can draw custom seating charts and assign tiered pricing. \n\nThe system is built with a microservices-inspired architecture using Spring Boot and Postgres on the backend, ensuring robust transactional integrity during checkout. The frontend utilizes React and TypeScript with Zustand for state management, providing a blazing-fast, responsive user interface. Key features include QR-code based digital tickets, live sales analytics dashboards, and an automated email notification system.",
      image: "/eventhive.jpg",
      tech: ["TypeScript", "Java", "Spring Boot", "React", "PostgreSQL"],
      github: "https://github.com/imalwic/eventhive-frontend",
      liveLink: "#",
    },
    {
      name: "Dighayu Medical",
      category: "Healthcare System",
      description: "A modern medical clinic management system featuring patient records and appointment scheduling.",
      fullDescription: "Dighayu Medical is a complete clinic management suite designed to digitize local medical practices. It replaces traditional paper-based filing with a secure, easily searchable digital patient record system. \n\nDoctors can manage their daily schedules through an intuitive calendar interface, track patient medical histories, prescribe medications, and generate digital invoices. Built using React and Node.js with a MongoDB backend, the system ensures data privacy and fast retrieval times. The UI was designed with a soft blue aesthetic to provide a calm, professional experience for healthcare workers.",
      image: "/dighayu.jpg",
      tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/imalwic/dighayu-medical",
      liveLink: "#",
    },
    {
      name: "Lanka Route",
      category: "Web Application",
      description: "A tourism and route planning platform to help travelers navigate and discover Sri Lanka.",
      fullDescription: "Lanka Route is a vibrant tourism platform aimed at showcasing the beauty of Sri Lanka while providing practical tools for travelers. \n\nUsers can explore popular destinations, view scenic galleries, and use the built-in route planner to optimize their travel itineraries between cities like Kandy, Ella, and Galle. The application focuses heavily on frontend performance and beautiful, immersive UI design, utilizing modern CSS features and interactive maps to guide tourists. It also includes curated travel packages and historical information for major landmarks.",
      image: "/lankaroute.jpg",
      tech: ["JavaScript", "HTML", "CSS", "Google Maps API"],
      github: "https://github.com/imalwic/lanka-route",
      liveLink: "#",
    },
  ];

  return (
    <>
      <CustomCursor />
      {/* Splash Screen */}
      <div className={`${styles.splashScreen} ${!loading ? styles.hidden : ''}`}>
        <div className={styles.splashLogo}>IMALWIC.</div>
        <div className={styles.splashName}>Imal Wickrama Arachchi</div>
      </div>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/profile.jpeg" alt="Profile" className={styles.logoImage} />
          <span className={styles.logoText}>Imal Wickrama Arachchi</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <nav className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#projects">Projects</a>
            <a href="#tech">Tech Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle className={styles.themeToggle} />
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNavLinks}>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#journey" onClick={() => setIsMobileMenuOpen(false)}>Journey</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#tech" onClick={() => setIsMobileMenuOpen(false)}>Tech Stack</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Huge Background Text Marquee */}
          <div className={styles.heroBgMarquee}>
            <div className={styles.heroBgMarqueeTrack}>
              <span>FULL STACK DEVELOPER • SPRING BOOT • NEXT.JS • REACT • </span>
              <span>FULL STACK DEVELOPER • SPRING BOOT • NEXT.JS • REACT • </span>
            </div>
          </div>

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
            
            <div className={styles.heroAction}>
              <div className={styles.buttonGroup}>
                <a href="#projects" className={styles.primaryButton}>Explore Projects <FaArrowRight /></a>
                <a href="/resume.pdf" download className={styles.secondaryButton}><FaDownload size={14} /> CV</a>
              </div>
              
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <h3 className={styles.statNumber}>4+</h3>
                  <p className={styles.statLabel}>Projects<br/>Completed</p>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <h3 className={styles.statNumber}>IT</h3>
                  <p className={styles.statLabel}>Undergraduate<br/>UoM</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageCircle}>
               <img src="/profile.jpeg" alt="Imal Wickrama Arachchi" className={styles.profileImage} />
            </div>
          </div>
        </section>

        {/* Infinite Tech Marquee */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeContent}>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Java</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Spring Boot</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>React</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Next.js</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Node.js</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>NestJS</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>TypeScript</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>PostgreSQL</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>MongoDB</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Docker</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>AWS</span>
            </div>
            <div className={styles.marqueeContent}>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Java</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Spring Boot</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>React</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Next.js</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Node.js</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>NestJS</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>TypeScript</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>PostgreSQL</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>MongoDB</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>Docker</span>
              <span className={styles.marqueeItem}><span className={styles.marqueeDot}></span>AWS</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <motion.section 
          id="about" 
          className={styles.section}
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContainer}>
            <p className={styles.aboutText}>
              I am an Information Technology undergraduate passionately focused on building complete, end-to-end systems — from database design and backend architecture to AI-integrated features like intelligent chatbots. I love taking a project from a blank folder to a fully working product, whether that's designing a use case diagram from scratch or shipping a mobile app people can actually use. Right now, I'm deep in the full-stack ecosystem with React, NestJS, and Spring Boot, while exploring how to weave AI-powered assistants and real-time features like QR-based check-ins into real-world platforms. I've built everything from a bilingual pharmacy chatbot to a payment-integrated event ticketing system with a live seat-mapping editor, and I care as much about clean architecture and testing as I do about the final user experience. Beyond writing code, you'll find me exploring cloud infrastructure on AWS and Docker, sharpening my Linux skills, or contributing as Design Co-Lead at my university's IEEE RAS Student Branch.
            </p>
            <TerminalWidget />
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section 
          id="journey" 
          className={styles.section}
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.sectionTitle}>My Journey</h2>
          
          <div className={styles.journeyGrid}>
            <div className={styles.journeyCol}>
              <h3 className={styles.journeyTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                Education
              </h3>
              
              <div className={styles.customTimeline}>
                
                {/* UoM */}
                <div className={styles.customTimelineItem}>
                  <div className={styles.timelineIndicator}></div>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.timelineLogo}>
                        <img src="/uom.png" alt="University of Moratuwa" />
                      </div>
                      <div className={styles.timelineInfo}>
                        <span className={styles.timelineYear}>2024 - 2028</span>
                        <h4 className={styles.timelineDegree}>Faculty of Information Technology</h4>
                        <span className={styles.timelineSchool}>University of Moratuwa</span>
                      </div>
                    </div>
                    <div className={styles.timelineDetails}>
                      <p><span className={styles.bullet}>•</span> GPA : 3.00 / 4.00</p>
                    </div>
                  </div>
                </div>

                {/* A/Level */}
                <div className={styles.customTimelineItem}>
                  <div className={styles.timelineIndicator}></div>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.timelineLogo}>
                        <img src="/rcc.jpg" alt="Rajapaksha Central College" />
                      </div>
                      <div className={styles.timelineInfo}>
                        <span className={styles.timelineYear}>2019 - 2022</span>
                        <h4 className={styles.timelineDegree}>G.C.E. Advanced Level</h4>
                        <span className={styles.timelineSchool}>Rajapaksha Central College Weeraketiya</span>
                      </div>
                    </div>
                    <div className={styles.timelineDetails}>
                      <p><span className={styles.bullet}>•</span> Chemistry : A</p>
                      <p><span className={styles.bullet}>•</span> Physics : A</p>
                      <p><span className={styles.bullet}>•</span> Combined Maths : B</p>
                    </div>
                  </div>
                </div>

                {/* O/Level */}
                <div className={styles.customTimelineItem}>
                  <div className={styles.timelineIndicator}></div>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.timelineLogo}>
                        <img src="/rcc.jpg" alt="Rajapaksha Central College" />
                      </div>
                      <div className={styles.timelineInfo}>
                        <span className={styles.timelineYear}>2013 - 2018</span>
                        <h4 className={styles.timelineDegree}>G.C.E. Ordinary Level</h4>
                        <span className={styles.timelineSchool}>Rajapaksha Central College Weeraketiya</span>
                      </div>
                    </div>
                    <div className={styles.timelineDetails}>
                      <p><span className={styles.bullet}>•</span> 7A 1B 1C</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className={styles.journeyCol}>
              <h3 className={styles.journeyTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                Experience & Volunteering
              </h3>
              
              <div className={styles.customTimeline}>
                
                {/* IEEE */}
                <div className={styles.customTimelineItem}>
                  <div className={styles.timelineIndicator}></div>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.timelineLogo}>
                        <img src="/ieee.png" alt="IEEE RAS" />
                      </div>
                      <div className={styles.timelineInfo}>
                        <span className={styles.timelineYear}>2025 - Present</span>
                        <h4 className={styles.timelineDegree}>Co-Lead Design</h4>
                        <span className={styles.timelineSchool}>IEEE RAS Student Branch</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FIT Moments */}
                <div className={styles.customTimelineItem}>
                  <div className={styles.timelineIndicator}></div>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.timelineLogo}>
                        <img src="/fit-moments.jpg" alt="FIT Moments" />
                      </div>
                      <div className={styles.timelineInfo}>
                        <span className={styles.timelineYear}>2024 - Present</span>
                        <h4 className={styles.timelineDegree}>Member</h4>
                        <span className={styles.timelineSchool}>FIT Moments</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rotaract */}
                <div className={styles.customTimelineItem}>
                  <div className={styles.timelineIndicator}></div>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.timelineLogo}>
                        <img src="/rotaract.jpg" alt="Rotaract Club" />
                      </div>
                      <div className={styles.timelineInfo}>
                        <span className={styles.timelineYear}>2024 - Present</span>
                        <h4 className={styles.timelineDegree}>Member</h4>
                        <span className={styles.timelineSchool}>Rotaract Club</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects" 
          className={styles.section}
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.projectsSubtitle}>Explore some of my recent projects</p>
          
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <CardWrapper key={index} delay={index * 0.1}>
                <div className={styles.projectCard} onClick={() => setSelectedProject(project)}>
                  <div className={styles.projectImageWrapper}>
                    <img src={project.image} alt={project.name} className={styles.projectImage} />
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectHeader}>
                      <div className={styles.projectCategory}>{project.category}</div>
                      <div className={styles.projectLinks}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={styles.projectLinkIcon}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.18c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"></path></svg>
                        </a>
                      </div>
                    </div>
                    <h3 className={styles.projectTitle}>{project.name}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectTech}>
                      {project.tech.map((t, i) => (
                        <span key={i} className={styles.projectTechTag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardWrapper>
            ))}
          </div>

          <ProjectModal 
            project={selectedProject} 
            isOpen={selectedProject !== null} 
            onClose={() => setSelectedProject(null)} 
          />
        </motion.section>

        {/* Tech Stack */}
        <motion.section 
          id="tech" 
          className={styles.section}
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          
          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Languages</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <FaJava size={32} color="#007396" className={styles.techIcon} />
                <span className={styles.techName}>Java</span>
              </div>
              <div className={styles.techCard}>
                <SiTypescript size={32} color="#3178C6" className={styles.techIcon} />
                <span className={styles.techName}>TypeScript</span>
              </div>
              <div className={styles.techCard}>
                <SiJavascript size={32} color="#F7DF1E" className={styles.techIcon} />
                <span className={styles.techName}>JavaScript</span>
              </div>
              <div className={styles.techCard}>
                <FaPython size={32} color="#3776AB" className={styles.techIcon} />
                <span className={styles.techName}>Python</span>
              </div>
              <div className={styles.techCard}>
                <FaDatabase size={32} color="#4479A1" className={styles.techIcon} />
                <span className={styles.techName}>SQL</span>
              </div>
              <div className={styles.techCard}>
                <FaHtml5 size={32} color="#E34F26" className={styles.techIcon} />
                <span className={styles.techName}>HTML/CSS</span>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Backend</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <SiNestjs size={32} color="#E0234E" className={styles.techIcon} />
                <span className={styles.techName}>NestJS</span>
              </div>
              <div className={styles.techCard}>
                <FaLeaf size={32} color="#6DB33F" className={styles.techIcon} />
                <span className={styles.techName}>Spring Boot</span>
              </div>
              <div className={styles.techCard}>
                <FaNodeJs size={32} color="#339933" className={styles.techIcon} />
                <span className={styles.techName}>Node.js</span>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Frontend</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <FaReact size={32} color="#61DAFB" className={styles.techIcon} />
                <span className={styles.techName}>React</span>
              </div>
              <div className={styles.techCard}>
                <SiNextdotjs size={32} color="#ffffff" className={styles.techIcon} />
                <span className={styles.techName}>Next.js</span>
              </div>
              <div className={styles.techCard}>
                <SiTailwindcss size={32} color="#06B6D4" className={styles.techIcon} />
                <span className={styles.techName}>Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Databases & Storage</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <SiPostgresql size={32} color="#4169E1" className={styles.techIcon} />
                <span className={styles.techName}>PostgreSQL</span>
              </div>
              <div className={styles.techCard}>
                <SiMysql size={32} color="#4479A1" className={styles.techIcon} />
                <span className={styles.techName}>MySQL</span>
              </div>
              <div className={styles.techCard}>
                <SiMongodb size={32} color="#47A248" className={styles.techIcon} />
                <span className={styles.techName}>MongoDB</span>
              </div>
              <div className={styles.techCard}>
                <SiFirebase size={32} color="#FFCA28" className={styles.techIcon} />
                <span className={styles.techName}>Firebase</span>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>DevOps & Cloud</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <FaAws size={32} color="#FF9900" className={styles.techIcon} />
                <span className={styles.techName}>AWS</span>
              </div>
              <div className={styles.techCard}>
                <FaDocker size={32} color="#2496ED" className={styles.techIcon} />
                <span className={styles.techName}>Docker</span>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Testing</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <SiPostman size={32} color="#FF6C37" className={styles.techIcon} />
                <span className={styles.techName}>Postman</span>
              </div>
              <div className={styles.techCard}>
                <SiCucumber size={32} color="#23D96C" className={styles.techIcon} />
                <span className={styles.techName}>Cucumber</span>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryName}>Developer Tools</h4>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <FaGitAlt size={32} color="#F05032" className={styles.techIcon} />
                <span className={styles.techName}>Git</span>
              </div>
              <div className={styles.techCard}>
                <FaGithub size={32} color="#ffffff" className={styles.techIcon} />
                <span className={styles.techName}>GitHub</span>
              </div>
              <div className={styles.techCard}>
                <SiSwagger size={32} color="#85EA2D" className={styles.techIcon} />
                <span className={styles.techName}>Swagger</span>
              </div>
              <div className={styles.techCard}>
                <FaJira size={32} color="#0052CC" className={styles.techIcon} />
                <span className={styles.techName}>Jira</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section 
          id="contact" 
          className={styles.section}
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.sectionTitle}>Let's Connect</h2>
          <div className={styles.contactContainer}>
            <a href="mailto:waiseelaka2002@gmail.com" className={styles.contactBtn}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span>Email</span>
            </a>
            
            <a href="https://wa.me/94760696010" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <span>WhatsApp</span>
            </a>
            
            <a href="tel:0762807271" className={styles.contactBtn}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span>Call</span>
            </a>
            
            <a href="https://www.linkedin.com/in/imal-wickrama-arachchi-083a67317?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/Imalwic" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <span>GitHub</span>
            </a>
            
            <a href="https://www.facebook.com/share/1DbLmZjHdA/" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <span>Facebook</span>
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
}
