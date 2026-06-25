import React from 'react';
import StackIcon, { IconName } from 'tech-stack-icons';

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = "w-10 h-10" }) => {
  const getIconName = (name: string): string => {
    switch (name.toLowerCase()) {
      case 'ts':
      case 'typescript':
        return 'typescript';
      case 'js':
      case 'javascript':
        return 'js';
      case 'php':
        return 'php';
      case 'laravel':
        return 'laravel';
      case 'react':
        return 'react';
      case 'flutter':
        return 'flutter';
      case 'vue':
      case 'vuejs':
        return 'vuejs';
      case 'vite':
      case 'vitejs':
        return 'vitejs';
      case 'android':
        return 'android';
      case 'css':
      case 'css3':
        return 'css3';
      case 'html':
      case 'html5':
        return 'html5';
      case 'python':
        return 'python';
      case 'supabase':
        return 'supabase';
      case 'firebase':
        return 'firebase';
      case 'nextjs':
        return 'nextjs';
      case 'cpp':
      case 'c++':
        return 'c++';
      case 'dart':
        return 'dart';
      case 'mysql':
        return 'mysql';
      case 'sqlite':
        return 'sqlite';
      case 'vercel':
        return 'vercel';
      default:
        return name;
    }
  };

  return (
    <StackIcon 
      name={getIconName(name) as IconName} 
      className={className} 
    />
  );
};
