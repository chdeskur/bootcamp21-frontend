import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './graphql'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [login, {loading, data}] = useMutation(LOGIN, {
    variables: {
      email, 
      passowrd: pass, 
    }, 
    onCompleted: ({ login: {token} }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    }
  })

  return (
    <div>
      <p>container</p>
      <div>
      <p>login container</p>
      <label>email</label>
      <input 
        type='text' 
        name='email' 
        onChange={e=>e.target.value} 
        value={email}
      />
      <label>password</label>
      <input 
        type='password' 
        name='password' 
        onChange={e=>e.target.value} 
        value={pass}
      />
      <button onClick={login()}>
        login
      </button>
      </div>
    </div>
  )
}

export default Login