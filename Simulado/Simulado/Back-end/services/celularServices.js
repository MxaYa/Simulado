import Celulares from '../models/Celulares.js';
import Alocacao from '../models/Alocacao.js';


const getCelularesByArea = async (areaId) => {
  try {
    const celulares = await Alocacao.findAll({
      where: { area: areaId },
      include: [
        {
          model: Celulares,
          attributes: ['id_celulares', 'modelo', 'preco'],
        },
      ],
    });

    // Extraia os celulares da resposta
    return celulares.map(alocacao => ({
      id_celulares: alocacao.celular.id_celulares,
      modelo: alocacao.celular.modelo,
      preco: alocacao.celular.preco,
    }));
  } catch (error) {
    console.error('Erro ao buscar celulares:', error);
    throw error;
  }
};

export default getCelularesByArea;
