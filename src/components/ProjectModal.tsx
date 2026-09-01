'use client';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../app/page.module.css';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export interface Project {
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tech: string[];
  github: string;
  liveLink: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.modalBackdrop} onClick={onClose}>
          <motion.div 
            className={styles.modalContent}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalCloseBtn} onClick={onClose}>
              <FaTimes />
            </button>
            
            <div className={styles.modalImageContainer}>
              <img src={project.image} alt={project.name} className={styles.modalImage} />
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalHeader}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h2 className={styles.modalTitle}>{project.name}</h2>
              </div>
              
              <div className={styles.modalDescription}>
                {project.fullDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.modalTech}>
                <h4 className={styles.modalSubtitle}>Technologies Used:</h4>
                <div className={styles.projectTech}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.projectTechTag}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalActions}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.modalActionBtn}>
                  <FaGithub /> View Source
                </a>
                {project.liveLink && project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`${styles.modalActionBtn} ${styles.primaryBtn}`}>
                    <FaExternalLinkAlt /> Live Preview
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
