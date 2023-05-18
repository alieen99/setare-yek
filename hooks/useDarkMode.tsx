import { useEffect, useState } from 'react';

const useDarkMode = (): [boolean,()=>void] => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = ()=>{
    setIsDarkMode((pervMode)=>!pervMode)
  }
  useEffect(() => {
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    if (typeof window !== 'undefined') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);
      darkModeMediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        darkModeMediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }
  }, []);

  return [isDarkMode,toggleDarkMode];
};

export default useDarkMode;