
import { useEffect  } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { useTheme } from '../../components/ThemeProvider';  
import { fetchStudents, selectAllStudents, selezionaLoStudenteInLista, setWindowsStateStudente } from './studentSlice';
 

function StudentList() {
  const { StudentListSkin } = useTheme();
  const dispatch = useDispatch();
  const students = useSelector ( selectAllStudents );  

  useEffect( () => { 
    dispatch(fetchStudents());
  }, [] )  
    
  const seleziona = (studenteId) => {
    console.log("seleziona " +studenteId);
    dispatch(selezionaLoStudenteInLista(studenteId));
    dispatch(setWindowsStateStudente('view')); 
  }
 
  const aggiungi = () => { 
    dispatch(setWindowsStateStudente('new')); 

  } 

  return StudentListSkin ({ students, seleziona, aggiungi });

}

export default StudentList;
