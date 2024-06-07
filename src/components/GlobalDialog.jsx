import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleConfirm } from "../features/dialogSlice";
import { useTheme } from "./ThemeProvider";

export default function GlobalDialog() {
  const { GlobalDialogSkin } = useTheme();
  const { open, title, message, value } = useSelector((state) => state.dialog);
  const [dialogValue, setDialogValue] = useState(value);

  const dispatch = useDispatch();

  const doChange = (evt) => {
    const { value } = evt.target;
    evt.stopPropagation();
    evt.preventDefault();
    setDialogValue(value);
  };

  const doConfirm = () => {
    console.log("utente inserito: " + dialogValue);
    dispatch(handleConfirm(dialogValue));
  };

  const doCancel = () => {
    dispatch(handleClose());
  };
  return GlobalDialogSkin({ open, title, message, dialogValue, doChange, doConfirm, doCancel });
}
