import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'
import theme from '../../theme'

export const Container = styled.div`
  background: ${theme.colors.layout.background};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavLink = styled(link).attrs()`
  color: ${theme.colors.fonts.header};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 30px;
  margin: 0 20px;
  text-decoration: none;
`
