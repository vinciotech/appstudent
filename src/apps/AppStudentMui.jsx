// AppStudentMui
//
//  partendo da AppStudenteRdxRoute:
//  1 - rinomina StudentEdit in StudentForm
//  2 - Elimina StudentDetails e lo sostituisce con StudentForm che mostra i dati anche in sola lettura
//  3 - StudentForm può avere 4 stati: mod, new, view, none (quest'ultimo se non visualizzato)
//  4 - Creati due skin per StudentForm, uno che usa i tag default (Def) e uno che usa la libreria Mui
 
import '../assets/App.css';
import { UserProvider } from '../components/UserProvider'; 
import UserComponent  from '../components/UserComponent'; 
import StudentList  from '../features/students/StudentList';
import StudentForm  from '../features/students/StudentForm';
import { store } from  '../features/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';




function StudentsComponent() {
  return (
  <>
    <StudentList/>  
    <StudentForm />
  </>
  );
}


function Welcome() {
  return (
    <div>
      <h2>Benvento nell'app Student List</h2> 
      <p>Seleziona una voce dal menu</p>
    </div>
  );
}

function NavigationBar() {

  return (
    <nav>
      <ul>
        <li><NavLink to="/">Benvenuto</NavLink> </li>
        <li><NavLink to="/students">Studenti</NavLink> </li>
      </ul>
    </nav>
  );

}


function App() {   
  return (  
    <Provider store={store}>
      <UserProvider> 
        <BrowserRouter>
          <header>
            <NavigationBar />
            <UserComponent />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/students" element={<StudentsComponent />} />     
            </Routes>
          </main>
       </BrowserRouter>
      </UserProvider> 
    </Provider>
  );
}

export default App;