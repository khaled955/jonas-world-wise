/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const CitiesContext = createContext(null);

 export default function CitiesProvider({ children }: { children: React.ReactNode }) {
  return (
    <CitiesContext.Provider value={null}>{children}</CitiesContext.Provider>
  );
}




 export function useCities() {
  const context = useContext(CitiesContext);

  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }

  return context;
}


