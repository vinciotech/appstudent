 
import { UserProvider } from '../components/UserProvider'; 
import UserComponent  from '../components/UserComponent'; 
import StudentList  from '../features/students/StudentList';
import StudentDetails  from '../features/students/StudentDetails';
import { store } from  '../features/store';
import { Provider } from 'react-redux';

function App() {   
  return (  
    <Provider store={store}>
      <UserProvider> 
        <UserComponent />
        <StudentList/>  
        <StudentDetails />      
      </UserProvider> 
    </Provider>
  );
}

export default App;