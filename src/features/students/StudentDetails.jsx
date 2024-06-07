 
import { useUser } from '../../components/UserProvider';
import {  useSelector } from 'react-redux'; 
import {   selectStudentById } from './studentSlice';

function StudentDetails() { 
    const { user } = useUser();
    const selectedStudentId = useSelector ( state => state.students.studenteSelezionatoInListaId ); 
    const student = useSelector (state => selectStudentById(state, selectedStudentId));
 
 
return (
  <div>
    <h2>Dettaglio Studente </h2> 
    { user && user.username && student && 
        <p>Id: {student.id}</p> 
    }
    { student && <>        
        <p>Nome: {student.nome}</p>
        <p>Cognome: { student.cognome}</p></>
    }
    { user && user.username && student && <>            
        <p>eta: { student.eta}</p>
        <p>email: { student.email}</p>
        <p>Codice Fiscale: { student.codicefiscale}</p></>
    }
    { user && (! user.username) &&
        <p>Occorre essere loggato per visualizzare il resto del dettaglio dello studente</p>
    }
    
  </div>
);
}

export default StudentDetails;
