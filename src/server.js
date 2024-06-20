const app = require('./app');
const connection = require('./config/connection'); 
const PORT = 8001;

app.listen(PORT, async() => {
  console.log(`Server listening on port ${PORT}`);

  // Testa se a conexão com o banco de dados está funcionando
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});
