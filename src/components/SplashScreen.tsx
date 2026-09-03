import React, { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

interface SplashScreenProps {
  onComplete: () => void;
}

const TARGET_TEXT = "Imal Wickrama Arachchi";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 30; // Number of scrambles before resolving
    let animationFrame: number;

    const animate = () => {
      setDisplayedText(
        TARGET_TEXT.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return TARGET_TEXT[index];
            }
            // Add a chance to show a random character
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= TARGET_TEXT.length) {
        // Animation finished, wait a bit then fade out
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 800);
        }, 800);
        return; // Stop animating
      }

      iteration += 1 / 3; // Speed of resolving
      
      // We use setTimeout instead of requestAnimationFrame to slow down the scramble a bit
      setTimeout(() => {
         animationFrame = requestAnimationFrame(animate);
      }, 40);
    };

    // Start animation only after component mounts to avoid hydration mismatch
    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <div className={`${styles.splashContainer} ${isFadingOut ? styles.fadeOut : ''}`}>
      <div className={styles.centerBox}>
        <div className={`${styles.imageWrapper} ${imageLoaded ? styles.imageVisible : ''}`}>
          <img 
            src="/profile.jpeg" 
            alt="Imal Wickrama Arachchi" 
            onLoad={() => setImageLoaded(true)}
            className={styles.profileImage}
          />
        </div>
        
        <div className={styles.hackerTextContainer}>
          <span className={styles.hackerText}>{displayedText}</span>
          <span className={styles.cursor}></span>
        </div>
      </div>
    </div>
  );
}
