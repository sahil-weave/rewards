import { createContext, useContext } from "react";
import { useState } from "react";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [Patients, setPatients] = useState(["dadada"]);
  return (
    <PatientContext.Provider value={{ Patients, setPatients }}>
      {children}
    </PatientContext.Provider>
  );
};
export const usePatients = () => useContext(PatientContext);