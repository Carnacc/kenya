const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Registrazione di un nuovo utente
 */
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Controllo campi
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Compila tutti i campi richiesti' });
  }

  // Hash della password
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Errore nella cifratura della password' });
    }

    // Inserisco l'utente nel database
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (error, results) => {
      if (error) {
        // ER_DUP_ENTRY = l'email è già registrata
        if (error.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email già in uso' });
        }
        return res.status(500).json({ message: 'Errore nel salvataggio utente' });
      }

      return res.status(201).json({ message: 'Registrazione avvenuta con successo' });
    });
  });
};

/**
 * Login utente esistente
 */
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Controllo campi
  if (!email || !password) {
    return res.status(400).json({ message: 'Inserire email e password' });
  }

  // Cerco l'utente per email
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Errore nella query al database' });
    }

    // Se l'email non esiste
    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenziali non valide' });
    }

    const user = results[0];

    // Confronto la password inviata con quella salvata
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Errore durante la verifica della password' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Credenziali non valide' });
      }

      // Password corretta -> genero un token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // il token scade dopo 1 ora
      );

      return res.status(200).json({
        message: 'Login effettuato con successo',
        token
      });
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
};
