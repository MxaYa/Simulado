import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js'
import CelularesModel from './models/Celulares.js';
import getCelularesByArea  from './services/celularServices.js';


const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());


app.get('/api/celulares', async (req, res) => {
  const areaId = req.query.areaId;
  try {
    const celulares = await getCelularesByArea(areaId);
    console.log('Area ID recebido:', areaId);
    console.log('Celulares encontrados:', celulares);
    res.json(celulares);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar celulares', error: error.message });
  }
});


// tela coringa
app.get('/', async (req, res) => {
  try {
    const Celulares = await CelularesModel.findAll();
    res.json(Celulares);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});


async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log(`Banco de dados sincronizado na porta ${port}`);
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

app.listen(port, () => {
  syncDatabase()
});
