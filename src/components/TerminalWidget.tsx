'use client';
import { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

interface TerminalLine {
  type: 'command' | 'output';
  text: string;
}

export default function TerminalWidget() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const commands = [
    { cmd: "whoami", output: "Imal Wickrama Arachchi\nFull Stack Developer & IT Undergraduate" },
    { cmd: "cat skills.txt", output: "React, Next.js, Node.js, NestJS, Spring Boot,\nPostgreSQL, MongoDB, Docker, AWS" },
    { cmd: "git status", output: "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean" },
  ];

  useEffect(() => {
    if (currentCmdIndex >= commands.length) return;

    const currentCmd = commands[currentCmdIndex].cmd;

    if (currentCharIndex < currentCmd.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, 50 + Math.random() * 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [
          ...prev, 
          { type: 'command', text: currentCmd }, 
          { type: 'output', text: commands[currentCmdIndex].output }
        ]);
        setCurrentCmdIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentCmdIndex]);

  return (
    <div className={styles.terminalWindow}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={styles.closeBtn}></span>
          <span className={styles.minBtn}></span>
          <span className={styles.maxBtn}></span>
        </div>
        <div className={styles.terminalTitle}>imal@portfolio:~</div>
      </div>
      <div className={styles.terminalBody}>
        {lines.map((line, index) => (
          <div key={index} className={line.type === 'command' ? '' : ''}>
            {line.type === 'command' && <span className={styles.terminalPrompt}>imal@portfolio:~$ </span>}
            <span className={line.type === 'command' ? styles.terminalCommandText : styles.terminalOutputText}>
              {line.text}
            </span>
          </div>
        ))}
        {currentCmdIndex < commands.length && (
          <div>
            <span className={styles.terminalPrompt}>imal@portfolio:~$ </span>
            <span className={styles.terminalCommandText}>{commands[currentCmdIndex].cmd.substring(0, currentCharIndex)}</span>
            <span className={styles.terminalCursor}></span>
          </div>
        )}
      </div>
    </div>
  );
}
