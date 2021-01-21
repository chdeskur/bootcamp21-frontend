import React from 'react'
import { Container, NavLink } from './styles'

export default () => (
  <Container>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/'>About</NavLink>
    <NavLink to='/'>Login</NavLink>
  </Container>
)