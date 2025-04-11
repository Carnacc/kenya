import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      })
      alert(response.data.message)
      // Salva il token (se lo vuoi utilizzare in seguito)
      localStorage.setItem('token', response.data.token)
      // Reindirizza alla home
      navigate('/home')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'Errore durante il login')
      } else {
        console.error('Errore nel login:', error)
      }
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
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
      <button type="submit">Accedi</button>
      <button 
        type="button"
        onClick={() => navigate('/')}
      >
        Registrati
    </button>
    </form>
  )
}

export default LoginForm
