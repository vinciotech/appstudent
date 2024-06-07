import { createContext, useState, useContext } from 'react';
import { getSkins } from '../skins/SkinManager';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {

   const [theme, setTheme] = useState('Mui');
   
 
   function changeTheme(newTheme)  {      
      setTheme(newTheme);
   }   
   const skins = getSkins(theme);
   return (
     <ThemeContext.Provider value={{ theme, changeTheme , ...skins}}>
        {children}    
     </ThemeContext.Provider>
    );  
}; 

export const useTheme = () => useContext(ThemeContext);