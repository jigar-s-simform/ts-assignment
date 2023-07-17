import React, { createContext, useState } from 'react';

interface ThemeValueInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<Partial<ThemeValueInterface>>({});

const ThemeProvider = ({children}: {children: JSX.Element}): JSX.Element => {
const [theme, setTheme] = useState<string>('');
    
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
