 
import { useUser } from '../components/UserProvider';
import { useTheme } from '../components/ThemeProvider';  

function UserComponent() {
    const { UserComponentSkin } = useTheme();
    const { user, login, logout } = useUser();
 
    return  UserComponentSkin (  { user, login, logout } );  

}

export default UserComponent;