
import  UserComponent  from '../components/UserComponent'; 
import {  Link, NavLink } from 'react-router-dom';

export   function Skin ( p ) {

    return (
      <nav>
        <ul>
          <li><NavLink to="/">Benvenuto</NavLink> </li>
          <li><NavLink to="/students">Studenti</NavLink> </li>
          <li><Link onClick={() => p.aggiungi()}>Aggiungi Studente</Link> </li>
          <li><NavLink to="/config">Configurazione</NavLink> </li>
        </ul>
        <UserComponent />
      </nav>
    );
  
  }