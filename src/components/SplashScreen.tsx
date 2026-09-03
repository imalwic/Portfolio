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
    let timer: NodeJS.Timeout;
    
    // Flag to track when text animation is complete
    let textDone = false;
    
    timer = setInterval(() => {
      // Text Scramble Logic
      if (iteration < TARGET_TEXT.length) {
        setDisplayedText(
          TARGET_TEXT.split("")
            .map((letter, index) => {
              if (index < Math.floor(iteration)) {
                return TARGET_TEXT[index];
              }
              if (TARGET_TEXT[index] === ' ') {
                return ' '; // Keep spaces intact
              }
              return LETTERS[Math.floor(Math.random() * LETTERS.length)];
            })
            .join("")
        );
        iteration += 0.8; // Speed of decoding name
      } else if (!textDone) {
        setDisplayedText(TARGET_TEXT);
        textDone = true;
        clearInterval(timer);
        
        // Wait a bit after drawing is done
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 400); // Wait for fade out
        }, 600);
      }

    }, 30); // 30ms per tick

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.splashContainer} ${isFadingOut ? styles.fadeOut : ''}`}>
      <div className={styles.centerBox}>
        <div className={`${styles.imageWrapper} ${imageLoaded ? styles.imageVisible : ''}`}>
          <img 
            src="/profile.jpeg" 
            alt="Imal Wickrama Arachchi" 
            onLoad={() => setImageLoaded(true)}
            className={styles.profileImageBW}
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
