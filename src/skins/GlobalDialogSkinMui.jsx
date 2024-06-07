import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

export function Skin(p) {
  return (
    <Dialog open={p.open} onClose={() => p.doCancel()}>
      <DialogTitle>{p.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{p.message}</DialogContentText>
        <TextField label={p.message} name='prompt' id='prompt' value={p.dialogValue} onChange={p.doChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => p.doConfirm()} autoFocus>
          Conferma
        </Button>
        <Button onClick={() => p.doCancel()}>Annulla</Button>
      </DialogActions>
    </Dialog>
  );
}
