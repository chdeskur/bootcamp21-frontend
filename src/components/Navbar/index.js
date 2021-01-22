import React from 'react'
import {useHistory} from 'react-router-dom'
import { Container, NavLink } from './styles'
import {CButton} from '../styles'

export default ({log, setLog}) => {
  const history = useHistory()
  return (
  <Container>
    {log ?
    <>
      <NavLink to="/Profile">Me</NavLink>
      <NavLink to="/">Matches</NavLink>
      <NavLink to="/" onClick={() => {
        localStorage.removeItem('token'); 
        setLog(false);
      }}>Log Out</NavLink>
    </> : <NavLink to="/">Welcome to Spindr!</NavLink>}
  </Container>
)
}