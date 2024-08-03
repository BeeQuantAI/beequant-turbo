'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useUserContext } from '@/hooks/userHooks';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { THEME } from '@/shared/constants/storage';
import GlobalStyles from '@/styles/globalStyles';

// Define the context with a default value structure
export const ThemeContext = createContext({
  themeColor: 'dark',
  setThemeColor: (color: string) => {
    console.log(`Setting theme color to: ${color}`);
  }, // Placeholder function
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { store } = useUserContext();
  const [themeColor, setThemeColor] = useState('dark');

  // Only attempt to access localStorage in the client-side environment
  useEffect(() => {
    const localTheme = typeof window !== 'undefined' ? localStorage.getItem(THEME) : null;
    setThemeColor(localTheme || store.themeColor || 'dark');
  }, [store.themeColor]);

  // Context value that will be available to all consumers of the context
  const contextValue = {
    themeColor,
    setThemeColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider
        theme={{
          mode: themeColor,
          direction: 'ltr',
          shadow: 'on',
          border: 'on',
        }}
      >
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
