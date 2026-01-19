import { useState, useEffect } from 'react';

type Theme = 'dark';

export function useTheme() {
  const [theme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, [theme]);

  const toggleTheme = () => {
    // 仅保留暗色主题，无实际功能
    return;
  };

  return {
    theme,
    toggleTheme
  };
}