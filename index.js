const express = require('express');
const app = express();
const port = 3001;

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota principal para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
