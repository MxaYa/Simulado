import React, { useState } from "react";
import Lista from "./Lista";

const Area = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  // Lista de áreas para serem renderizadas
  const areas = [
    "Área 1", 
    "Área 2", 
    "Área 3", 
    "Área 4", 
    "Área 5", 
    "Área 6", 
    "Área 7", 
    "Área 8", 
    "Área 9", 
    "Área 10"
  ];
  const handleAreaClick = (area) => {
    setSelectedArea(area === selectedArea ? null : area);
  };

  return (
    <div>
      <h1>Listas de celulares por área</h1>

      <div className="area-buttons">
        {/* Botões para selecionar cada área */}
        {areas.map((area) => (
          <button 
            key={area} 
            onClick={() => handleAreaClick(area)}
            style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          >
            {area}
          </button>
        ))}
      </div>

      <div className="lista-areas">
        {/* Renderizar todas as listas se nenhuma área específica estiver selecionada */}
        {selectedArea === null ? (
          areas.map((area) => <Lista key={area} area={area} />)
        ) : (
          // Renderizar apenas a lista da área selecionada
          <Lista area={selectedArea} />
        )}
      </div>
    </div>
  );
};

export default Area;
