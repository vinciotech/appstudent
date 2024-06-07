// AppStudentData 
//
//  partendo da AppStudent v1.3
//  - Aggiungere il campo DataNascita a tutto lo stack applicativo

import "../assets/App.css";

import { UserProvider } from "../components/UserProvider";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";
import { useDispatch, Provider } from "react-redux";
import { setWindowsStateStudente } from "../features/students/studentSlice";
import { store } from "../features/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalDialog from "../components/GlobalDialog";
import ConfigApp from "../components/ConfigApp";
import StudentList from "../features/students/StudentList";
import StudentForm from "../features/students/StudentForm";

function Welcome() {
  const { WelcomeSkin } = useTheme();
  const dispatch = useDispatch();
  dispatch(setWindowsStateStudente("none"));

  return <WelcomeSkin />;
}

function NavigationBar() {
  const { NavigationBarSkin } = useTheme();
  const dispatch = useDispatch();

  const aggiungi = () => {
    dispatch(setWindowsStateStudente("new"));
  };
  return NavigationBarSkin({ aggiungi });
}

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* redux */}
      <BrowserRouter>
        {" "}
        {/* router*/}
        <UserProvider>
          {" "}
          {/* user */}
          <ThemeProvider>
            {" "}
            {/* theme */}
            <header>
              <NavigationBar />
            </header>
            <main>
              <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/students' element={<StudentList />} />
                <Route path='/config' element={<ConfigApp />} />
              </Routes>
              <StudentForm />
              <GlobalDialog />
            </main>
          </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
