const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');

// Carico le variabili d'ambiente
dotenv.config();

const app = express();
app.use(cors()); // Abilita le richieste cross-origin
app.use(express.json()); // Permette di leggere i dati in formato JSON

// Importo le rotte, Questo significa che tutte le rotte definite in userRoutes.js
//  saranno raggiungibili sotto l’endpoint /api/users/....
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Rotta di test
app.get('/', (req, res) => {
  res.send('API funzionante!');
});

// Fa partire il server su una determinata porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
