import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 450px;
  align-items: center;
  padding: 10px;
  background: ${theme.colors.layout.darkAccent};
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const LoginButton = styled.a`
  background-color: transparent;
  border-radius: 2em;
  border: 0.2em solid green;
  display: block;
  outline: none;
  color: green;
  cursor: pointer;
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: green;
    color: black;
  }
`

export const BigText = styled.p`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 18px;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 10px;
`

export const Text = styled.p`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.body.weight};
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 8px;
`