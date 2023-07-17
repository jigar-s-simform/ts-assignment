import React, { createContext, useState } from 'react';
import { ThemeValues } from '../constants';

export type ThemeType = 'light' | 'dark'

export interface ThemeValueInterface {
  theme: ThemeType;
  setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeValueInterface>({theme: ThemeValues.light});

const ThemeProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
const [theme, setTheme] = useState<ThemeType>(ThemeValues.light);
    
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
