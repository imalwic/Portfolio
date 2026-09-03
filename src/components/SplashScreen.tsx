import React, { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';
import { ASCII_ART } from './asciiArt';

interface SplashScreenProps {
  onComplete: () => void;
}

const TARGET_TEXT = "Imal Wickrama Arachchi";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [displayedAscii, setDisplayedAscii] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let asciiLines = ASCII_ART.split('\\n');
    // fallback if split by literal \n didn't work (depending on how node executed it)
    if (asciiLines.length <= 1) {
       asciiLines = ASCII_ART.split('\n');
    }
    
    let currentAsciiLine = 0;
    let timer: NodeJS.Timeout;
    
    // Flag to track when both animations are complete
    let textDone = false;
    let asciiDone = false;
    
    const checkCompletion = () => {
      if (textDone && asciiDone) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 400); // Wait for fade out
        }, 600); // Wait a bit after drawing is done
      }
    };

    timer = setInterval(() => {
      // 1. Text Scramble Logic
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
        checkCompletion();
      }
      
      // 2. ASCII Draw Logic
      if (currentAsciiLine < asciiLines.length) {
        setDisplayedAscii(prev => prev + (currentAsciiLine === 0 ? '' : '\n') + asciiLines[currentAsciiLine]);
        currentAsciiLine++;
      } else if (!asciiDone) {
        asciiDone = true;
        checkCompletion();
      }

    }, 30); // 30ms per tick

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.splashContainer} ${isFadingOut ? styles.fadeOut : ''}`}>
      <div className={styles.centerBox}>
        <div className={styles.asciiWrapper}>
          <pre className={styles.smallAscii}>{displayedAscii}</pre>
        </div>
        
        <div className={styles.hackerTextContainer}>
          <span className={styles.hackerText}>{displayedText}</span>
          <span className={styles.cursor}></span>
        </div>
      </div>
    </div>
  );
}
