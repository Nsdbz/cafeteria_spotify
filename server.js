console.log("Iniciando servidor..."); // Debug inicial
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Funciona!');
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Servidor listo en http://127.0.0.1:3000'); // Este mensaje debe aparecer
});