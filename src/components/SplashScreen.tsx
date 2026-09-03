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

    const typeLetter = () => {
      setDisplayedText(TARGET_TEXT.substring(0, iteration));

      if (iteration >= TARGET_TEXT.length) {
        // Name is fully displayed, wait a short moment so it can be read, then fade out
        timer = setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 400); // 400ms fade out duration
        }, 500); // 500ms pause to read the name
        return;
      }

      iteration++;
      timer = setTimeout(typeLetter, 60); // Type next letter after 60ms
    };

    // Start typing
    timer = setTimeout(typeLetter, 200); // Initial delay

    return () => clearTimeout(timer);
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
