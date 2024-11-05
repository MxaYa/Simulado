import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('simulado', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
.then(() => {
    console.log('Conectado ao banco de dados!');
})
.catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});

export default sequelize;