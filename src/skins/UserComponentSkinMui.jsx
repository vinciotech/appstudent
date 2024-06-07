import {  Button,  Typography } from '@mui/material'; 

export   function Skin ( p ) {
    
    return <>
    {p.user && p.user.username ? (
        
          <>
            <Typography> {p.user.username} </Typography>
            <Button color="inherit" onClick={p.logout}>Logout </Button>
          </>
    ) :
        (  
          <>
            <Typography> {p.user.username} </Typography>
            <Button color="inherit" onClick={p.login}>Login </Button>
          </>
        )
       
    }
     </>
 
}
