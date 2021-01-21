import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 450px;
  background: ${theme.colors.layout.darkAccent};
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const LoginButton = styled.button`
  background-color: transparent;
  border-radius: 2em;
  border: 0.2em solid #1ecd97;
  outline: none;
  color: #1ecd97;
  cursor: pointer;
  font-size: 3vmin;
  padding: 0.7em 1.5em;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    background: #1ecd97;
    color: #333;
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
  padding: 10px;
`