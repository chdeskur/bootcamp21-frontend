import React from 'react'
import { Container, NavLink } from './styles'

export default () => (
  <Container>
    <NavLink to="/SignUp">Sign Up</NavLink>
    <NavLink to="/">Matches</NavLink>
    <NavLink to="/Profile">My Profile</NavLink>
  </Container>
)