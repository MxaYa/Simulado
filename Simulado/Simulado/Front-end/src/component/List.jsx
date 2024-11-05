import React, { useEffect, useState } from 'react';
import { fetchCelularesByArea } from '../api';

const ListaCelulares = ({ areaId }) => {
  const [celulares, setCelulares] = useState([]);
  
  useEffect(() => {
    const getCelulares = async () => {
      try {
        const response = await fetchCelularesByArea(areaId);
        if (Array.isArray(response)) {
          setCelulares(response);
        } else {
          console.error('Erro: A resposta não é um array', response);
          setCelulares([]);
        }
      } catch (error) {
        console.error('Erro ao buscar celulares:', error);
      }
    };
  
    if (areaId) {
      getCelulares();
    }
  }, [areaId]);
  

  return (
    <div>
      <h1>Lista de celulares da {`Área ${areaId}`}</h1>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {celulares.length > 0 ? (
            celulares.map((celular) => (
              <tr key={celular.id_celulares}>
                <td>{celular.id_celulares}</td>
                <td>{celular.modelo}</td>
                <td>{celular.preco}</td>
                <td><button>Vender</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum celular encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListaCelulares;
