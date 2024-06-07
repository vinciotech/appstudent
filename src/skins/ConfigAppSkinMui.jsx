import {  Button,Box, Typography, Container } from '@mui/material'; 
export function Skin ( p ) {

    return (
        <Container>
          <Box mt={10} ml={3}>
            <Button  onClick={() => p.handleChangeTheme('Def')}>Default Theme </Button>
            <Button  onClick={() => p.handleChangeTheme('Mui')}>Mui Theme </Button>
            <Button  onClick={() => p.handleChangeTheme('Def')}>Normal Theme </Button>
           <Typography variant="h5">
              il tema corrente è il tema corrente è: {p.theme}
          </Typography>      
        </Box>
        </Container>    
      );


}