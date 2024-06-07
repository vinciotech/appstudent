import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../components/ThemeProvider";
import { modStudent, addStudent, deleteStudent, selectStudentById, setWindowsStateStudente } from "./studentSlice";

// windowState: 'mod', 'new', 'view', 'none'

export default function StudentForm() {
  const { StudentFormSkin } = useTheme();
  const windowState = useSelector((state) => state.students.windowStateStudente);
  const selectedStudentId = useSelector((state) => state.students.studenteSelezionatoInListaId);
  const student = useSelector((state) => selectStudentById(state, selectedStudentId));
  const [formData, setFormData] = useState({ nome: "", cognome: "", eta: "", email: "", dataNascita: null });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isNew()) {
      setFormData({ nome: "", cognome: "", eta: "", email: "", dataNascita: null });
    } else {
      setFormData({ ...student });
    }
  }, [student, windowState]);

  if (isNone()) return null;

  function isNone() {
    return windowState === "none";
  }

  function isNew() {
    return windowState === "new";
  }

  const doDelete = () => {
    dispatch(deleteStudent(formData.id));
    dispatch(setWindowsStateStudente("none"));
  };

  const doModify = () => {
    dispatch(setWindowsStateStudente("mod"));
  };

  const doSubmit = (evt) => {
    evt.preventDefault();
    if (isNew()) {
      dispatch(addStudent({ ...formData }));
    } else {
      dispatch(modStudent({ ...formData }));
    }
    dispatch(setWindowsStateStudente("view"));
  };

  const doChange = (evt) => {  
    const { name, value } = evt.target;    
    
    let obj = { ...formData, [name]: value };
    setFormData(obj);
  };

  const doClose = () => {
    if (isNew()) {
      dispatch(setWindowsStateStudente("none"));
    } else {
      dispatch(setWindowsStateStudente("view"));
    }
  };

  return StudentFormSkin({ formData, doClose, doModify, doChange, doDelete, doSubmit, windowState });
}
