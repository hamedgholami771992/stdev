// src/components/Button.tsx

"use client";
import React from 'react';
import styles from './buttonA.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  kind?: "A" | "B"
}

const ButtonA: React.FC<ButtonProps> = ({ children, onClick, className, kind }) => {
  return (
    <button className={`${styles.button} ${className || ''} ${kind ? styles[kind] : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonA;
