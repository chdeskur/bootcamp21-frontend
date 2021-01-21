import styled from 'styled-components'
import theme from '../theme'

export const Container = styled.div`
  background: ${theme.colors.layout.background};
  overflow: hidden;
`

export const CentralContainer = styled.div`
    background: white;
    box-shadow: 0 2px 10px 1px ${theme.colors.lightshade};
    width: 90%;
    max-width: 500px;
    margin: 50px auto;
    border-radius: 50px;
    padding: 20px;
    box-sizing: border-box;
    font: calc(12px + 0.5vw) ${theme.fonts.header.family};
`

export const Button = styled.button`
  color: ${theme.colors.fonts.button};
  background: ${theme.colors.layout.header};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 14px;
  border: none;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px ${theme.colors.layout.accent};
  }
`
export const Text = styled.p`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.body.weight};
  font-size: 18px;
  letter-spacing: 0.5px;
`

export const LabelRow = styled.tr`
    & td {
        padding: 10px 10px 0 10px;
        font-weight: 700;
    }
`

export const InputRow = styled.tr`
    & td {
        padding: 0 5px 10px 5px;
    }
`

export const Input = styled.input`
    border:1px solid #000;
    border-radius:5px;
    box-sizing:border-box;
    font-size:14px;
    margin:0;
    padding:3px 6px;
    width:100%;
    
    &:focus {
        box-shadow: 0 0 7px 3px ${theme.colors.blue};
    }
`

export const Select = styled.select`
    border:1px solid #000;
    border-radius:5px;
    box-sizing:border-box;
    font-size:14px;
    margin:0;
    padding:3px 6px;
    width:100%;

    &:focus {
        box-shadow: 0 0 7px 3px ${theme.colors.blue};
    }
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%
`