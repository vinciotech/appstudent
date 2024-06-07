import { Box } from '@mui/material'; 
import { DataGrid } from '@mui/x-data-grid';  
 
export function Skin( p ) { 
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nome', headerName: 'Nome',width: 150},
    { field: 'cognome',headerName: 'Cognome', width: 150},
    { field: 'eta', headerName: 'Età', type: 'number',width: 110},
    { field: 'nomeCompleto', 
      headerName: 'Nome Completo', 
      description: 'Questa colonna non è ordinabile',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.nome || ''} ${row.cognome || ''}`,
    },
  ]; 
return (

  <Box mt={10} >
  <DataGrid
     rows={p.students}
     columns = {columns} 
     initialState={{
      pagination: {
        paginationModel: {
          pageSize: 5,
        },
      },
    }} 
    onRowSelectionModelChange={(studenteId) => {      
      p.seleziona(studenteId)      
    }}
    />  
</Box>
);

} 