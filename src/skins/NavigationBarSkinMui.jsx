import {  Button,AppBar, Toolbar, Container } from '@mui/material'; 
import  UserComponent  from '../components/UserComponent';
import {  NavLink } from 'react-router-dom';

export  function Skin ( p ) {

    return (
      <AppBar>
        <Container>
          <Toolbar>
            <Button color="inherit" component={NavLink} to="/">Benvenuto</Button>
            <Button color="inherit" component={NavLink} to="/students">Studenti</Button>     
            <Button color="inherit" onClick={() => p.aggiungi()}>Aggiungi Studente</Button>   
            <Button color="inherit" component={NavLink} to="/config">Configurazione</Button>       
            <UserComponent />
          </Toolbar>
        </Container>        
      </AppBar>
    );
  
  }