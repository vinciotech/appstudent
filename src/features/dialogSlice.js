import {createSlice  } from '@reduxjs/toolkit'; 
 
const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        open: false,
        title: 'Conferma',
        message: '',
        value: '',
        confirmed: false
    },
    reducers: {
        
        resetDialog: (state) => {
            state.open= false;
            state.title= 'Conferma';
            state.message= '';
            state.value= '';
            state.confirmed= false;
         },
         
        showDialog: (state, action) => {
            state.open = true;
            state.confirmed = false;
            state.message = action.payload.message;            
            state.title = action.payload.title;       
            state.value = action.payload.value;            
         },
        handleClose: (state) => {
           state.open = false;
           state.confirmed = false;
        },
        handleConfirm: (state,action) => {
            state.open = false;
            state.confirmed = true;
            state.value = action.payload;
         },
    }     
      
}); 

export const { handleClose
             , handleConfirm
             , showDialog  
             , resetDialog
             } = dialogSlice.actions;
 
const dialogReducer = dialogSlice.reducer;

export default dialogReducer;
