import React, { createContext, useState, useContext, useEffect } from 'react';   // 1. useEffect 
import {   showDialog } from '../features/dialogSlice';                         // 2. dialogSlice
import { useSelector, useDispatch } from 'react-redux';                         // 3. useSelector, useDispatch

import { useHandleOpenDialog, useHandleCloseDialog  } from '../features/utils.js'   // A. import utils

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
   const  handleOpenDialog = useHandleOpenDialog();                                // B. handleopendialog  
   const { value, confirmed } = useSelector (state => state.dialog);           // 4. value, confirmed
   const [user, setUser] = useState({ username: null });
   const dispatch = useDispatch();                                             // 5. dispatch  
 
   
   const logout = () => setUser({ username: null }); 
      
   const  login = () => {                                                         // C. codice di apertura dialog    
      console.log()                                                     
      handleOpenDialog({  
         title:'Login',
         message: 'Utente',
         value: user.username 
      })
   }; useHandleCloseDialog (() => { 
      setUser({ username: value });                                              // D. codice di chiusura
   } );  
   

      /*
      login 
      dispatch(showDialog( {                                                  // 6. codice di apertura showDialog
         title:'Login',
         message: 'Utente',
         value: user.username
      })) 
   } */

  
/*
   useEffect(()=>{                                                           // 7. codice di chiusura showeffect
      if (confirmed===true)  { 
         setUser({ username: value });
      }  
   },[confirmed,value])
  */ 
   

   return (
     <UserContext.Provider value={{ user, login, logout }}>
        {children}    
     </UserContext.Provider>
    );  
}; 


export const useUser = () => useContext(UserContext);
 