import React, { useState } from "react";
import axios from "axios";
import Lista from "./List"; 

const Area = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [celulares, setCelulares] = useState([]); 


  const fetchCelulares = async (id_area) => {
    try {
      const response = await axios.get(`/api/celulares/${id_area}`);
      setCelulares(response.data); 
    } catch (error) {
      console.error('Erro ao buscar celulares:', error);
    }
  };

  
  const handleAreaClick = (area) => {
    setSelectedArea(area);
    fetchCelulares(area.id_area);
  };

  return (
    <div>
      <h1>Selecione a área</h1>
      <div className="area-buttons">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleAreaClick({ id_area: index + 1, nome: `Área ${index + 1}` })}>
            Área {index + 1}
          </button>
        ))}
      </div>

      {selectedArea && (
        <div className="selected-area">
          <h2>Você selecionou: {selectedArea.nome}</h2>
          <Lista celulares={celulares} />
        </div>
      )}
    </div>
  );
};

export default Area;
