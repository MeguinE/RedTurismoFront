// src/context/SociosContext.js
import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const SociosContext = createContext();

// Hook personalizado para usar el contexto
export const useSocios = () => {
  const context = useContext(SociosContext);
  if (!context) {
    throw new Error("useSocios debe ser usado dentro del SociosProvider");
  }
  return context;
};

// Componente proveedor para envolver tu aplicación
export const SociosProvider = ({ children }) => {
  const [socios, setSocios] = useState([]);

  // Función para actualizar los socios
  const actualizarSocios = (data) => {
    setSocios(data);
  };

  return (
    <SociosContext.Provider value={[socios, actualizarSocios]}>
      {children}
    </SociosContext.Provider>
  );
};
export default SociosContext;