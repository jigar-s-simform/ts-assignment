import React, { createContext, useState } from 'react';
import { Strings } from '../constants';

export type ThemeType = 'light' | 'dark'

export interface ThemeValueInterface {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<Partial<ThemeValueInterface>>({});

const ThemeProvider = ({children}: {children: JSX.Element}): JSX.Element => {
const [theme, setTheme] = useState<ThemeType>('light');
    
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
