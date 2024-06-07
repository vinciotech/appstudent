import React, { useState } from 'react';
import { UserProvider } from '../components/UserProvider';
import {ThemeProvider } from '../components/ThemeProvider';
import ListaAttivita from '../components/ListaAttivita';
import Pannello from '../components/Pannello';
import UserComponent  from '../components/UserComponent';

function App() {
  const [listaAttivita, setAttivita] = useState([
    { id: 1, testo: 'Fare la spesa', completata: false },
    { id: 2, testo: 'Portare fuori il cane', completata: false },
    { id: 3, testo: 'Studiare React', completata: false }
  ]);
  

  const completaAttivita = (id) => {
    const nuoveAttivita = listaAttivita.map(attivita => {
      if (attivita.id === id) {
        return {...attivita, completata: true};
      }
      return attivita;
    });
    setAttivita(nuoveAttivita);
  };

  const addInLista  = () =>  {     
     var s = prompt("Inserisci una nuova attivita");

     const nuoveAttivita = listaAttivita.map(a => {return a});
     nuoveAttivita.push({id: nuoveAttivita.length+1, testo: s, completata: false});
     setAttivita(nuoveAttivita); 

  }

  const removeAttivita  = (id) =>  {     
    setAttivita(listaAttivita.filter(a => a.id !== id || (!a.completata))); 
 }
 
  return ( 
    <ThemeProvider>
      <UserProvider>
        <UserComponent />
        <ListaAttivita listaAttivita={listaAttivita} 
                      completaAttivita={completaAttivita} 
                      removeAttivita={removeAttivita}
        />
        <Pannello>   
            <button onClick={() =>addInLista()}>Aggiungi in lista</button>    
            <Pannello />
        </Pannello>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;