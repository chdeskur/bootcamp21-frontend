import React from 'react'
import { Container, NavLink } from './styles'

export default () => (
  <Container>
    <NavLink to="/SignUp">Sign Up</NavLink>
    <NavLink to="/Profile">Me</NavLink>
    <NavLink to="/">Home</NavLink>
  </Container>
)