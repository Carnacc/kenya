import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password
      })
      alert(response.data.message)
      // Se vuoi, reindirizza al login dopo la registrazione:
      navigate('/login')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'Errore durante la registrazione')
      } else {
        console.error('Errore nella registrazione:', error)
      }
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Registrazione</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Registrati</button>
      
      <button 
        type="button"
        onClick={() => navigate('/login')}
        >
        Accedi
    </button>
    </form>
  )
}

export default RegisterForm
