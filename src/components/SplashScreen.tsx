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

    timer = setInterval(() => {
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

      if (iteration >= TARGET_TEXT.length) {
        clearInterval(timer);
        setDisplayedText(TARGET_TEXT); // Ensure final text is perfect
        
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 400); // Wait for fade out
        }, 500); // 500ms pause to read
      }

      iteration += 1 / 2; // Speed (resolves 1 letter every 2 ticks)
    }, 40); // 40ms per tick

    return () => clearInterval(timer);
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
