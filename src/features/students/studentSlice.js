import {createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
 
const studentEndPoint = "http://localhost:8080/studente";

const studentAdapter = createEntityAdapter();  

export const fetchStudents = createAsyncThunk (
    'students/fetchStudents',
    async () => {
        const response = await fetch(studentEndPoint, {
            method: 'GET'
        });
        const data = await response.json();
        return data.data;
    }
);
 
export const addStudent = createAsyncThunk (
    'students/addStudents',
    async (studente) => {
        const response = await fetch(studentEndPoint, {
            method: 'POST',
            headers: {'Content-Type':'application/json' },
            body: JSON.stringify(studente)
        });
        const data = await response.json();
        return data.data;
    }
);



export const deleteStudent = createAsyncThunk (
    'students/deleteStudents',
    async (studentId) => {
        const response = await fetch(`${studentEndPoint}/${studentId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data.data.id;
    }
);



export const modStudent = createAsyncThunk (
    'students/modStudent',
    async (studente) => {
        console.log('ModStudente: ---');
        console.log(studente);
        const response = await fetch(`${studentEndPoint}/${studente.id}`, {
            method: 'PUT',
            headers: {'Content-Type':'application/json' },
            body: JSON.stringify(studente)
        });
        const data = await response.json();
        return data.data;
    }
);




const studentSlice = createSlice({
    name: 'students',
    initialState: studentAdapter.getInitialState({
        studenteSelezionatoInListaId: null,
        windowStateStudente: 'none',
        data: null
    }),
    reducers: {
        
      selezionaLoStudenteInLista(state,action) {
            state.studenteSelezionatoInListaId = action.payload;
      },
      setWindowsStateStudente(state,action) {
        state.windowStateStudente = action.payload;
      },
      setData(state,action) {
        state.data = action.payload;
      }
    },
    extraReducers: (builder) => {
        builder
           .addCase(fetchStudents.fulfilled, studentAdapter.setAll)           
           .addCase(addStudent.fulfilled,  studentAdapter.addOne)                                       
           .addCase(deleteStudent.fulfilled,  studentAdapter.removeOne)                                    
           .addCase(modStudent.fulfilled,  studentAdapter.upsertOne)                         
           .addCase(fetchStudents.rejected,  () => alert("Errore recuperando la lista studenti"))
           .addCase(addStudent.rejected,  () => alert("Errore aggiungendo uno studente"))
           .addCase(modStudent.rejected,  () => alert("Errore modificando lo studente"))
           .addCase(deleteStudent.rejected,  () => alert("Errore eliminando lo studente"));

     }
    }
    ); 

export const {  selezionaLoStudenteInLista, 
                setWindowsStateStudente,
                setData 
             } = studentSlice.actions;

export const {  selectAll: selectAllStudents, 
                selectById: selectStudentById,
             } = studentAdapter.getSelectors( (state) => state.students);

// notazione equivalente a
//       var oggetto = studentAdapter.getSelectors( (state) => state.students)
//       const selectAllStudents = oggetto.selectAll;
//       const selectStudentById = oggetto.selectById;



const  studentReducer = studentSlice.reducer;

export default studentReducer;
