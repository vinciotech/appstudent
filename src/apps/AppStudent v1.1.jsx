// AppStudent v1.1
//
//  partendo da AppStudent v1.0:
//  - Centralizzare la gestione dei temi, separandola dalla UI applicativa
//  - utilizzare un selettore di tema che effettua lo switch live delle skin dei componenti

 
import '../assets/App.css';

import { UserProvider } from '../components/UserProvider';  
import { ThemeProvider, useTheme } from '../components/ThemeProvider';  
import { useDispatch, Provider} from 'react-redux'; 
import { setWindowsStateStudente } from '../features/students/studentSlice';
import { store } from  '../features/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StudentList  from '../features/students/StudentList';
import StudentForm  from '../features/students/StudentForm';
import ConfigApp  from '../components/ConfigApp';
  
function Welcome() {
  const { WelcomeSkin } = useTheme();
  const dispatch = useDispatch();  
  dispatch(setWindowsStateStudente('none')); 
  
  return (
    <WelcomeSkin />
  );
}

function NavigationBar() {
  const { NavigationBarSkin } = useTheme();
  const dispatch = useDispatch();  

  const aggiungi = () => { 
    dispatch(setWindowsStateStudente('new')); 
  } 
  return (NavigationBarSkin({  aggiungi  })); 
}


function App() {   
  return (  
    <Provider store={store}>  {/* redux */}
        <BrowserRouter>       {/* router*/}    
          <UserProvider>      {/* user */} 
            <ThemeProvider>   {/* theme */}
              <header>
                <NavigationBar />
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/students" element={<StudentList />} />     
                  <Route path="/config" element={<ConfigApp />} />     
                </Routes>
                <StudentForm />
              </main>
            </ThemeProvider>
          </UserProvider> 
       </BrowserRouter>
    </Provider>
  );
}

export default App;