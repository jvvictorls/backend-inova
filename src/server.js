const app = require('./app');
const PORT = 8001;

app.listen(PORT, async() => {
  console.log(`Server listening on port ${PORT}`);
});
