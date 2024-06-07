import { Box,  Typography, Container } from '@mui/material'; 
export function Skin() {
  return (
    <Container>
      <Box mt={10} ml={3}>
      <Typography variant="h3">
          Benvenuti nell'app Student List
      </Typography>
      <Typography>
          Seleziona una voce dal menu
      </Typography>      
    </Box>
    </Container>    
  );
}
  