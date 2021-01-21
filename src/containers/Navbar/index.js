import React from 'react'
import { Container, NavLink } from './styles'

const Navbar = () => (
  <Container>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/'>About</NavLink>
    <NavLink to='/'>Login</NavLink>
  </Container>
)

export default Navbar
