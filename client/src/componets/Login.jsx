import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App'
import axios from 'axios'

function Login () {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleClick = () => {
    navigate('/register')
  }

  /** AQUI PASSAREMOS OS DADOS RECEBIDOS NO CLIENT PARA O BACKEND */
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3005/login', { email, password })
      .then(result => {
        console.log(result)
        if(result.data === "Success") {
          navigate('/home')    /** Aqui volta para Home */
        }
      })
      .catch(err => console.log(err))
  }
  // Como chamamos a rota register axios.post("http://localhost:3005/register"
  // Então vamos ter que criar esta rota /register   no arquivo index.js

  return (
    <div
      className='d-flex justify-content-center
             	align-items-center bg-secondary vh-100'
    >
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control rounded-0'
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Login
          </button>
        </form>

        <p>Already Have an Account </p>
        <button
          className='btn btn-default border w-100 bg-light rounded-0 
                   text-decoration-none'
          onClick={handleClick}
        > 
          Sign Up
        </button>
      </div>
    </div>
  )
}
export default Login
