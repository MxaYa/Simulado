export const fetchCelularesByArea = async (areaId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/celulares?areaId=${areaId}`);
    console.log('Dados recebidos:', response);
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar celulares:', error);
    throw error;
  }
};
