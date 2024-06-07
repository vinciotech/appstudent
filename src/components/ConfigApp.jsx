import {  useTheme } from './ThemeProvider'; 

export default function ConfigApp() {     
    const { theme, changeTheme,  ConfigAppSkin } = useTheme();

     const handleChangeTheme = (themeName) => {
        console.log (themeName);
        changeTheme(themeName);
    }
    return ConfigAppSkin( { theme, handleChangeTheme } );

}