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
    let animationFrame: number;

    const animate = () => {
      setDisplayedText(
        TARGET_TEXT.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return TARGET_TEXT[index];
            }
            if (TARGET_TEXT[index] === ' ') {
              return ' '; // Keep spaces intact
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= TARGET_TEXT.length) {
        // Force the exact string at the end just to be 100% sure
        setDisplayedText(TARGET_TEXT);
        
        // Wait just a tiny bit so the final name is visible clearly, then fade out
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 400);
        }, 300);
        return;
      }

      iteration += 1/2; // Speed of decoding (every 2 frames a letter is locked in)
      
      setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, 30); // Fast scramble frames
    };

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
