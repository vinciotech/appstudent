import { TextField, Button, Box, Modal, Divider } from '@mui/material';  

const style = {  
    position: 'absolute',
    display: 'flex', 
    height: 600,
    top:'50%',
    left:'50%', 
    transform: 'translate(-50%, -50%)',
    p:4,
    bgcolor: 'background.paper' 
};

export function Skin( p ) {

    function isView() {
        return (p.windowState==='view');
    }
    function isNew() {
        return (p.windowState==='new');
    }
    
    function isMod() {
        return (p.windowState==='mod');
    }

    function FormData() { 
        
        return (
           
                <form onSubmit={p.doSubmit}> 
                    <TextField label="Nome" name="nome" id="nome" value={p.formData.nome} disabled={isView()} onChange={p.doChange}  fullWidth />
                    <TextField label="Cognome" name="cognome" id="cognome" value={p.formData.cognome}  disabled={isView()} onChange={p.doChange} fullWidth/> 
                    <TextField label="et&agrave;" name="eta" id="eta" value={p.formData.eta}  disabled={isView()}  onChange={p.doChange} fullWidth/> 
                    <TextField label="email" name="email" id="email" type="email" value={p.formData.email}  disabled={isView()} onChange={p.doChange} fullWidth/> 
                    <TextField label="Data di Nascita" type="date" name="dataNascita" id="dataNascita" value={p.formData.dataNascita}  disabled={isView()} onChange={p.doChange} fullWidth/> 
                    <Divider/>  
                    {isView() && <Button type="button" onClick={() => p.doModify() } variant="outlined">Modifica</Button>}
                    {isView() && <Button type="button" onClick={() => p.doDelete() } variant="outlined">Elimina</Button>}
                    {isNew() && <Button type="submit" variant="outlined">Salva e chiudi</Button>}
                    {isMod() && <Button type="submit"  variant="outlined">Salva</Button>}
                    {!isView() && <Button type="button" onClick={() => p.doClose() } variant="outlined">Annulla</Button>}
                </form>  
        );
    }


    return ( 
        <>
            { isNew() && <Modal open>
                <Box sx={style}> 
                    <FormData/>
                </Box>
                </Modal> }
            { !isNew() &&<FormData/> }
        </>
    );
    }