import React, { useState } from 'react';
import { UserProvider } from '../components/UserProvider';
import { ThemeProvider } from '../components/ThemeProvider';
import UserComponent  from '../components/UserComponent';
import ChangeTheme  from '../components/ChangeTheme';
import StudentList  from '../components/StudentList';
import StudentDetails  from '../components/StudentDetails';

function App() { 
  const[selStudentId, setSelStudent] = useState(null);
 
  return ( 
    <ThemeProvider>
      <UserProvider>
        <ChangeTheme />
        <UserComponent />
        <StudentList onSelStudent = { setSelStudent }/>  
        <StudentDetails studentId = { selStudentId } />      
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;