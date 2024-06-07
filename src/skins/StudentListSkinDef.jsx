 
export function Skin( p ) {
return (
  <div display="flex">
    <h2>Lista Studenti</h2>
    <button onClick={() => p.aggiungi()}>Aggiungi</button>
    <ul > 
      {p.students.map((studente) => (
         <li
         key={studente.id}            
          >
         <span onClick={() => p.seleziona(studente.id)}>           
         {studente.id} {studente.nome} {studente.cognome} 
         </span>
       </li>   
      ))}
    </ul>    
    </div>
);
}
