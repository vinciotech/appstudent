 
import '../assets/App.css';
import { UserProvider } from '../components/UserProvider'; 
import UserComponent  from '../components/UserComponent'; 
import StudentList  from '../features/students/StudentList';
import StudentDetails  from '../features/students/StudentDetails';
import { store } from  '../features/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';




function StudentsComponent() {
  return (
  <>
    <StudentList/>  
    <StudentDetails />    
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