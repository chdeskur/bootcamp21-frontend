import styled from 'styled-components'
import theme from '../theme'

export const Container = styled.div`
  background: ${theme.colors.layout.background};
  overflow: hidden;
  height: 100vh;
`

export const Title = styled.div`
    background-color: ${theme.colors.gold};
    box-sizing:border-box;
    color: white;
    font-size:25px;
    font-weight:700;
    padding:10px 0 10px 0;
    border-radius: 50px;
    text-align: center;
    position:relative;
    text-shadow:2px 2px 10px #D2691E;
    width:100%;
`

export const ErrorLabel = styled.a`
    font-size: 18px;
    font-weight: 700;
    color: red;
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

export const CentralContainer2 = styled.div`
  color: ${theme.colors.fonts.header};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 18px;
  overflow: auto;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 90%;
  max-width: 500px;
  margin: 50px auto;
  padding: 15px;
  background: ${theme.colors.layout.darkAccent};
  transition: 0.5s ease;

  &:hover {
    box-shadow: 8px 8px ${theme.colors.layout.header}; 
  }
`

export const CButton = styled.button`
    background-color: ${theme.colors.blue};
    border:2px solid #FFF;
    border-radius:5px;
    color: #FFF;
    font-family:Overlock;
    font-size:18px;
    padding:5px 20px;
    text-align:center;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 2px ${theme.colors.lightshade};
    }
`

export const Button = styled.button`
  color: black;
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