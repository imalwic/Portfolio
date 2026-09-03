import React, { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';
import { ASCII_ART } from './asciiArt';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const lines = ASCII_ART.split('\n');
    let currentLine = 0;
    
    // Animate line by line for a fast but noticeable hacker effect
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setDisplayedText(prev => prev + (currentLine === 0 ? '' : '\\n') + lines[currentLine]);
        currentLine++;
      } else {
        clearInterval(interval);
        // Wait a bit after drawing, then fade out
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 800); // 800ms fade out duration
        }, 1000); // 1s pause
      }
    }, 40); // 40ms per line = ~1.6s total drawing time

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`${styles.splashContainer} ${isFadingOut ? styles.fadeOut : ''}`}>
      <div className={styles.terminal}>
        <pre className={styles.asciiArt}>{displayedText}</pre>
        <div className={styles.cursor}></div>
      </div>
    </div>
  );
}
