// AppStudent v1.0
//
//  partendo da AppStudentMui:
//  - Allargare a tutti i componenti lo skin Mui
//    - 1 - modificare i componenti StudentList, Welcome, NavigationBar, UserComponent  per gestire lo skin 
//    - 2 - implementare skin Def per i componenti (prendendo il codice  dal componente)
//    - 3 - implementare skin Mui per i componenti 
 
import '../assets/App.css';
import { UserProvider } from '../components/UserProvider';  
import { useDispatch, Provider} from 'react-redux'; 
import { setWindowsStateStudente } from '../features/students/studentSlice';
import { store } from  '../features/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StudentList  from '../features/students/StudentList';
import StudentForm  from '../features/students/StudentForm';

//import { Skin as WelcomeSkin } from '../skins/WelcomeSkinDef';
import { Skin as WelcomeSkin } from '../skins/WelcomeSkinMui';
//import { Skin as NavBarSkin } from '../skins/NavigationBarSkinDef';
 import { Skin as NavBarSkin } from '../skins/NavigationBarSkinMui';
  
function Welcome() {
  const dispatch = useDispatch();  
  dispatch(setWindowsStateStudente('none')); 
  
  return (
    <WelcomeSkin />
  );
}

function NavigationBar() {
  const dispatch = useDispatch();  

  const aggiungi = () => { 
    dispatch(setWindowsStateStudente('new')); 
  } 
  return (NavBarSkin({  aggiungi  })); 
}


function App() {   
  return (  
    <Provider store={store}>
      <UserProvider> 
        <BrowserRouter>
          <header>
            <NavigationBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/students" element={<StudentList />} />     
            </Routes>
            <StudentForm />
          </main>
       </BrowserRouter>
      </UserProvider> 
    </Provider>
  );
}

export default App;