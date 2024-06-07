import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { showDialog, resetDialog } from './dialogSlice';


export function useHandleOpenDialog() {
  const dispatch = useDispatch();

  const handleOpenDialog = ({ title, message, value }) => {
    dispatch(showDialog({ title, message, value }));
  };

  return handleOpenDialog;
};

export function useHandleCloseDialog(onConfirm, onCancel) {
  const { confirmed, open } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) return;
    if (confirmed === true) {
      onConfirm();
    }
    if (confirmed !== null) { // Significa che il dialogo è stato sia confermato sia annullato
      if (onCancel)  onCancel();
      dispatch(resetDialog());
    }
  }, [confirmed, open]);
}